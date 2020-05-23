<?php

namespace Atlantis\Blog;
use \Atlantis as Atlantis;
use \Nether   as Nether;

use \Exception as Exception;

class Post
extends Nether\Object\Mapped {

	use
	Atlantis\Packages\CacheInterface;

	public static
	$PropertyMap = [
		'ID'          => 'ID:int',
		'BlogID'      => 'BlogID:int',
		'UserID'      => 'UserID:int',
		'TimeCreated' => 'TimeCreated:int',
		'TimeUpdated' => 'TimeUpdated:int',
		'Draft'       => 'Draft:bool',
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
	public Bool $Draft;
	public String $Title;
	public String $Alias;
	public String $Content;

	// extension fields.

	public Atlantis\Blog $Blog;
	public Atlantis\User $User;
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
		->OnReady_GetBlog($Raw)
		->OnReady_GetUser($Raw)
		->OnReady_GetDates();

		return;
	}

	protected function
	OnReady_GetBlog(Array $Raw):
	self {
	/*//
	prepare a blog object depending on if it was fetched with an inclusion
	query or not.
	//*/

		if(array_key_exists('_B_ID',$Raw))
		$this->Blog = new Atlantis\Blog([]);
		else
		$this->Blog = Atlantis\Blog::GetByID((Int)$this->BlogID);

		return $this;
	}

	protected function
	OnReady_GetUser(Array $Raw):
	self {
	/*//
	prepare a user object depending on if it was fetched with an inclusion
	query or not.
	//*/

		if(array_key_exists('_U_ID',$Raw))
		$this->User = new Atlantis\User([]);
		else
		$this->User = Atlantis\User::GetByID((Int)$this->UserID);

		return $this;
	}

	protected function
	OnReady_GetDates():
	self {
	/*//
	prepare the date objects.
	//*/

		$this->DateCreated = new Atlantis\Util\Date("@{$this->TimeCreated}");
		$this->DateUpdated = new Atlantis\Util\Date("@{$this->TimeUpdated}");
		return $this;
	}

	///////////////////////////////////////////////////////////////////////////
	// post properties & api //////////////////////////////////////////////////

	public function
	GetID():
	Int {
	/*//
	return the unique id for this object.
	//*/

		return $this->ID;
	}

	///////////////////////////////////////////////////////////////////////////

	public function
	GetBlogID():
	Int {
	/*//
	return the id of the blog this post belongs to.
	//*/

		return $this->BlogID;
	}

	public function
	GetBlogObject():
	Atlantis\Blog {
	/*//
	return the blog object this post belongs to.
	//*/

		if(!$this->Blog)
		$this->Blog = Atlantis\Blog::GetByID((Int)$this->BlogID);

		return $this->Blog;
	}

	public function
	SetBlogID(Int $BlogID):
	self {
	/*//
	@todo
	update which blog this post belongs to.
	//*/

		return $this;
	}

	///////////////////////////////////////////////////////////////////////////

	public function
	GetUserID():
	Int {
	/*//
	return the id of the user that created this post.
	//*/

		return $this->UserID;
	}

	public function
	GetUserObject():
	Atlantis\User {
	/*//
	return the user object that created this post.
	//*/

		if(!$this->User)
		$this->User = Atlantis\User::GetByID((Int)$this->UserID);

		return $this->User;
	}

	public function
	SetUserID(Int $UserID):
	self {
	/*//
	@todo
	update the user id this post belongs to.
	//*/

		return $this;
	}

	///////////////////////////////////////////////////////////////////////////

	public function
	GetTimePosted():
	Int {
	/*//
	return the time in seconds that describes when this post was created.
	//*/

		return $this->TimePosted;
	}

	public function
	GetDatePosted():
	String {
	/*//
	return the formatted date that describes when this post was created.
	//*/

		return date('Y-m-d',$this->TimePosted);
	}

	public function
	GetDateTimePosted($TwentyFour=TRUE):
	String {
	/*//
	return the formatted date and time that describes when this post was
	created. returns 24hr format by default.
	//*/

		return date(
			(($TwentyFour)?('Y-m-d H:i'):('Y-m-d g:ia')),
			$this->TimePosted
		);
	}

	///////////////////////////////////////////////////////////////////////////

	public function
	GetTimeUpdated():
	Int {
	/*//
	return the time in seconds that describes when this post was updated.
	//*/

		return $this->TimeUpdated;
	}

	public function
	GetDateUpdated():
	String {
	/*//
	return the formatted date that describes when this post was updated.
	//*/

		return date('Y-m-d',$this->TimeUpdated);
	}

	public function
	GetDateTimeUpdated($TwentyFour=TRUE):
	String {
	/*//
	return the formatted date and time that describes when this post was
	created. returns 24hr format by default.
	//*/

		return date(
			(($TwentyFour)?('Y-m-d H:i'):('Y-m-d g:ia')),
			$this->TimeUpdated
		);
	}

	public function
	SetTimeUpdated(?Int $Time=NULL):
	self {
	/*//
	@todo
	update the time updated for this post. if no time is specified then it
	will use the current time.
	//*/

		if($Time === NULL)
		$Time = time();

		// ...

		return $this;
	}

	///////////////////////////////////////////////////////////////////////////

	public function
	IsDraft():
	Bool {
	/*//
	return if this post is flagged as a draft or not.
	//*/

		return $this->Draft;
	}

	public function
	SetDraft(Bool $State):
	self {
	/*//
	@todo
	update the draft state of this post.
	//*/

		return $this;
	}

	///////////////////////////////////////////////////////////////////////////

	public function
	GetTitle():
	String {
	/*//
	return the title that was given to this post.
	//*/

		return $this->Title;
	}

	public function
	SetTitle(String $Title):
	self {
	/*//
	@todo
	update title for this post.
	//*/

		return $this;
	}

	///////////////////////////////////////////////////////////////////////////

	public function
	GetAlias():
	String {
	/*//
	return the alias that was given to this post.
	//*/

		return $this->Alias;
	}

	public function
	SetAlias(String $Alias):
	self {
	/*//
	@2017-03-01
	update the alias for this post.
	//*/

		$Alias = $this::GetUniqueAlias($this->BlogID,$Alias);

		////////

		Nether\Database::Get()
		->NewVerse()
		->Update('BlogPosts')
		->Fields([
			'post_alias' => ':Alias'
		])
		->Where([
			'post_id' => ':ID'
		])
		->Limit(1)
		->Query([
			':ID'    => $this->ID,
			':Alias' => $this->Alias
		]);

		////////

		$this->Flush();
		$this->Alias = $Alias;

		return $this;
	}

	///////////////////////////////////////////////////////////////////////////

	public function
	GetContent():
	String {
	/*//
	return the text content of this post.
	//*/

		return $this->Content;
	}

	public function
	SetContent():
	self {
	/*//
	@todo
	update the text content of this post.
	//*/

		return $this;
	}

	///////////////////////////////////////////////////////////////////////////
	// cache methods //////////////////////////////////////////////////////////

	public function
	Cache():
	self {
	/*//
	@override
	@date 2017-02-27
	prime the cache with this user.
	//*/

		$Cache = Nether\Stash::Get(Nether\Option::Get('cache-stash-name'));

		$Cache->Set("atl-post-id-{$this->GetID()}",$this);
		$Cache->Set("atl-post-al-{$this->GetBlogID()}-{$this->GetAlias()}",$this);

		return $this;
	}

	public function
	Flush():
	self {
	/*//
	@override
	@date 2017-02-27
	drop this user from the cache. you'll need to use this after changing any
	information about them.
	//*/

		$Cache = Nether\Stash::Get(Nether\Option::Get('cache-stash-name'));

		$Cache->Drop("atl-post-id-{$this->GetID()}");
		$Cache->Drop("atl-post-al-{$this->GetBlogID()}-{$this->GetAlias()}");

		return $this;
	}

	///////////////////////////////////////////////////////////////////////////
	// other methods //////////////////////////////////////////////////////////

	public function
	GetURL():
	String {
	/*//
	@date 2017-03-02
	get the url to view this blog post.
	//*/

		$Blog = $this->GetBlogObject();

		return sprintf(
			'%s/%s',
			trim($Blog->GetURL(),'/'),
			$this->Alias
		);
	}

	///////////////////////////////////////////////////////////////////////////
	// search methods /////////////////////////////////////////////////////////

	static public function
	ListByBlogID(Int $BlogID, $Opt=NULL):
	Array {
	/*//
	@date 2017-02-25
	fetch a list of all the posts that belong to a specified blog.
	//*/

		$Output = [];
		$Row = NULL;

		////////

		$Opt = new Nether\Object\Mapped($Opt,[
			// options
			'Page'   => 1,
			'Limit'  => 10,

			// calculations
			'Offset' => NULL
		]);

		$Opt->Page = Atlantis\Util\Filters::PageNumber($Opt->Page);
		$Opt->Limit = Atlantis\Util\Filters::NumberLimit25($Opt->Limit);
		$Opt->Offset = ($Opt->Page - 1) * $Opt->Limit;

		////////

		$Result = Nether\Database::Get()
		->NewVerse()
		->Select('BlogPosts')
		->Fields('*')
		->Where('BlogID=:BlogID')
		->Offset($Opt->Offset)
		->Limit($Opt->Limit)
		->Query([
			':BlogID' => $BlogID
		]);

		////////

		while($Row = $Result->Next())
		$Output[] = new static($Row);

		return $Output;
	}

	///////////////////////////////////////////////////////////////////////////

	static public function
	GetByID(Int $ID):
	?self {
	/*//
	@date 2017-02-25
	get a specific blog post by id.
	//*/

		$Row = NULL;
		$Output = NULL;

		////////

		if($Output = static::GetFromCache("alt-post-id-{$ID}"))
		return $Output->SetCached(TRUE);

		////////

		$Row = Nether\Database::Get()
		->NewVerse()
		->Select('BlogPosts')
		->Fields('*')
		->Where('ID=:ID')
		->Limit(1)
		->Query([
			':ID' => $ID
		])
		->Next();

		if(!$Row)
		return NULL;

		////////

		$Output = new static($Row);
		$Output->SetCached(FALSE)->Cache();

		return $Output;
	}

	static public function
	GetByBlogAlias(Int $BlogID, String $Alias):
	?self {
	/*//
	@date 2017-02-25
	get a specific blog post by its alias. alias for posts are only unique
	to their blog, so we have to know which blog to check as well.
	//*/

		$Row = NULL;
		$Output = NULL;

		////////

		if($Output = static::GetFromCache("atl-post-al-{$BlogID}-{$Alias}"))
		return $Output->SetCached(TRUE);

		////////

		$Row = Nether\Database::Get()
		->NewVerse()
		->Select('BlogPosts')
		->Fields('*')
		->Where([
			'BlogID=:BlogID',
			'Alias=:Alias'
		])
		->Limit(1)
		->Query([
			':BlogID' => $BlogID,
			':Alias'  => $Alias
		])
		->Next();

		if(!$Row)
		return NULL;

		////////

		$Output = new static($Row);
		$Output->SetCached(FALSE)->Cache();

		return $Output;
	}

	///////////////////////////////////////////////////////////////////////////

	static public function
	GetUniqueAlias(Int $BlogID, String $Alias):
	String {
	/*//
	@date 2017-03-01
	make sure the alias we want to use is unique among all the posts in this
	blog. returns the unique value. adds an integer to the end of the alias if
	it was not found to be unique.
	//*/

		$Exist = NULL;

		////////

		while($Exist = static::GetByBlogAlias($BlogID,$Alias)) {
			if(preg_match('/-(\d)$/',$Alias))
			$Alias = preg_replace_callback(
				'/-(\d+)$/',
				function($M) { return sprintf('-%d',((Int)$M[1]+1)); },
				$Alias
			);

			else
			$Alias .= '-2';
		}

		////////

		return $Alias;
	}

	//////////////////////////////////////////////////////////////////////////

	static public function
	Search($Opt=NULL):
	Atlantis\Datastore {
	/*//
	primary search api for blogs.
	//*/

		$Result = NULL;
		$Row = NULL;
		$Found = 0;
		$SQL = Nether\Database::Get()->NewVerse();
		$Output = new Atlantis\Datastore;

		////////

		$Opt = new Nether\Object\Mapped($Opt,[
			'Page'   => 1,
			'Sort'   => 'Newest',
			'Limit'  => 0,

			'BlogID' => NULL
		]);

		static::Search_ExtendSelect($Opt,$SQL);
		static::Search_ExtendLimits($Opt,$SQL);
		static::Search_ExtendFilters($Opt,$SQL);
		static::Search_ExtendSorts($Opt,$SQL);

		////////

		// run the query.

		$Result = $SQL->Query($Opt);

		if(!$Result->IsOK())
		throw new Exception('Post::Search fatal error');

		////////

		// follow up with the db about how many things were found.

		$Found = (Int)$SQL
		->GetDatabase()
		->Query('SELECT FOUND_ROWS() AS FoundRows;')
		->Next()
		->FoundRows;

		////////

		// populate the result set.

		while($Row = $Result->Next())
		$Output->Push(new static($Row));

		$Output
		->Found($Found)
		->Page($Opt->Page)
		->Limit($Opt->Limit);

		////////

		return $Output;
	}

	static protected function
	Search_ExtendSelect($Opt,$SQL):
	Void {
	/*//
	@date 2017-03-02
	generate the search query selection clause.
	//*/

		$SQL
		->Select('BlogPosts')
		->Fields('SQL_CALC_FOUND_ROWS *');

		return;
	}

	static protected function
	Search_ExtendFilters(Nether\Object\Mapped $Opt, Nether\Database\Verse $SQL):
	Void {
	/*//
	@date 2017-03-02
	generate the search query filter clauses.
	//*/

		if(is_int($Opt->BlogID))
		$SQL->Where('BlogID=:BlogID');

		return;
	}

	static protected function
	Search_ExtendLimits(Nether\Object\Mapped $Opt, Nether\Database\Verse $SQL):
	Void {
	/*//
	@date 2017-03-02
	generate the search query limitation clauses.
	//*/

		$Opt->Page = Atlantis\Util\Filters::PageNumber($Opt->Page);
		$Opt->Limit = Atlantis\Util\Filters::NumberLimit25($Opt->Limit);

		if($Opt->Limit > 0) $SQL
		->Limit($Opt->Limit)
		->Offset(($Opt->Page - 1) * $Opt->Limit);

		return;
	}

	static protected function
	Search_ExtendSorts(Nether\Object\Mapped $Opt, Nether\Database\Verse $SQL):
	Void {
	/*//
	@date 2017-03-02
	generate the search query sorting clauses.
	//*/

		switch($Opt->Sort) {
			case 'Newest':
				$SQL->Sort('ID',$SQL::SortDesc);
			break;
			case 'Oldest':
				$SQL->Sort('ID',$SQL::SortAsc);
			break;
			case 'TitleAZ':
				$SQL->Sort('Title',$SQL::SortDesc);
			break;
			case 'TitleZA':
				$SQL->Sort('Title',$SQL::SortAsc);
			break;
		}

		return;
	}

	///////////////////////////////////////////////////////////////////////////
	// creation api ///////////////////////////////////////////////////////////

	static public function
	Create($Opt=NULL):
	self {
	/*//
	@date 2017-02-25
	create a new post with the specified data.
	//*/

		$Result = NULL;
		$ID = NULL;
		$Exist = NULL;

		////////

		$Opt = new Nether\Object\Mapped($Opt,[
			// required.
			'BlogID'      => 0,
			'UserID'      => 0,
			'Title'       => NULL,
			'Alias'       => NULL,
			'Content'     => NULL,

			// meta.
			'TimeCreated' => time(),
			'TimeUpdated' => time(),
			'Draft'       => 0
		]);

		////////

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

		////////

		$Opt->Alias = self::GetUniqueAlias($Opt->BlogID,$Opt->Alias);

		////////

		$Result = Nether\Database::Get()
		->NewVerse()
		->Insert('BlogPosts')
		->Values([
			'BlogID'      => ':BlogID',
			'UserID'      => ':UserID',
			'TimeCreated' => ':TimeCreated',
			'TimeUpdated' => ':TimeUpdated',
			'Draft'       => ':Draft',
			'Title'       => ':Title',
			'Alias'       => ':Alias',
			'Content'     => ':Content'
		])
		->Query($Opt);

		if(!$Result->IsOK())
		throw new Exception('Post::Create critikal phail');

		if(!($ID = $Result->GetInsertID()))
		throw new Exception('Post::Create confusing phail');

		////////

		return self::GetByID((Int)$ID);
	}

}

