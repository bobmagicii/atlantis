<?php

namespace Atlantis;

use
\Atlantis as Atlantis,
\Nether   as Nether;

use
\Exception as Exception,
\JsonSerializable as JsonSerializable;

class User
extends Nether\Auth\User
implements JsonSerializable {

	public
	Int $OptAdult;

	public
	?String $URL;

	public
	Atlantis\Util\Date $DateCreated;

	public
	Atlantis\Util\Date $DateSeen;

	public
	Atlantis\Util\Date $DateBanned;

	const
	AdultDisable = 0, // do not list, safespace direct access.
	AdultWarn    = 1, // list, apply visual warnings, blur images
	AdultAllow   = 2; // yolo

	public function
	__Construct($Input, Bool $MakeSafer=FALSE) {

		// i do not like this method of adding fields.

		static::$PropertyMap['_OptAdult'] = 'OptAdult:int';
		static::$PropertyMap['_BytesImages'] = 'BytesImages:int';

		// provide a way to still use user objects but omit various
		// personal data that is not needed outside of auth or
		// valid session things.

		if($MakeSafer) {
			if(is_array($Input))
			unset($Input['PHash'],$Input['PSand'],$Input['Email']);
			elseif(is_object($Input))
			unset($Input->PHash,$Input->PSand,$Input->Email);
		}

		parent::__Construct($Input);

		$this->DateCreated = new Atlantis\Util\Date("@{$this->TimeCreated}");
		$this->DateSeen = new Atlantis\Util\Date("@{$this->TimeSeen}");
		$this->DateBanned = new Atlantis\Util\Date("@{$this->TimeBanned}");

		return;
	}

	public function
	__Ready():
	Void {

		$this->URL = $this->GetURL();

		return;
	}

	public function
	JsonSerialize():
	Array {
	/*//
	@date 2020-06-01
	@implements JsonSerializable
	//*/

		return [
			'ID'             => $this->ID,
			'UUID'           => $this->UUID,
			'Alias'          => $this->Alias,
			'URL'            => $this->URL,
			'TimeCreated'    => $this->TimeCreated,
			'TimeSeen'       => $this->TimeSeen
		];
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	public function
	GetBlogs():
	Atlantis\Struct\SearchResult {
	/*//
	@date 2020-05-23
	get a list of blogs this user has access to.
	//*/

		return Atlantis\Prototype\BlogUser::Find([
			'UserID' => $this->ID,
			'Sort'   => 'blog-title-az'
		]);
	}

	public function
	GetURL():
	?Atlantis\Site\Endpoint {
	/*//
	@date 2017-03-02
	get the url to view this blog post.
	//*/

		return Atlantis\Site\Endpoint::Get('Atlantis.User.Home',[
			'UserAlias' => $this->Alias
		]);
	}

	public function
	ShouldAdultSafespace():
	Bool {
	/*//
	@date 2020-06-18
	//*/

		return $this->OptAdult === static::AdultDisable;
	}

	public function
	ShouldAdultWarn():
	Bool {
	/*//
	@date 2020-06-18
	//*/

		return $this->OptAdult !== static::AdultAllow;
	}

	public function
	ShouldAdultAllow():
	Bool {
	/*//
	@date 2020-06-18
	if we should allow adult content to be shown. additional care needs
	to be taken in the application side to determine if it needs to
	apply warnings and whatnot in the ui.
	//*/

		return $this->OptAdult !== static::AdultDisable;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	public function
	QueryBytesImages():
	Int {

		$Result = (
			(Nether\Database::Get()->NewVerse())
			->Select('UploadImages')
			->Fields('SUM(Bytes) AS TotalBytes')
			->Where('UserID=:UserID')
			->Query([
				':UserID' => $this->ID
			])
		);

		if(!$Result->IsOK())
		throw new Atlantis\Error\DatabaseQueryError($Result);

		return (Int)$Result->Next()->TotalBytes;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	static public function
	ExtendMainFields($SQL, String $TableAlias, String $FieldPrefix):
	Void {

		$SQL->Fields(Atlantis\Util::BuildPrefixedQueryFields(
			static::GetPropertyMap(),
			$TableAlias, $FieldPrefix
		));

		return;
	}

	static public function
	ExtendQueryJoins($SQL, String $TableAlias='Main', String $FieldPrefix=''):
	Void {
	/*//
	@date 2020-05-23
	extension classes should override this method for use to join
	additional tables that may be needed for filters and sorts.
	//*/

		return;
	}

	static public function
	ExtendQueryFields($SQL, String $TablePrefix='', String $FieldPrefix=''):
	Void {
	/*//
	@date 2020-05-23
	extension classes should override this method for use to include
	additional fields into selects from joined tables. it is provided
	as an optimisation for performing searches without bloating the
	result dataset with data you might use use in a specific case.
	//*/

		return;
	}

	static protected function
	FindExtendOptions($Opt):
	Array {
	/*//
	@date 2018-06-08
	//*/

		return [];
	}

	static protected function
	FindApplyFilters($Opt,$SQL):
	Void {
	/*//
	@date 2018-06-08
	//*/

		return;
	}

	static protected function
	FindApplySorts($Opt,$SQL):
	Void {
	/*//
	@date 2018-06-08
	//*/

		return;
	}


	static public function
	Find($Opt=NULL):
	Atlantis\Struct\SearchResult {
	/*//
	@date 2018-06-08
	//*/

		$DB = Nether\Database::Get();
		$SQL = $DB->NewVerse();
		$Result = NULL;
		$Row = NULL;
		$Dataset = NULL;
		$Output = new Atlantis\Struct\SearchResult;

		$BasicOpts = [
			'Pagination'           => TRUE,
			'ID'                   => NULL,
			'Page'                 => 1,
			'Limit'                => 20,
			'Sort'                 => 'newest',
			'Quick'                => FALSE,
			'AfterID'              => FALSE,
			'BeforeID'             => FALSE,
			'CustomFilterFunc'     => NULL,
			'CustomSortFunc'       => NULL,
			'ExtendJoinTables'     => TRUE,
			'ExtendSelectFields'   => TRUE,
			'DebugResult'          => FALSE
		];

		////////

		// prepare options.

		$Opt = new Nether\Object\Mapped($Opt,array_merge(
			$BasicOpts,
			static::FindExtendOptions($Opt)
		));

		// quick searches.
		// disable pagination and set the limit.

		if($Opt->Quick !== FALSE) {
			$Opt->Pagination = FALSE;

			if(is_int($Opt->Quick))
			$Opt->Limit = 1;
		}

		// calculate pagination.

		$Opt->Offset = ($Opt->Page - 1) * $Opt->Limit;

		////////

		// prepare filters.

		$SQL->Select(sprintf('%s Main','Users'));

		// prepare pagination.

		if($Opt->Pagination)
		$SQL->Fields('SQL_CALC_FOUND_ROWS Main.*');
		else
		$SQL->Fields('Main.*');

		if($Opt->Limit) {
			$SQL->Offset($Opt->Offset);
			$SQL->Limit($Opt->Limit);
		}

		// filter by object id.

		if($Opt->ID !== NULL) {
			if(is_array($Opt->ID)) {
				if(count($Opt->ID))
				$SQL->Where('Main.ID IN(:ID)');
				else
				$SQL->Where('Main.ID = -42');
			}
			elseif(is_numeric($Opt->ID)) {
				$SQL->Where(sprintf(
					'Main.%s=:ID',
					'ID'
				));
			}
		}

		if($Opt->ExtendJoinTables || $Opt->ExtendSelectFields)
		static::ExtendQueryJoins($SQL);

		if($Opt->ExtendSelectFields)
		static::ExtendQueryFields($SQL);

		static::FindApplyFilters($Opt,$SQL);

		if(is_callable($Opt->CustomFilterFunc))
		($Opt->CustomFilterFunc)($Opt,$SQL);

		////////

		// prepare sorts.

		switch($Opt->Sort) {
			case 'newest':
				$SQL->Sort(sprintf('Main.%s','ID'),$SQL::SortDesc);
			break;
			case 'oldest':
				$SQL->Sort(sprintf('Main.%s','ID'),$SQL::SortAsc);
			break;
			case 'newest-real':
				$SQL->Sort(sprintf('Main.%s','TimeCreated'),$SQL::SortDesc);
			break;
			case 'oldest-real':
				$SQL->Sort(sprintf('Main.%s','TimeCreated'),$SQL::SortAsc);
			break;
			case 'random':
				$SQL->Sort('RAND()');
			break;
			default:
				static::FindApplySorts($Opt,$SQL);
			break;
		}

		if(is_callable($Opt->CustomSortFunc))
		($Opt->CustomSortFunc)($Opt,$SQL);

		////////

		$Result = $SQL->Query($Opt);

		if($Opt->DebugResult)
		Atlantis\Util::VarDump($Result);

		if(!$Result->IsOK())
		throw new Atlantis\Error\DatabaseQueryError($Result);

		$Found = (Int)$DB->Query('SELECT FOUND_ROWS() AS Found')
		->Next()
		->Found;

		////////

		while($Row = $Result->Next())
		$Output->Payload->Push(new static($Row));

		$Output->Count = count($Output->Payload);
		$Output->Page = $Opt->Page;
		$Output->Limit = $Opt->Limit;
		$Output->Total = $Found;

		return $Output;
	}


}
