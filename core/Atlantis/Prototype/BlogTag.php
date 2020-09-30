<?php

namespace Atlantis\Prototype;

use
\Atlantis as Atlantis,
\Nether   as Nether,
\Ramsey   as Ramsey;

use
\Exception as Exception,
\JsonSerializable as JsonSerializable;

class BlogTag
extends Atlantis\Prototype
implements
	Atlantis\Packages\Upsertable,
	JsonSerializable {

	protected static
	$Table = 'BlogTags';

	protected static
	$IDField = 'ID';

	protected static
	$PropertyMap = [
		'ID'          => 'ID:int',
		'BlogID'      => 'BlogID:int',
		'Enabled'     => 'Enabled:int',
		'TimeCreated' => 'TimeCreated:int',
		'CountUse'    => 'CountUse:int',
		'UUID'        => 'UUID',
		'Title'       => 'Title',
		'Alias'       => 'Alias'
	];

	// database fields.

	public Int $ID;
	public Int $BlogID;
	public Int $Enabled;
	public Int $TimeCreated;
	public Int $CountUse;
	public String $UUID;
	public String $Title;
	public String $Alias;

	// extension fields.

	public Atlantis\Util\Date $DateCreated;

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	public function
	OnReady(Array $Raw):
	Void {
	/*//
	prepare some data for this object.
	//*/

		($this)
		->OnReady_GetDates($Raw);

		return;
	}

	protected function
	OnReady_GetDates(Array $Raw):
	self {
	/*//
	prepare the date objects.
	//*/

		$this->DateCreated = new Atlantis\Util\Date("@{$Raw['TimeCreated']}");
		return $this;
	}

	public function
	JsonSerialize():
	Array {
	/*//
	@date 2020-06-01
	@implements JsonSerializable
	//*/

		return [
			'ID'     => $this->ID,
			'BlogID' => $this->BlogID,
			'Title'  => $this->Title,
			'Alias'  => $this->Alias
		];
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	public function
	UpdateUsage():
	Int {
	/*//
	@date 2020-09-30
	//*/

		$Row = (
			(Nether\Database::Get()->NewVerse())
			->Select('BlogPostTags')
			->Fields('COUNT(*) AS TotalFound')
			->Where('TagID=:TagID')
			->Query([
				':TagID' => $this->ID
			])
			->Next()
		);

		if($Row)
		$this->Update([
			'CountUse' => $Row->TotalFound
		]);

		return 0;
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	static public function
	GetByBlog(Int $BlogID):
	Atlantis\Struct\SearchResult {
	/*//
	@date 2020-09-29
	//*/

		$Result = static::Find([
			'BlogID' => $BlogID
		]);

		return $Result;
	}

	static public function
	GetByBlogTitle(Int $BlogID, String $Title):
	?self {

		return static::GetByBlogAlias(
			$BlogID,
			Atlantis\Util\Filters::RouteSafeAlias($Title)
		);
	}

	static public function
	GetByBlogAlias(Int $BlogID, String $Alias):
	?self {

		$SQL = (Nether\Database::Get()->NewVerse())
		->Select(sprintf('%s Main',static::$Table))
		->Fields('Main.*')
		->Where('BlogID=:BlogID')
		->Where('Alias=:Alias')
		->Limit(1);

		static::ExtendQueryJoins($SQL);
		static::ExtendQueryFields($SQL);

		$Row = $SQL->Query([
			':BlogID' => $BlogID,
			':Alias'  => $Alias
		])->Next();

		if(!$Row)
		return NULL;

		return new static($Row);
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	static protected function
	ExtendQueryJoins($SQL, String $TableAlias='Main', String $FieldPrefix=''):
	Void {
	/*//
	@date 2020-09-29
	//*/

		return;
	}

	static protected function
	ExtendQueryFields($SQL, String $TablePrefix='', String $FieldPrefix=''):
	Void {
	/*//
	@date 2020-09-29
	//*/

		return;
	}

	static protected function
	FindExtendOptions($Opt):
	Array {
	/*//
	@date 2020-05-23
	//*/

		return [
			'BlogID'   => NULL,
			'Alias'    => NULL,
			'Title'    => NULL,
			'OnlyUsed' => TRUE
		];
	}

	static protected function
	FindApplyFilters($Opt,$SQL):
	Void {
	/*//
	@date 2020-09-29
	//*/

		if($Opt->BlogID !== NULL)
		$SQL->Where('Main.BlogID=:BlogID');

		if($Opt->Alias !== NULL) {
			if(is_array($Opt->Alias))
			$SQL->Where('Main.Alias IN(:Alias)');
			else
			$SQL->Where('Main.Alias=:Alias');
		}

		if($Opt->OnlyUsed)
		$SQL->Where('Main.CountUse>0');

		return;
	}

	static protected function
	FindApplySorts($Opt,$SQL):
	Void {
	/*//
	@date 2020-09-29
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

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	static public function
	Insert($Opt):
	self {
	/*//
	@date 2020-09-29
	//*/

		return static::Upsert($Opt);
	}

	static public function
	Upsert($Opt=NULL,$Upt=NULL):
	self {
	/*//
	@date 2020-09-29
	//*/

		$Opt = new Nether\Object\Mapped($Opt,[
			'BlogID'      => 0,
			'Enabled'     => 1,
			'TimeCreated' => time(),
			'UUID'        => Atlantis\Util::UUID(),
			'Title'       => NULL,
			'Alias'       => NULL
		]);

		$Upt = new Nether\Object\Mapped($Upt,[
		],['DefaultKeysOnly'=>TRUE]);

		if(!$Opt->BlogID)
		throw new Exception('Must have a BlogID');

		if(!$Opt->Title)
		throw new Exception('Must have a Title');

		if(!$Opt->Alias && $Opt->Title)
		$Opt->Alias = Atlantis\Util\Filters::RouteSafeAlias($Opt->Title);

		if(!$Opt->Alias)
		throw new Exception('Must have a Alias');

		return parent::Upsert($Opt,$Upt);
	}

}
