<?php

namespace Atlantis\Prototype;

use
\Atlantis as Atlantis,
\Nether   as Nether,
\Ramsey   as Ramsey;

use
\Exception as Exception;

class BlogTag
extends Atlantis\Prototype {

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
		'UUID'        => 'UUID',
		'Title'       => 'Title',
		'Alias'       => 'Alias'
	];

	// database fields.

	public Int $ID;
	public Int $BlogID;
	public Int $Enabled;
	public Int $TimeCreated;
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

		$this->DateCreated = new Atlantis\Util\Date("@{$this->TimeCreated}");
		return $this;
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
			'BlogID' => NULL,
			'Alias'  => NULL,
			'Title'  => NULL
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

		if($Opt->Alias !== NULL)
		$SQL->Where('Main.Alias=:Alias');

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

		$Opt = new Nether\Object\Mapped($Opt,[
			'BlogID'      => 0,
			'Enabled'     => 1,
			'TimeCreated' => time(),
			'UUID'        => Atlantis\Util::UUID(),
			'Title'       => NULL
		]);

		if(!$Opt->BlogID)
		throw new Exception('Must have a BlogID');

		if(!$Opt->Title)
		throw new Exception('Must have a Title');

		return parent::Insert($Opt);
	}

}
