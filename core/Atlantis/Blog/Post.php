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

		return $this->ID;
	}

	////////////////
	////////////////

	protected
	$UserID = 0,
	$User   = NULL;

	public function
	GetUserID():
	Int {

		return $this->UserID;
	}

	public function
	GetUser():
	?Atlantis\User {

		return Atlantis\User::Get((Int)$this->UserID);
	}

	////////////////
	////////////////

	protected
	$TimePosted = 0;

	public function
	GetTimePosted():
	Int {

		return $this->TimePosted;
	}

	public function
	GetDatePosted():
	String {

		return date('Y-m-d',$this->TimePosted);
	}

	////////////////
	////////////////

	protected
	$TimeUpdated = 0;

	public function
	GetTimeUpdated():
	Int {

		return $this->TimeUpdated;
	}

	public function
	GetDateUpdated():
	String {

		return date('Y-m-d',$this->TimeUpdated);
	}

	////////////////
	////////////////

	protected
	$Draft = FALSE;

	public function
	IsDraft():
	Bool {

		return $this->Draft;
	}

	////////////////
	////////////////

	protected
	$Title = '';

	public function
	GetTitle():
	String {

		return $this->Title;
	}

	////////////////
	////////////////

	protected
	$Content = '';

	public function
	GetContent():
	String {

		return $this->Content;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	public function
	__ready():
	Void {

		$this->User = Atlantis\User::GetByID($this->UserID);

		return;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	static public function
	ListByBlogID(Int $BlogID):
	Array {

		$Output = [];
		$Row = NULL;

		////////

		$Result = Nether\Database::Get()
		->NewVerse()
		->Select('BlogPosts')
		->Fields('*')
		->Where('blog_id=:BlogID')
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

