<?php

namespace Atlantis;
use \Atlantis as Atlantis;
use \Nether   as Nether;

use \Exception as Exception;

class Blog {

	static public
	$PropertyMap = [
		'blog_id'      => 'ID:int',
		'user_id'      => 'UserID:int',
		'blog_title'   => 'Title',
		'blog_tagline' => 'Tagline'
	];

	////////
	////////

	protected
	$ID = 0;

	public function
	GetID():
	Int {

		return $this->ID;
	}

	////////
	////////

	protected
	$Title = '';

	public function
	GetTitle():
	String {

		return $this->Title;
	}

	public function
	SetTitle(String $Title):
	self {
	/*//
	@todo flush cache
	//*/

		$this->Title = $Title;

		////////

		Nether\Database::Get()
		->NewVerse()
		->Update('Blogs')
		->Set([
			'blog_title' => ':Title'
		])
		->Where('blog_id=:ID')
		->Limit(1)
		->Query($this);

		////////

		return $this;
	}

	////////
	////////

	protected
	$Tagline = '';

	public function
	GetTagline():
	String {

		return $this->Tagline;
	}

	public function
	SetTagline(String $Tagline):
	self {
	/*//
	@todo flush cache
	//*/

		$this->Tagline = $Tagline;

		////////

		Nether\Database::Get()
		->NewVerse()
		->Update('Blogs')
		->Set([
			'blog_tagline' => ':TagLine'
		])
		->Where('blog_id=:ID')
		->Limit(1)
		->Query($this);

		////////

		return $this;
	}

	////////
	////////

	protected
	$Users = [];

	public function
	GetUsers():
	Array {

		return $this->Users;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	protected function
	__ready():
	Void {

		$this->Users = Blog\User::ListByBlogID($this->ID);

		return;
	}

	////////////////////////////////////////////////////////////////
	// blog user management ////////////////////////////////////////

	public function
	AddUser(Int $UserID, String $Level):
	Atlantis\Blog\User {
	/*//
	add the specified user to this blog with the specified permission. the
	permission given should be one of the Level constants from Blog\User.
	//*/

		return Atlantis\Blog\User::Create(
			$this->ID,
			$UserID,
			$Level
		);
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

	////////////////////////////////////////////////////////////////
	// blog user permission checking ///////////////////////////////

	public function
	CanUser(Int $UserID, Array $Levels):
	Bool {
	/*//
	determine if the specified user has any of the specified permissions.
	//*/

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

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	static public function
	GetByID(Int $ID):
	?self {
	/*//
	fetch a blog by its id.
	//*/

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

		return new static($Row);
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	static public function
	Create($Opt=NULL):
	self {
	/*//
	create a new blog instance.
	//*/

		$Opt = new Nether\Object($Opt,[
			'Title'   => NULL,
			'Tagline' => ''
		]);

		if(!$Opt->Title)
		throw new \Exception('blog must have title');

		////////

		$Result = Nether\Database::Get()
		->NewVerse()
		->Insert('Blogs')
		->Fields([
			'blog_title'   => ':Title',
			'blog_tagline' => ':Tagline'
		])
		->Query($Opt);

		if(!$Result->IsOK())
		throw new Exception('Blog::Create critical failure');

		////////

		return static::GetByID((Int)$Result->GetInsertID());
	}

}
