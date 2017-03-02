<?php

namespace Atlantis;
use \Atlantis as Atlantis;
use \Nether   as Nether;

use \Exception as Exception;

class Blog
extends Nether\Object {

	use
	Atlantis\Packages\CacheInterface;

	static public
	$PropertyMap = [
		'blog_id'      => 'ID:int',
		'blog_title'   => 'Title',
		'blog_alias'   => 'Alias',
		'blog_tagline' => 'Tagline'
	];

	//////////////////////////////////////////////////////////////////////////
	// properties and accessors //////////////////////////////////////////////

	protected
	$ID = 0;

	public function
	GetID():
	Int {
	/*//
	return the unique id for this blog.
	//*/

		return $this->ID;
	}

	//////////////////////////////////////////////////////////////////////////

	protected
	$Title = '';

	public function
	GetTitle():
	String {
	/*//
	return the title that has been given to this blog.
	//*/

		return $this->Title;
	}

	public function
	SetTitle(String $Title):
	self {
	/*//
	update the title for this blog.
	//*/

		Nether\Database::Get()
		->NewVerse()
		->Update('Blogs')
		->Set([
			'blog_title' => ':Title'
		])
		->Where('blog_id=:ID')
		->Limit(1)
		->Query([
			':ID'    => $this->ID,
			':Title' => $Title
		]);

		$this->Flush();

		////////

		$this->Title = $Title;
		return $this;
	}

	//////////////////////////////////////////////////////////////////////////

	protected
	$Alias = '';

	public function
	GetAlias():
	String {

		return $this->Alias;
	}

	public function
	SetAlias(String $Alias):
	self {
	/*//
	update the alias for this blog.
	//*/

		$Alias = Atlantis\Util\Filters::RouteSafeAlias($Alias);

		////////

		Nether\Database::Get()
		->NewVerse()
		->Update('Blogs')
		->Fields([
			'blog_alias' => ':Alias'
		])
		->Where('blog_id=:ID')
		->Limit(1)
		->Query([
			':ID'    => $this->ID,
			':Alias' => $Alias
		]);

		$this->Flush();

		////////

		$this->Alias = $Alias;
		return $this;
	}

	//////////////////////////////////////////////////////////////////////////

	protected
	$Tagline = '';

	public function
	GetTagline():
	String {
	/*//
	return the subtitle/tagline given to this blog.
	//*/

		return $this->Tagline;
	}

	public function
	SetTagline(String $Tagline):
	self {
	/*//
	update the subtitle/tagline given to this blog.
	//*/

		Nether\Database::Get()
		->NewVerse()
		->Update('Blogs')
		->Set([
			'blog_tagline' => ':TagLine'
		])
		->Where('blog_id=:ID')
		->Limit(1)
		->Query([
			':ID'      => $this->ID,
			':Tagline' => $Tagline
		]);

		$this->Flush();

		////////

		$this->Tagline = $Tagline;
		return $this;
	}

	//////////////////////////////////////////////////////////////////////////

	protected
	$Users = [];

	public function
	GetUsers():
	Array {
	/*//
	fetch the list of blog user permissions for this blog. it describes who
	can do what to this blog.
	//*/

		if(!count($this->Users))
		Atlantis\Blog\User::ListByBlogID($this->ID);

		return $this->Users;
	}

	//////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////

	protected function
	__ready():
	Void {


		return;
	}

	//////////////////////////////////////////////////////////////////////////
	// blog user management //////////////////////////////////////////////////

	public function
	AddUser(Int $UserID, String $Level):
	Atlantis\Blog\User {
	/*//
	add the specified user to this blog with the specified permission. the
	permission given should be one of the Level constants from Blog\User.
	//*/

		return Atlantis\Blog\User::Create([
			'BlogID' => $this->ID,
			'UserID' => $UserID,
			'Level'  => $Level
		]);
	}

	public function
	RemoveUser(Int $UserID, ?String $Level=NULL):
	Void {
	/*//
	remove the specified user from this blog. if no permission is specified
	then all permissions will be removed, else only the specified permission
	will be removed.
	//*/

		$BlogUser;
		$BlogUsers;

		////////

		if($Level !== NULL)
		$BlogUsers = [
			Atlantis\Blog\User::Get($this->ID,$UserID,$Level)
		];

		else
		$BlogUsers = Atlantis\Blog\User::ListByBlogUser(
			$this->ID,
			$UserID
		);

		////////

		foreach($BlogUsers as $BlogUser)
		$BlogUser->Delete();

		return;
	}

	//////////////////////////////////////////////////////////////////////////
	// blog user permission checking /////////////////////////////////////////

	public function
	CanUser(Int $UserID, Array $Levels):
	Bool {
	/*//
	determine if the specified user has any of the specified permissions.
	//*/

		$this->GetUsers();

		$Result = array_filter(
			$this->Users,
			function($Who) use($UserID,$Levels) {
				return (
					$Who->UserID === $UserID
					&& in_array($Who->Level,$Levels,TRUE)
				);
			}
		);

		return (count($Result) > 0);
	}

	public function
	CanUserEdit(Int $UserID):
	Bool {
	/*//
	a shortcut wrapper for CanUser to determine if a user has the permissions
	nessessary to edit settings for this blog.
	//*/

		return $this->CanUser($UserID,[
			'owner'
		]);
	}

	public function
	CanUserWrite(Int $UserID):
	Bool {
	/*//
	a shortcut wrapper for CanUser to determine if a user has the permissions
	nessessary to create posts on this blog.
	//*/

		return $this->CanUser($UserID,[
			'owner', 'writer'
		]);
	}

	//////////////////////////////////////////////////////////////////////////
	// cache methods /////////////////////////////////////////////////////////

	public function
	Cache():
	self {
	/*//
	@override
	@date 2017-02-11
	prime the cache with this user.
	//*/

		$Cache = Nether\Stash::Get(Nether\Option::Get('cache-stash-name'));

		$Cache->Set("atl-blog-id-{$this->GetID()}",$this);
		$Cache->Set("atl-blog-al-{$this->GetAlias()}",$this);

		return $this;
	}

	public function
	Flush():
	self {
	/*//
	@override
	@date 2017-02-11
	drop this user from the cache. you'll need to use this after changing any
	information about them.
	//*/

		$Cache = Nether\Stash::Get(Nether\Option::Get('cache-stash-name'));

		$Cache->Drop("atl-blog-id-{$this->GetID()}");
		$Cache->Drop("atl-blog-al-{$this->GetAlias()}");

		return $this;
	}

	//////////////////////////////////////////////////////////////////////////
	// other methods /////////////////////////////////////////////////////////

	public function
	GetPostByAlias(String $Alias):
	?Atlantis\Blog\Post {
	/*//
	@date 2017-03-01
	get a post in this blog by its alias.
	//*/

		return Atlantis\Blog\Post::GetByBlogAlias(
			$this->ID,
			$Alias
		);
	}

	//////////////////////////////////////////////////////////////////////////
	// search api ////////////////////////////////////////////////////////////

	static public function
	Get($What):
	?self {
	/*//
	fetch the blog based on the context of the argument. if it was a literal
	integer then look it up by id, else look it up by alias.
	//*/

		if(is_int($What))
		return static::GetByID($What);

		return static::GetByAlias($What);
	}

	static public function
	GetByID(Int $ID):
	?self {
	/*//
	fetch a blog by its id.
	//*/

		$Row = NULL;
		$Output = NULL;

		////////

		if($Output = static::GetFromCache("atl-blog-id-{$ID}"))
		return $Output->SetCached(TRUE);

		////////

		$Row = Nether\Database::Get()
		->NewVerse()
		->Select('Blogs')
		->Fields('*')
		->Where('blog_id=:ID')
		->Query([
			':ID' => $ID
		])
		->Next();

		////////

		if(!$Row)
		return NULL;

		$Output = new static($Row);
		$Output->SetCached(FALSE)->Cache();

		return $Output;
	}

	static public function
	GetByAlias(String $Alias):
	?self {
	/*//
	fetch a blog by its alias.
	//*/

		$Row = NULL;
		$Output = NULL;

		////////

		if($Output = static::GetFromCache("atl-blog-al-{$Alias}"))
		return $Output->SetCached(TRUE);

		////////

		$Row = Nether\Database::Get()
		->NewVerse()
		->Select('Blogs')
		->Fields('*')
		->Where('blog_alias=:Alias')
		->Query([
			':Alias' => $Alias
		])
		->Next();

		////////

		if(!$Row)
		return NULL;

		$Output = new static($Row);
		$Output->SetCached(FALSE)->Cache();

		return $Output;
	}

	//////////////////////////////////////////////////////////////////////////

	static public function
	GetUniqueAlias(String $Alias):
	String {
	/*//
	@date 2017-03-01
	make sure the alias we want to use is unique among all the blogs. returns
	the unique value. adds an integer to the end of the alias if it was not
	found to be unique.
	//*/

		$Exist = NULL;

		////////

		while($Exist = static::GetByAlias($Alias)) {
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

		$Opt = new Nether\Object($Opt,[
			'Page'  => 1,
			'Sort'  => 'Newest',
			'Limit' => 0
		]);

		static::Search_ExtendSelect($Opt,$SQL);
		static::Search_ExtendLimits($Opt,$SQL);
		static::Search_ExtendFilters($Opt,$SQL);
		static::Search_ExtendSorts($Opt,$SQL);

		////////

		// run the query.

		$Result = $SQL->Query($Opt);

		if(!$Result->IsOK())
		throw new Exception('Blog::Search fatal error');

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
	@date 2017-03-01
	generate the search query selection clause.
	//*/

		$SQL
		->Select('Blogs')
		->Fields('SQL_CALC_FOUND_ROWS *');

		return;
	}

	static protected function
	Search_ExtendFilters(Nether\Object $Opt, Nether\Database\Verse $SQL):
	Void {
	/*//
	@date 2017-03-01
	generate the search query filter clauses.
	//*/

		return;
	}

	static protected function
	Search_ExtendLimits(Nether\Object $Opt, Nether\Database\Verse $SQL):
	Void {
	/*//
	@date 2017-03-01
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
	Search_ExtendSorts(Nether\Object $Opt, Nether\Database\Verse $SQL):
	Void {
	/*//
	@date 2017-03-01
	generate the search query sorting clauses.
	//*/

		switch($Opt->Sort) {
			case 'Newest':
				$SQL->Sort('blog_id',$SQL::SortDesc);
			break;
			case 'Oldest':
				$SQL->Sort('blog_id',$SQL::SortAsc);
			break;
			case 'TitleAZ':
				$SQL->Sort('blog_title',$SQL::SortDesc);
			break;
			case 'TitleZA':
				$SQL->Sort('blog_title',$SQL::SortAsc);
			break;
		}

		return;
	}

	//////////////////////////////////////////////////////////////////////////
	// create methods ////////////////////////////////////////////////////////

	static public function
	Create($Opt=NULL):
	self {
	/*//
	create a new blog instance.
	//*/

		$Exist = NULL;

		////////

		$Opt = new Nether\Object($Opt,[
			'Title'   => NULL,
			'Alias'   => NULL,
			'Tagline' => ''
		]);

		if(!$Opt->Title)
		throw new Exception('blog must have title');

		if(!$Opt->Alias)
		$Opt->Alias = Atlantis\Util\Filters::RouteSafeAlias($Opt->Title);

		////////

		$Opt->Alias = static::GetUniqueAlias($Opt->Alias);

		////////

		$Result = Nether\Database::Get()
		->NewVerse()
		->Insert('Blogs')
		->Fields([
			'blog_title'   => ':Title',
			'blog_alias'   => ':Alias',
			'blog_tagline' => ':Tagline'
		])
		->Query($Opt);

		if(!$Result->IsOK())
		throw new Exception('Blog::Create critical failure');

		////////

		return static::GetByID((Int)$Result->GetInsertID());
	}

}
