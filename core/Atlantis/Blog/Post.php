<?php

namespace Atlantis\Blog;
use \Atlantis as Atlantis;
use \Nether   as Nether;

use \Exception as Exception;

class Post
extends Nether\Object {

	use
	Atlantis\Packages\CacheInterface;

	public static
	$PropertyMap = [
		'post_id'      => 'ID:int',
		'blog_id'      => 'BlogID:int',
		'user_id'      => 'UserID:int',
		'post_ptime'   => 'TimePosted:int',
		'post_utime'   => 'TimeUpdated:int',
		'post_draft'   => 'Draft:bool',
		'post_title'   => 'Title',
		'post_alias'   => 'Alias',
		'post_content' => 'Content'
	];

	////////////////////////////////////////////////////////////////
	// post properties & api ///////////////////////////////////////

	protected
	$ID = 0;

	public function
	GetID():
	Int {
	/*//
	return the unique id for this object.
	//*/

		return $this->ID;
	}

	////////////////////////////////////////////////////////////////

	protected
	$BlogID = 0,
	$Blog   = NULL;

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

	////////////////////////////////////////////////////////////////

	protected
	$UserID = 0,
	$User   = NULL;

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

	////////////////////////////////////////////////////////////////

	protected
	$TimePosted = 0;

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

	////////////////////////////////////////////////////////////////

	protected
	$TimeUpdated = 0;

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

	////////////////////////////////////////////////////////////////

	protected
	$Draft = FALSE;

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

	////////////////////////////////////////////////////////////////

	protected
	$Title = '';

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

	////////////////////////////////////////////////////////////////

	protected
	$Alias = '';

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

		$Alias = $this::GetUniqueAlias($Alias);

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

	////////////////////////////////////////////////////////////////

	protected
	$Content = '';

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
	String {
	/*//
	@todo
	update the text content of this post.
	//*/

		return $this;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	public function
	__ready():
	Void {
	/*//
	prepare some data for this object.
	//*/

		$this->Draft = (Bool)$this->Draft;

		return;
	}

	////////////////////////////////////////////////////////////////
	// cache methods ///////////////////////////////////////////////

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

	////////////////////////////////////////////////////////////////
	// search methods //////////////////////////////////////////////

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

		$Opt = Nether\Object::Get($Opt,[
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
		->Where('blog_id=:BlogID')
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

	////////////////////////////////////////////////////////////////

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
		->Where('post_id=:PostID')
		->Limit(1)
		->Query([
			':PostID' => $ID
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
			'blog_id=:BlogID',
			'post_alias=:Alias'
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

	////////////////////////////////////////////////////////////////

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

	////////////////////////////////////////////////////////////////
	// creation api ////////////////////////////////////////////////

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

		$Opt = new Nether\Object($Opt,[
			// required.
			'BlogID'      => 0,
			'UserID'      => 0,
			'Title'       => NULL,
			'Alias'       => NULL,
			'Content'     => NULL,

			// meta.
			'TimePosted'  => time(),
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
			'blog_id'      => ':BlogID',
			'user_id'      => ':UserID',
			'post_ptime'   => ':TimePosted',
			'post_utime'   => ':TimeUpdated',
			'post_draft'   => ':Draft',
			'post_title'   => ':Title',
			'post_alias'   => ':Alias',
			'post_content' => ':Content'
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

