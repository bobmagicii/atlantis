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
		'Details'        => 'Details',
		'ImageHeaderID'  => 'ImageHeaderID:int',
		'ImageHeaderURL' => 'ImageHeaderURL',
		'ImageIconID'    => 'ImageIconID:int',
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
	public ?String $Details;
	public ?Int $ImageHeaderID;
	public ?String $ImageHeaderURL;
	public ?Int $ImageIconID;
	public ?String $ImageIconURL;
	public Int $OptAdult;

	// extension fields.

	public ?String $URL;
	public ?Atlantis\Prototype\User $User;
	public Atlantis\Util\Date $DateCreated;
	public Atlantis\Util\Date $DateUpdated;

	protected ?Atlantis\Prototype\UploadImage $ImageHeader;
	protected ?Atlantis\Prototype\UploadImage $ImageIcon;

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
		$this->User = new Atlantis\Prototype\User(
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

		$this->DateCreated = new Atlantis\Util\Date("@{$Raw['TimeCreated']}");
		$this->DateUpdated = new Atlantis\Util\Date("@{$Raw['TimeUpdated']}");
		return $this;
	}

	protected function
	OnReady_GetImages(Array $Raw):
	self {
	/*//
	prepare image urls.
	//*/

		//Atlantis\Util::VarDump($Raw);

		if(array_key_exists('IH_ID',$Raw) && $Raw['IH_ID']) {
			$this->ImageHeader = new Atlantis\Prototype\UploadImage(
				Atlantis\Util::StripPrefixedQueryFields($Raw,'IH_')
			);

			$this->ImageHeaderURL = $this->ImageHeader->GetURL('lg');
		}

		elseif($this->ImageHeaderURL === NULL) {
			$this->ImageHeaderURL = Nether\Option::Get('Atlantis.Blog.DefaultImageHeaderURL');
		}

		////////

		if(array_key_exists('II_ID',$Raw) && $Raw['II_ID']) {
			$this->ImageIcon = new Atlantis\Prototype\UploadImage(
				Atlantis\Util::StripPrefixedQueryFields($Raw,'II_')
			);

			$this->ImageIconURL = $this->ImageIcon->GetURL('th');
		}

		elseif($this->ImageIconURL === NULL) {
			$this->ImageIconURL = Nether\Option::Get('Atlantis.Blog.DefaultImageIconURL');
		}

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
	GetTagURL(BlogTag $Tag):
	String {

		return sprintf(
			'%s/?tags=%s',
			$this->GetURL(),
			$Tag->Alias
		);
	}

	public function
	GetImageHeaderURL($Size='lg'):
	String {
	/*//
	@date 2020-09-21
	get the header image for this blog or the global default if none.
	//*/

		if(!isset($this->ImageHeader))
		return Nether\Option::Get('Atlantis.Blog.DefaultImageHeaderURL');

		return $this->ImageHeader->GetURL($Size);
	}

	public function
	GetImageIconURL($Size='th'):
	String {
	/*//
	@date 2020-09-21
	get the icon for this blog or the global default if none.
	//*/

		if(!isset($this->ImageIcon))
		return Nether\Option::Get('Atlantis.Blog.DefaultImageIconURL');

		return $this->ImageIcon->GetURL($Size);
	}

	public function
	GetBlogUser(?Atlantis\Prototype\User $User):
	?Atlantis\Prototype\BlogUser {
	/*//
	@date 2020-09-04
	get the user's blog access.
	//*/

		if(!$User)
		return NULL;

		return Atlantis\Prototype\BlogUser::GetByBlogUser(
			$this->ID,
			$User->ID
		);
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

	public function
	GetRecentPosts(Int $Limit=5, Int $Page=1, ?Array $Opt=NULL):
	Atlantis\Struct\SearchResult {
	/*//
	@date 2020-05-23
	//*/

		// for now pull adult posts when directly asking
		// this blog for its posts. we are going to start
		// with a warning banner until the user options
		// are complete.

		$Opt = new Nether\Object\Mapped($Opt,[
			'Adult'   => 0,
			'Enabled' => 1,
			'Sort'    => 'newest',

			'BlogID' => $this->ID,
			'Page'   => $Page,
			'Limit'  => $Limit
		]);

		return Atlantis\Prototype\BlogPost::Find($Opt);
	}

	public function
	GetPopularPosts(Int $Limit=5, Int $Page=1, ?Array $Opt=NULL):
	Atlantis\Struct\SearchResult {
	/*//
	@date 2020-05-26
	//*/

		$Opt = new Nether\Object\Mapped($Opt,[
			'Adult'   => 0,
			'Enabled' => 1
		]);

		return LogBlogPostTraffic::FindPopularPosts([
			'BlogID'    => $this->ID,
			'Enabled'   => $Opt->Enabled,
			'Adult'     => $Opt->Adult,
			'Page'      => $Page,
			'Limit'     => $Limit,
			'Timeframe' => strtotime('-30 days')
		]);
	}

	public function
	GetTags(Int $Limit=0, Int $Page=1, ?Array $Opt=NULL):
	Atlantis\Struct\SearchResult {
	/*//
	@date 2020-09-29
	//*/

		$Opt = new Nether\Object\Mapped($Opt,[
			'BlogID'  => $this->ID,
			'Enabled' => 1,
			'Sort'    => 'title-az',
			'Page'    => $Page,
			'Limit'   => $Limit
		]);

		return BlogTag::Find($Opt);
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
	ExtendQueryJoins($SQL, String $TableAlias='Main', String $FieldPrefix=''):
	Void {
	/*//
	@date 2018-06-08
	//*/

		$SQL
		->Join("Users {$FieldPrefix}BU ON {$TableAlias}.UserID={$FieldPrefix}BU.ID")
		->Join("UploadImages {$FieldPrefix}BII ON {$TableAlias}.ImageIconID={$FieldPrefix}BII.ID")
		->Join("UploadImages {$FieldPrefix}BIH ON {$TableAlias}.ImageHeaderID={$FieldPrefix}BIH.ID");

		Atlantis\Prototype\UploadImage::ExtendQueryJoins($SQL,"{$FieldPrefix}BII","{$FieldPrefix}II_");
		Atlantis\Prototype\UploadImage::ExtendQueryJoins($SQL,"{$FieldPrefix}BIH","{$FieldPrefix}IH_");

		return;
	}

	static protected function
	ExtendQueryFields($SQL, String $TablePrefix='', String $FieldPrefix=''):
	Void {
	/*//
	@date 2018-06-08
	//*/

		Atlantis\Prototype\User::ExtendMainFields($SQL,"{$FieldPrefix}BU","{$FieldPrefix}BU_");
		Atlantis\Prototype\UploadImage::ExtendMainFields($SQL,"{$FieldPrefix}BII","{$FieldPrefix}II_");
		Atlantis\Prototype\UploadImage::ExtendMainFields($SQL,"{$FieldPrefix}BIH","{$FieldPrefix}IH_");
		Atlantis\Prototype\UploadImage::ExtendQueryFields($SQL,"{$FieldPrefix}BII","{$FieldPrefix}II_");
		Atlantis\Prototype\UploadImage::ExtendQueryFields($SQL,"{$FieldPrefix}BIH","{$FieldPrefix}IH_");
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
