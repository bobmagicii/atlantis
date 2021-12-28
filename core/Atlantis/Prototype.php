<?php

namespace Atlantis;

use
\Atlantis as Atlantis,
\Nether as Nether,
\Ramsey as Ramsey;

use
\Exception as Exception;

class Prototype
extends Nether\Object\Mapped {
/*//
@date 2018-06-08
this is the main class we use to describe tables with and provide
a basic common used api for things that need to be done frequently.
this class expects a table will have the following fields, minimum:

	ID BIGINT UNSIGNED PRIMARY_KEY

these fields are soft required if they are intended to be used in
search queries:

	UserID INT UNSIGNED
	Enabled INT
	UUID VARCHAR(36)

classes which directly define the table will be in the prototype
namespace.
//*/

	static protected
	$Table = NULL;

	static protected
	$PropertyMap = [];

	static protected
	$IDField = 'ID';

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	public function
	Drop():
	void {
	/*//
	@date 2018-04-03
	//*/

		if(!property_exists(get_called_class(),'Table'))
		throw new Exception('Prototype Missing Table Property');

		if(!static::$Table)
		throw new Exception('Prototype Table Undefined');

		////////

		$Result = (Nether\Database::Get()->NewVerse())
		->Delete(static::$Table)
		->Where(sprintf('%s=:%s',static::$IDField,static::$IDField))
		->Limit(1)
		->Query($this);

		$this->OnDrop();

		return;
	}

	protected function
	OnDrop():
	void {
	/*//
	@date 2021-06-08
	//*/

		return;
	}

	public function
	Update(array $Input):
	self {
	/*//
	@date 2018-06-08
	//*/

		$Prop = NULL;
		$Val = NULL;
		$Field = NULL;
		$Slot = NULL;

		if(!property_exists(get_called_class(),'Table'))
		throw new Exception('Prototype Missing Table Property');

		if(!static::$Table)
		throw new Exception('Prototype Table Undefined');

		////////

		// update the object with the new data.

		foreach($Input as $Prop => $Val) switch($Prop) {
			default:
				if(property_exists($this,$Prop))
				$this->{$Prop} = $Val;
			break;
		}

		////////

		// generate a field map only containing the properties
		// that were modified by the input.

		$FieldMap = Atlantis\Util::BuildValueMap(
			static::$PropertyMap,
			$this
		);

		foreach($FieldMap as $Field => $Slot)
		if(!array_key_exists(substr($Slot,1),$Input))
		unset($FieldMap[$Field]);

		////////

		$Result = Nether\Database::Get()
		->NewVerse()
		->Update(static::$Table)
		->Fields($FieldMap)
		->Where(sprintf('%s=:%s',static::$IDField,static::$IDField))
		->Limit(1)
		->Query($this);

		//var_dump($Result);

		$this->OnUpdate($Input);

		return $this;
	}

	protected function
	OnUpdate():
	void {
	/*//
	@date 2021-06-08
	//*/

		return;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	public function
	IsUserOwner(?Atlantis\Prototype\User $User):
	bool {

		if(property_exists($this,'UserID'))
		if($User && $User->ID === $this->UserID)
		return TRUE;

		return FALSE;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	static public function
	GetByID(int $ID, bool $Safer=TRUE):
	?static {
	/*//
	@date 2018-06-08
	//*/

		$Result = NULL;
		$Row = NULL;
		$SQL = (new Nether\Database)->NewVerse();

		////////

		if(!property_exists(get_called_class(),'Table'))
		throw new Exception('Prototype Missing Table Property');

		if(!static::$Table)
		throw new Exception('Prototype Table Undefined');

		////////

		$SQL
		->Select(sprintf('%s Main',static::$Table))
		->Fields('Main.*')
		->Where(sprintf('Main.%s=:ID',static::$IDField))
		->Limit(1);

		static::ExtendQueryJoins($SQL);
		static::ExtendQueryFields($SQL);

		$Result = $SQL->Query([ ':ID' => $ID ]);

		if(!$Result->IsOK())
		throw new Exception('GetByID fail');

		////////

		$Row = $Result->Next();

		if(!$Row)
		return NULL;

		////////

		return new static($Row,$Safer);
	}

	static public function
	GetByUUID(string $UUID):
	?self {
	/*//
	@date 2018-06-08
	//*/

		$Result = NULL;
		$Row = NULL;
		$UUID = strtolower($UUID);
		$SQL = (new Nether\Database)->NewVerse();

		////////

		if(!property_exists(get_called_class(),'Table'))
		throw new Exception('Prototype Missing Table Property');

		if(!static::$Table)
		throw new Exception('Prototype Table Undefined');

		////////

		$SQL
		->Select(sprintf('%s Main',static::$Table))
		->Fields('Main.*')
		->Where('Main.UUID=:UUID')
		->Limit(1);

		static::ExtendQueryJoins($SQL);
		static::ExtendQueryFields($SQL);

		$Result = $SQL->Query([ ':UUID' => $UUID ]);

		if(!$Result->IsOK())
		throw new Exception('GetByUUID fail');

		////////

		$Row = $Result->Next();

		if(!$Row)
		return NULL;

		////////

		return new static($Row);
	}

	static public function
	ExtendMainFields($SQL, string $TableAlias, string $FieldPrefix):
	void {

		$SQL->Fields(Atlantis\Util::BuildPrefixedQueryFields(
			static::GetPropertyMap(),
			$TableAlias, $FieldPrefix
		));

		return;
	}

	static protected function
	ExtendQueryJoins($SQL, string $TableAlias='Main', string $FieldPrefix=''):
	void {
	/*//
	@date 2020-05-23
	extension classes should override this method for use to join
	additional tables that may be needed for filters and sorts.
	//*/

		return;
	}

	static protected function
	ExtendQueryFields($SQL, string $TablePrefix='', string $FieldPrefix=''):
	void {
	/*//
	@date 2020-05-23
	extension classes should override this method for use to include
	additional fields into selects from joined tables. it is provided
	as an optimisation for performing searches without bloating the
	result dataset with data you might use use in a specific case.
	//*/

		return;
	}

	static public function
	GetTableName():
	?string {
	/*//
	@date 2021-04-17
	//*/

		return static::$Table;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	static public function
	Find($Opt=NULL):
	Atlantis\Struct\SearchResult {
	/*//
	@date 2018-06-08
	//*/

		$Output = new Atlantis\Struct\SearchResult;
		$DB = Nether\Database::Get();
		$SQL = $DB->NewVerse();
		$Result = NULL;
		$Row = NULL;
		$OutputFilter = NULL;

		$BasicOpts = [
			'ID'                   => NULL,
			'AfterID'              => FALSE,
			'BeforeID'             => FALSE,
			'UserID'               => 0,
			'Enabled'              => TRUE,
			'Page'                 => 1,
			'Limit'                => 20,
			'Sort'                 => 'newest',
			'CustomFilterFunc'     => NULL,
			'CustomSortFunc'       => NULL,
			'AddonFields'          => [],
			'OutputFilter'         => NULL,

			// short circuit as many things needed to make the query as fast
			// as possible. mainly only used if you are are just looking
			// for a count of rows that match some criteria.
			'Quick'                => FALSE,

			// toggle pagination support on or off.
			'Pagination'           => TRUE,

			// if true the result object will get dumped out.
			'Debug'                => FALSE,

			// toggle table extensions.
			'ExtendJoinTables'     => TRUE,
			'ExtendSelectFields'   => TRUE
		];

		////////

		// prepare options.

		$Opt = new Nether\Object\Mapped($Opt,array_merge(
			$BasicOpts,
			static::FindExtendOptions($Opt)
		));

		$Opt->Offset = ($Opt->Page - 1) * $Opt->Limit;

		if(!is_array($Opt->OutputFilter))
		$Opt->OutputFilter = [ $Opt->OutputFilter ];

		// quick mode short circuit

		if($Opt->Quick === TRUE) {
			$Opt->Page = 1;
			$Opt->Limit = 1;
		}

		if($Opt->Quick === 1) {
			$Opt->Pagination = FALSE;
			$Opt->Page = 1;
			$Opt->Limit = 1;
		}

		// preare table selection.

		$SQL->Select(sprintf('%s Main',static::$Table));

		// prepare pagination.

		if($Opt->Pagination)
		$SQL->Fields('SQL_CALC_FOUND_ROWS Main.*');

		else
		$SQL->Fields('Main.*');

		if($Opt->Limit) {
			$SQL->Offset($Opt->Offset);
			$SQL->Limit($Opt->Limit);
		}

		// prepare table extensions.

		if($Opt->ExtendJoinTables || $Opt->ExtendSelectFields)
		static::ExtendQueryJoins($SQL);

		if($Opt->ExtendSelectFields)
		static::ExtendQueryFields($SQL);

		// filter by an object id or a list of object ids.

		if($Opt->ID !== NULL) {
			if(is_array($Opt->ID)) {
				if(count($Opt->ID))
				$SQL->Where(sprintf(
					'Main.%s IN(:ID)',
					static::$IDField
				));

				else
				$SQL->Where(sprintf(
					'Main.%s = -42',
					static::$IDField
				));
			}

			elseif(is_numeric($Opt->ID)) {
				$SQL->Where(sprintf(
					'Main.%s=:ID',
					static::$IDField
				));
			}
		}

		// fetch objects that were inserted adjacent to these ones.
		// currently depends on an auto incrementing pk.

		if($Opt->AfterID) ($SQL)
		->Where(sprintf('Main.%s > :AfterID',static::$IDField))
		->Sort(sprintf('Main.%s',static::$IDField),$SQL::SortAsc);

		elseif($Opt->BeforeID) ($SQL)
		->Where(sprintf('Main.%s < :BeforeID',static::$IDField))
		->Sort(sprintf('Main.%s',static::$IDField),$SQL::SortDesc);

		// filter by the owner of the object.

		if($Opt->UserID)
		$SQL->Where('Main.UserID = :UserID');

		// filter by the enabled status of the object.

		if($Opt->Enabled !== NULL) {
			if(is_bool($Opt->Enabled)) {
				if($Opt->Enabled)
				$SQL->Where('Main.Enabled=1');

				else
				$SQL->Where('Main.Enabled=0');
			}

			elseif(is_int($Opt->Enabled)) {
				$SQL->Where('Main.Enabled=:Enabled');
			}
		}

		// allow subclasses to provide additional filters.

		static::FindApplyFilters($Opt,$SQL);

		if(is_callable($Opt->CustomFilterFunc))
		($Opt->CustomFilterFunc)($Opt,$SQL);

		////////

		// prepare sorts.

		switch($Opt->Sort) {
			case 'newest':
				$SQL->Sort(sprintf('Main.%s',static::$IDField),$SQL::SortDesc);
			break;
			case 'oldest':
				$SQL->Sort(sprintf('Main.%s',static::$IDField),$SQL::SortAsc);
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

		if($Opt->Debug)
		$Output->Result = $Result;

		if(!$Result->IsOK())
		throw new Atlantis\Error\DatabaseQueryError($Result);

		$Found = (Int)(
			$DB
			->Query('SELECT FOUND_ROWS() AS Found')
			->Next()
			->Found
		);

		////////

		$Item = NULL;
		$AddonSrc = NULL;
		$AddonDest = NULL;

		while($Row = $Result->Next()) {
			$Output->Payload->Push($Item = new static($Row));

			if(is_array($Opt->AddonFields) && count($Opt->AddonFields))
			foreach($Opt->AddonFields as $AddonSrc => $AddonDest)
			$Item->{$AddonDest} = $Row->{$AddonSrc};
		}

		$Output->Count = count($Output->Payload);
		$Output->Page = $Opt->Page;
		$Output->Limit = $Opt->Limit;
		$Output->Total = $Found;

		if(is_array($Opt->OutputFilter)) {
			foreach($Opt->OutputFilter as $OutputFilter) {
				if(is_string($OutputFilter) && strpos($OutputFilter,'::') === 0)
				$OutputFilter = sprintf('%s%s',static::class,$OutputFilter);

				if(is_callable($OutputFilter))
				($OutputFilter)($Output,$Opt);
			}
		}

		return $Output;
	}

	static protected function
	FindExtendOptions($Opt):
	array {
	/*//
	@date 2018-06-08
	//*/

		return [];
	}

	static protected function
	FindApplyFilters($Opt,$SQL):
	void {
	/*//
	@date 2018-06-08
	//*/

		return;
	}

	static protected function
	FindApplySorts($Opt,$SQL):
	void {
	/*//
	@date 2018-06-08
	//*/

		switch($Opt->Sort) {
			case 'title-az':
				$SQL->Sort('Main.Title',$SQL::SortAsc);
			break;
			case 'title-za':
				$SQL->Sort('Main.Title',$SQL::SortDesc);
			break;
		}

		return;
	}


	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	static public function
	Insert($Opt):
	self {
	/*//
	@date 2020-04-10
	the current suggestion is that you override this method to do your data
	checks, and then call parent::Insert with your verified Opt object.
	//*/

		$DB = Nether\Database::Get();
		$SQL = $DB->NewVerse();

		$SQL
		->Insert(static::$Table)
		->Fields(Atlantis\Util::BuildValueMap(
			static::GetPropertyMap(),
			$Opt
		));

		////////

		$Result = $DB->Query($SQL,$Opt);

		if(!$Result->IsOK())
		throw new Atlantis\Error\DatabaseQueryError($Result);

		return static::GetByID($Result->GetInsertID());
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	protected
	Bool $Updated = FALSE;

	public function
	IsUpdated():
	bool {

		return $this->Updated;
	}

	public function
	SetUpdated(bool $Updated):
	self {

		$this->Updated = $Updated;
		return $this;
	}

	static public function
	Upsert($Opt=NULL,$Upt=NULL):
	self {
	/*//
	@date 2020-04-10
	the current suggestion is that you override this method to do your data
	checks, and then call parent::Insert with your verified Opt object.
	//*/

		if(!is_subclass_of(static::class,'Atlantis\\Packages\\Upsertable'))
		throw new Exception('This class does not implement the Upsertable interface.');

		$DB = Nether\Database::Get();
		$SQL = $DB->NewVerse();
		$Output = NULL;

		if(!$Upt)
		$Upt = [];

		elseif(is_object($Upt))
		$Upt = (Array)$Upt;

		$SQL
		->Insert(static::$Table)
		->Fields(Atlantis\Util::BuildValueMap(
			static::GetPropertyMap(),
			$Opt
		));

		if(count($Upt))
		$SQL = sprintf(
			'%s ON DUPLICATE KEY UPDATE %s=LAST_INSERT_ID(%s), %s',
			$SQL,
			static::$IDField,
			static::$IDField,
			Atlantis\Util::BuildUpdateString($Upt)
		);

		else
		$SQL = sprintf(
			'%s ON DUPLICATE KEY UPDATE %s=LAST_INSERT_ID(%s)',
			$SQL,
			static::$IDField,
			static::$IDField,
			Atlantis\Util::BuildUpdateString($Upt)
		);

		//echo (String)$SQL; die();

		////////

		$Result = $DB->Query($SQL,$Opt);

		if(!$Result->IsOK())
		throw new Atlantis\Error\DatabaseQueryError($Result);

		$Output = static::GetByID($Result->GetInsertID());

		if(!$Output)
		throw new Atlantis\Error\DatabaseQueryError($Result);

		if($Result->GetCount() === 2)
		$Output->SetUpdated(TRUE);

		return $Output;
	}

}
