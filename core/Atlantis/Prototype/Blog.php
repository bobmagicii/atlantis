<?php

namespace Atlantis\Prototype;

use
\Atlantis as Atlantis,
\Nether   as Nether,
\Ramsey   as Ramsey;

use
\Exception as Exception;

class Blog
extends Atlantis\Prototype {

	protected static
	$Table = 'Blogs';

	protected static
	$IDField = 'ID';

	protected static
	$PropertyMap = [
		'ID'          => 'ID:int',
		'Enabled'     => 'Enabled:int',
		'TimeCreated' => 'TimeCreated:int',
		'TimeUpdated' => 'TimeUpdated:int',
		'UUID'        => 'UUID',
		'Alias'       => 'Alias',
		'Title'       => 'Title',
		'Tagline'     => 'Tagline'
	];

	// database fields.

	public Int $ID;
	public Int $Enabled;
	public Int $TimeCreated;
	public Int $TimeUpdated;
	public String $UUID;
	public String $Title;
	public String $Alias;
	public String $Tagline;

	// extension fields.

	public Atlantis\Util\Date $DateCreated;
	public Atlantis\Util\Date $DateUpdated;

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
		$this->DateUpdated = new Atlantis\Util\Date("@{$this->TimeUpdated}");
		return $this;
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	public function
	GetURL():
	String {
	/*//
	@date 2017-03-02
	get the url to view this blog.
	//*/

		$Router = Nether\Stash::Get('Router');

		return sprintf(
			'%s://%s/%s/',
			$Router->GetProtocol(),
			$Router->GetFullDomain(),
			$this->Alias
		);
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	static protected function
	ExtendQueryJoins($SQL):
	Void {
	/*//
	@date 2018-06-08
	//*/

		return;
	}

	static protected function
	ExtendQueryFields($SQL):
	Void {
	/*//
	@date 2018-06-08
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
			'Alias' => NULL
		];
	}

	static protected function
	FindApplyFilters($Opt,$SQL):
	Void {
	/*//
	@date 2018-06-08
	//*/

		if($Opt->Alias !== NULL)
		$SQL->Where('Main.Alias=:Alias');

		return;
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	static public function
	Create($Opt):
	self {

		$Opt = new Nether\Object\Mapped($Opt,[
			'TimeCreated' => time(),
			'TimeUpdated' => time(),
			'UUID'        => Ramsey\Uuid\Uuid::UUID4()->ToString(),
			'Title'       => NULL,
			'Alias'       => NULL,
			'Tagline'     => NULL
		]);

		if(!$Opt->Title)
		throw new Exception('Title cannot be empty.');

		if(!$Opt->Alias)
		$Opt->Alias = Atlantis\Util\Filters::RouteSafeAlias($Opt->Title);

		return parent::Create($Opt);
	}

}
