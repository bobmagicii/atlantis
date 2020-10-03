<?php

namespace Atlantis\Prototype;

use
\Atlantis as Atlantis,
\Nether   as Nether,
\Ramsey   as Ramsey;

use
\Exception as Exception;

class BlogPost
extends Atlantis\Prototype {

	protected static
	$Table = 'BlogPosts';

	protected static
	$IDField = 'ID';

	protected static
	$PropertyMap = [
		'ID'          => 'ID:int',
		'BlogID'      => 'BlogID:int',
		'UserID'      => 'UserID:int',
		'TimeCreated' => 'TimeCreated:int',
		'TimeUpdated' => 'TimeUpdated:int',
		'Enabled'     => 'Enabled:int',
		'CountViews'  => 'CountViews:int',
		'UUID'        => 'UUID',
		'OptAdult'    => 'OptAdult:int',
		'Title'       => 'Title',
		'Alias'       => 'Alias',
		'Content'     => 'Content'
	];

	// database fields.

	public Int $ID;
	public Int $BlogID;
	public Int $UserID;
	public Int $TimeCreated;
	public Int $TimeUpdated;
	public Int $Enabled;
	public Int $CountViews;
	public String $UUID;
	public String $Title;
	public String $Alias;
	public String $Content;
	public Int $OptAdult;

	// extension fields.

	public ?Atlantis\Prototype\Blog $Blog;
	public ?Atlantis\Prototype\User $User;
	public ?String $URL;
	public Atlantis\Util\Date $DateCreated;
	public Atlantis\Util\Date $DateUpdated;

	// flags and stuff

	public const
	EnableStateAny      = NULL,
	EnableStateNuked    = -1,
	EnableStateDraft    = 0,
	EnableStatePublic   = 1,
	EnableStateUnlisted = 2,
	EnableStateFriends  = 3;

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	public function
	OnReady(Array $Raw):
	Void {
	/*//
	prepare some data for this object.
	//*/

		($this)
		->OnReady_GetBlog($Raw)
		->OnReady_GetUser($Raw)
		->OnReady_GetDates($Raw);

		$this->URL = $this->GetURL();

		return;
	}

	protected function
	OnReady_GetBlog(Array $Raw):
	self {
	/*//
	prepare a blog object depending on if it was fetched with an inclusion
	query or not.
	//*/

		$this->Blog = NULL;

		if(array_key_exists('B_ID',$Raw))
		$this->Blog = new Atlantis\Prototype\Blog(
			Atlantis\Util::StripPrefixedQueryFields(
				$Raw, 'B_'
			)
		);

		return $this;
	}

	protected function
	OnReady_GetUser(Array $Raw):
	self {
	/*//
	prepare a blog object depending on if it was fetched with an inclusion
	query or not.
	//*/

		$this->User = NULL;

		if(array_key_exists('PU_ID',$Raw))
		$this->User = new Atlantis\Prototype\User(
			Atlantis\Util::StripPrefixedQueryFields(
				$Raw, 'PU_'
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

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	public function
	GetURL():
	?Atlantis\Site\Endpoint {
	/*//
	@date 2017-03-02
	get the url to view this blog post.
	//*/

		return Atlantis\Site\Endpoint::Get('Atlantis.Blog.Post',[
			'BlogAlias' => $this->Blog->Alias,
			'PostAlias' => $this->Alias
		]);
	}

	public function
	GetBlogUser(?Atlantis\Prototype\User $User):
	?Atlantis\Prototype\BlogUser {
	/*//
	@date 2020-07-04
	fetch the blog's BlogUser object for checking extended user permissions.
	//*/

		if(!$User)
		return NULL;

		return Atlantis\Prototype\BlogUser::GetByBlogUser(
			$this->Blog->ID,
			$User->ID
		);
	}

	public function
	GetTags($Opt=NULL):
	Atlantis\Struct\SearchResult {

		$Opt = new Nether\Object\Mapped($Opt,[
			'PostID' => $this->ID
		]);

		return Atlantis\Prototype\BlogPostTag::Find($Opt);
	}

	public function
	GetStyleClassList():
	Array {
	/*//
	@date 2020-09-04
	//*/

		$Output = [];

		if($this->IsAdult())
		$Output[] = 'PostFlagAdult';

		if($this->IsDraft())
		$Output[] = 'PostFlagDraft';
		elseif($this->IsPublic())
		$Output[] = 'PostFlagPublic';
		elseif($this->IsFriendsOnly())
		$Output[] = 'PostFlagFriends';
		elseif($this->IsNuked())
		$Output[] = 'PostFlagNuled';

		return $Output;
	}

	public function
	GetStyleClassAttr():
	String {
	/*//
	@date 2020-09-04
	//*/

		return join(' ',$this->GetStyleClassList());
	}

	public function
	BumpCountViews(Int $Inc=1):
	self {

		$this->Update([
			'CountViews' => ($this->CountViews + 1)
		]);

		return $this;
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	public function
	IsAdult():
	Bool {
	/*//
	@date 2020-06-18
	//*/

		return ($this->OptAdult !== Blog::AdultDisabled);
	}

	public function
	IsAdultForced():
	Bool {
	/*//
	@date 2020-06-18
	//*/

		return ($this->OptAdult === Blog::AdultForced);
	}

	public function
	IsNuked():
	Bool {
	/*//
	@date 2020-09-04
	//*/

		return ($this->Enabled === static::EnableStateNuked);
	}

	public function
	IsDraft():
	Bool {
	/*//
	@date 2020-09-04
	//*/

		return ($this->Enabled === static::EnableStateDraft);
	}

	public function
	IsPublic():
	Bool {
	/*//
	@date 2020-09-04
	//*/

		return ($this->Enabled === static::EnableStatePublic);
	}

	public function
	IsFriendsOnly():
	Bool {
	/*//
	@date 2020-09-04
	//*/

		return ($this->Enabled === static::EnableStateFriends);
	}

	public function
	IsUserOwner(?Atlantis\Prototype\User $User):
	Bool {
	/*//
	@date 2020-07-04
	//*/

		if(!$User)
		return FALSE;

		return ($this->User->ID === $User->ID);
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	static public function
	GetByID(Int $ID):
	?self {
	/*//
	@date 2020-06-19
	@todo php8: make parent class return 'static' and delete this.
	//*/

		return parent::GetByID($ID);
	}

	static public function
	GetByAlias(String $BlogAlias, String $Alias):
	?self {

		$SQL = Nether\Database::Get()->NewVerse();
		$Result = NULL;

		////////

		$SQL
		->Select(sprintf('%s Main',static::$Table))
		->Fields('Main.*')
		->Where('BL.Alias LIKE :BlogAlias')
		->Where('Main.Alias LIKE :Alias')
		->Limit(1);

		static::ExtendQueryJoins($SQL);
		static::ExtendQueryFields($SQL);

		$Result = $SQL->Query([
			':BlogAlias' => $BlogAlias,
			':Alias'     => $Alias
		]);

		////////

		if(!$Result->IsOK())
		throw new Atlantis\Error\DatabaseQueryError($Result);

		if($Result->GetCount() !== 1)
		return NULL;

		return new static($Result->Next());
	}

	static public function
	GenerateUniqueAlias(Blog $Blog, String $Title):
	String {

		$Alias = Atlantis\Util\Filters::RouteSafeAlias($Title);
		$AliasTest = $Alias;
		$Existing = NULL;
		$Iter = 1;
		$Next = NULL;

		do {

			$Existing = static::GetByAlias(
				$Blog->Alias,
				$AliasTest
			);

			if($Existing) {
				$Next = str_replace('.','',(String)microtime(TRUE));
				$AliasTest = sprintf('%s-%s',$Alias,$Next);
			}

			$Iter++;
		} while($Existing);

		return $AliasTest;
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
		->Join("Blogs {$FieldPrefix}BL ON {$TableAlias}.BlogID={$FieldPrefix}BL.ID")
		->Join("Users {$FieldPrefix}PU ON {$TableAlias}.UserID={$FieldPrefix}PU.ID");

		Atlantis\Prototype\Blog::ExtendQueryJoins($SQL,"{$FieldPrefix}BL","{$FieldPrefix}B_");

		return;
	}

	static protected function
	ExtendQueryFields($SQL, String $TablePrefix='', String $FieldPrefix=''):
	Void {
	/*//
	@date 2018-06-08
	//*/

		Atlantis\Prototype\User::ExtendMainFields($SQL,"{$FieldPrefix}PU","{$FieldPrefix}PU_");
		Atlantis\Prototype\Blog::ExtendMainFields($SQL,"{$FieldPrefix}BL","{$FieldPrefix}B_");
		Atlantis\Prototype\Blog::ExtendQueryFields($SQL,"{$FieldPrefix}BL","{$FieldPrefix}B_");

		return;
	}

	static protected function
	FindExtendOptions($Opt):
	Array {
	/*//
	@date 2020-05-23
	//*/

		return [
			'Adult'     => 0,
			'Alias'     => NULL,
			'BlogID'    => NULL,
			'BlogAlias' => NULL,
			'Tags'      => NULL
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

		if($Opt->BlogID !== NULL)
		$SQL->Where('Main.BlogID=:BlogID');

		if($Opt->BlogAlias !== NULL)
		$SQL->Where('BL.Alias LIKE :BlogAlias');

		if(is_array($Opt->Tags) && count($Opt->Tags)) {
			$Opt->CountTags = count($Opt->Tags);

			$SQL
			->Fields('COUNT(*) PostTagNumAnd')
			->Join('BlogPostTags BPT ON BPT.PostID=Main.ID')
			->Where('BPT.TagID IN(:Tags)')
			->Group('Main.ID')
			->Having('PostTagNumAnd=:CountTags');
		}

		return;
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	static public function
	Insert($Opt):
	self {

		$Opt = new Nether\Object\Mapped($Opt,[
			'BlogID'      => 0,
			'UserID'      => 0,
			'Title'       => NULL,
			'Alias'       => NULL,
			'Content'     => NULL,
			'OptAdult'    => 0,

			'TimeCreated' => time(),
			'TimeUpdated' => time(),
			'Enabled'     => 1,
			'UUID'        => Atlantis\Util::UUID()
		]);

		if(!$Opt->BlogID)
		throw new Exception('BlogID cannot be empty.');

		if(!$Opt->UserID)
		throw new Exception('UserID cannot be empty.');

		if(!$Opt->Title)
		throw new Exception('Title cannot be empty.');

		if(!$Opt->Content)
		throw new Exception('Content cannot be empty it a blog ffs');

		if(!$Opt->Alias)
		$Opt->Alias = Atlantis\Util\Filters::RouteSafeAlias($Opt->Title);

		return parent::Insert($Opt);
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

}
