<?php

namespace Atlantis\Blog;
use \Atlantis as Atlantis;
use \Nether   as Nether;

use \Exception as Exception;

class Post
extends Nether\Object {

	public static
	$PropertyMap = [
		'post_id'      => 'ID:int',
		'blog_id'      => 'BlogID:int',
		'user_id'      => 'UserID:int',
		'post_ptime'   => 'TimePosted:int',
		'post_utime'   => 'TimeUpdated:int',
		'post_draft'   => 'Draft:bool',
		'post_title'   => 'Title',
		'post_content' => 'Content'
	];

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

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

	////////////////
	////////////////

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

	////////////////
	////////////////

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

	////////////////
	////////////////

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

	////////////////
	////////////////

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

	////////////////
	////////////////

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

	////////////////
	////////////////

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

	////////////////
	////////////////

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
	////////////////////////////////////////////////////////////////

	static public function
	ListByBlogID(Int $BlogID, $Opt=NULL):
	Array {
	/*//
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
	////////////////////////////////////////////////////////////////

	static public function
	GetByID(Int $ID):
	?self {
	/*//
	get a specific blog post by id.
	//*/

		$Result = Nether\Database::Get()
		->NewVerse()
		->Select('BlogPosts')
		->Fields('*')
		->Where('post_id=:PostID')
		->Limit(1)
		->Query([
			':PostID' => $ID
		]);

		if(!$Result->IsOK())
		throw new Exception('Post::GetByID critikal phail');

		if(!$Result->GetCount())
		return NULL;

		return new self($Result->Next());
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	static public function
	Create($Opt=NULL):
	self {
	/*//
	create a new post with the specified data.
	//*/

		$Result = NULL;
		$ID = NULL;

		////////

		$Opt = new Nether\Object($Opt,[
			// required.
			'BlogID'      => NULL,
			'UserID'      => NULL,
			'Title'       => NULL,
			'Content'     => NULL,

			// meta.
			'TimePosted'  => time(),
			'TimeUpdated' => time(),
			'Draft'       => 0
		]);

		////////

		if($Opt->BlogID === NULL)
		throw new Exception('BlogID cannot be empty.');

		if($Opt->UserID === NULL)
		throw new Exception('UserID cannot be empty.');

		if(!$Opt->Title === NULL)
		throw new Exception('Title cannot be empty.');

		if(!$Opt->Content === NULL)
		throw new Exception('Content cannot be empty it a blog ffs');

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

