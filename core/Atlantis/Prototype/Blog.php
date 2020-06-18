<?php

namespace Atlantis\Prototype;

use
\Atlantis as Atlantis,
\Nether   as Nether;

use
\Exception as Exception,
\JsonSerializable as JsonSerializable;

class Blog
extends Atlantis\Prototype
implements JsonSerializable {

	protected static
	$Table = 'Blogs';

	protected static
	$IDField = 'ID';

	protected static
	$PropertyMap = [
		'ID'             => 'ID:int',
		'UserID'         => 'UserID:int',
		'Enabled'        => 'Enabled:int',
		'TimeCreated'    => 'TimeCreated:int',
		'TimeUpdated'    => 'TimeUpdated:int',
		'UUID'           => 'UUID',
		'Alias'          => 'Alias',
		'Title'          => 'Title',
		'Tagline'        => 'Tagline',
		'ImageHeaderURL' => 'ImageHeaderURL',
		'ImageIconURL'   => 'ImageIconURL',
		'OptAdult'       => 'OptAdult:int'
	];

	// database fields.

	public Int $ID;
	public Int $UserID;
	public Int $Enabled;
	public Int $TimeCreated;
	public Int $TimeUpdated;
	public String $UUID;
	public String $Title;
	public String $Alias;
	public ?String $Tagline;
	public ?String $ImageHeaderURL;
	public ?String $ImageIconURL;
	public Int $OptAdult;

	// extension fields.

	public ?String $URL;
	public ?Atlantis\User $User;
	public Atlantis\Util\Date $DateCreated;
	public Atlantis\Util\Date $DateUpdated;

	// some constants for context.

	const
	AdultDisabled = 0,
	AdultEnabled  = 1,
	AdultForced   = 2;

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	public function
	OnReady(Array $Raw):
	Void {
	/*//
	prepare some data for this object.
	//*/

		($this)
		->OnReady_GetUser($Raw)
		->OnReady_GetDates($Raw)
		->OnReady_GetImages($Raw);

		$this->URL = $this->GetURL();

		return;
	}

	protected function
	OnReady_GetUser(Array $Raw):
	self {
	/*//
	prepare a blog object depending on if it was fetched with an inclusion
	query or not.
	//*/

		$this->User = NULL;

		if(array_key_exists('BU_ID',$Raw))
		$this->User = new Atlantis\User(
			Atlantis\Util::StripPrefixedQueryFields(
				$Raw, 'BU_'
			),
			TRUE
		);

		return $this;
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

	protected function
	OnReady_GetImages(Array $Raw):
	self {
	/*//
	prepare image urls.
	//*/

		if($this->ImageHeaderURL === NULL)
		$this->ImageHeaderURL = Nether\Option::Get('Atlantis.Blog.DefaultImageHeaderURL');

		if($this->ImageIconURL === NULL)
		$this->ImageIconURL = Nether\Option::Get('Atlantis.Blog.DefaultImageIconURL');

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
			'ID'             => $this->ID,
			'UUID'           => $this->UUID,
			'Title'          => $this->Title,
			'Tagline'        => $this->Tagline,
			'Alias'          => $this->Alias,
			'URL'            => $this->URL,
			'TimeCreated'    => $this->TimeCreated,
			'TimeUpdated'    => $this->TimeUpdated,
			'ImageHeaderURL' => $this->ImageHeaderURL,
			'ImageIconURL'   => $this->ImageIconURL,
			'OptAdult'       => $this->OptAdult,
			'User'           => $this->User
		];
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	public function
	GetRecentPosts(Int $Limit, Int $Page):
	Atlantis\Struct\SearchResult {
	/*//
	@date 2020-05-23
	//*/

		// for now pull adult posts when directly asking
		// this blog for its posts. we are going to start
		// with a warning banner until the user options
		// are complete.

		return Atlantis\Prototype\BlogPost::Find([
			'BlogID' => $this->ID,
			'Adult'  => NULL,
			'Page'   => $Page,
			'Limit'  => $Limit,
			'Sort'   => 'newest'
		]);
	}

	public function
	GetPopularPosts(Int $Limit, Int $Page):
	Atlantis\Struct\SearchResult {
	/*//
	@date 2020-05-26
	//*/

		return LogBlogPostTraffic::FindPopularPosts([
			'BlogID'    => $this->ID,
			'Adult'     => NULL,
			'Page'      => 1,
			'Limit'     => 5,
			'Timeframe' => strtotime('-30 days')
		]);
	}

	public function
	GetURL():
	?Atlantis\Site\Endpoint {
	/*//
	@date 2017-03-02
	get the url to view this blog post.
	//*/

		return Atlantis\Site\Endpoint::Get('Atlantis.Blog.Home',[
			'BlogAlias' => $this->Alias
		]);
	}

	public function
	IsAdult():
	Bool {
	/*//
	@date 2020-06-18
	//*/

		return ($this->OptAdult !== static::AdultDisabled);
	}


	public function
	IsAdultForced():
	Bool {
	/*//
	@date 2020-06-18
	//*/

		return ($this->OptAdult === static::AdultForced);
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	static public function
	GetByAlias(String $Alias):
	?self {

		$SQL = Nether\Database::Get()->NewVerse();
		$Result = NULL;

		////////

		$SQL
		->Select(sprintf('%s Main',static::$Table))
		->Fields('Main.*')
		->Where('Main.Alias LIKE :Alias')
		->Limit(1);

		static::ExtendQueryJoins($SQL);
		static::ExtendQueryFields($SQL);

		$Result = $SQL->Query([
			':Alias' => $Alias
		]);

		////////

		if(!$Result->IsOK())
		throw new Atlantis\Error\DatabaseQueryError($Result);

		if($Result->GetCount() !== 1)
		return NULL;

		return new static($Result->Next());
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	static protected function
	ExtendQueryJoins($SQL):
	Void {
	/*//
	@date 2018-06-08
	//*/

		$SQL
		->Join('Users BU ON Main.UserID=BU.ID');

		return;
	}

	static protected function
	ExtendQueryFields($SQL):
	Void {
	/*//
	@date 2018-06-08
	//*/

		$SQL
		->Fields(Atlantis\Util::BuildPrefixedQueryFields(
			Atlantis\User::GetPropertyMap(),
			'BU', 'BU_'
		));

		return;
	}

	static protected function
	FindExtendOptions($Opt):
	Array {
	/*//
	@date 2020-05-23
	//*/

		return [
			'Alias'    => NULL,
			'Adult'    => 0
		];
	}

	static protected function
	FindApplyFilters($Opt,$SQL):
	Void {
	/*//
	@date 2018-06-08
	//*/

		if($Opt->Adult === FALSE)
		$Opt->Adult = 0;

		////////

		if(is_numeric($Opt->Adult))
		$SQL->Where('Main.OptAdult=:Adult');

		if($Opt->Alias !== NULL)
		$SQL->Where('Main.Alias LIKE :Alias');

		return;
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	static public function
	Insert($Opt):
	self {

		$Opt = new Nether\Object\Mapped($Opt,[
			'UserID'      => NULL,
			'TimeCreated' => time(),
			'TimeUpdated' => time(),
			'UUID'        => Atlantis\Util::UUID(),
			'Title'       => NULL,
			'Alias'       => NULL,
			'Tagline'     => NULL,
			'OptAdult'    => 0
		]);

		if(!$Opt->UserID)
		throw new Exception('Blog must have a primary owner.');

		if(!$Opt->Title)
		throw new Exception('Title cannot be empty.');

		if(!$Opt->Alias)
		$Opt->Alias = Atlantis\Util\Filters::RouteSafeAlias($Opt->Title);

		return parent::Insert($Opt);
	}

}
