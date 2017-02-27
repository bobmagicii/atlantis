<?php

namespace Atlantis\Blog;
use \Atlantis as Atlantis;
use \Nether   as Nether;

use \Exception as Exception;

class User
extends Nether\Object {
/*//
this class defines the relationship between a blog and a site user. user levels
are expected to be keywords like 'admin' and 'writer'.
//*/

	const
	LevelOwner  = 'owner',
	LevelWriter = 'writer';

	static public
	$PropertyMap = [
		'blog_id'        => 'BlogID:int',
		'user_id'        => 'UserID:int',
		'bloguser_level' => 'Level'
	];

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	public function
	GetBlog():
	Atlantis\Blog {

		return Atlantis\Blog::GetByID($this->BlogID);
	}

	public function
	GetUser():
	Atlantis\User {

		return Atlantis\User::GetByID($this->UserID);
	}

	public function
	Delete():
	Void {

		$User = $this->GetUser();
		$Blog = $this->GetBlog();

		Nether\Database::Get()
		->NewVerse()
		->Delete('BlogUsers')
		->Where([
			'blog_id=:BlogID',
			'user_id=:UserID',
			'bloguser_level=:Level'
		])
		->Query($this);

		$User->Flush();
		$Blog->Flush();

		return;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	static public function
	ListByBlogID(Int $BlogID):
	Array {
	/*//
	fetch a list of all the users with access to the specified blog.
	//*/

		$Result = NULL;
		$Row = NULL;
		$Output = [];

		////////

		$Result = Nether\Database::Get()
		->NewVerse()
		->Select('BlogUsers')
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

	static public function
	ListByUserID(Int $UserID):
	Array {
	/*//
	fetch a list of all the blogs the specified user has access to.
	//*/

		$Result = NULL;
		$Row = NULL;
		$Output = [];

		////////

		$Result = Nether\Database::Get()
		->NewVerse()
		->Select('BlogUsers')
		->Fields('*')
		->Where('user_id=:UserID')
		->Query([
			':UserID' => $UserID
		]);

		////////

		while($Row = $Result->Next())
		$Output[] = new static($Row);

		return $Output;
	}

	static public function
	ListByBlogUser(Int $BlogID, Int $UserID):
	Array {
	/*//
	fetch a list of all the permissions for the specified user on the
	specified blog.
	//*/

		$Row = NULL;
		$Output = [];

		$Result = Nether\Database::Get()
		->NewVerse()
		->Select('BlogUsers')
		->Fields('*')
		->Where([
			'blog_id=:BlogID',
			'user_id=:UserID'
		])
		->Query([
			':BlogID' => $BlogID,
			':UserID' => $UserID
		]);

		////////

		while($Row = $Result->Next())
		$Output[] = new static($Row);

		return $Output;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	static public function
	Get(Int $BlogID, Int $UserID, String $Level):
	?self {

		$Row = Nether\Database::Get()
		->NewVerse()
		->Select('BlogUsers')
		->Fields('*')
		->Where([
			'blog_id=:BlogID',
			'user_id=:UserID',
			'bloguser_level=:Level'
		])
		->Query([
			':BlogID' => $BlogID,
			':UserID' => $UserID,
			':Level'  => $Level
		])
		->Next();

		if($Row)
		return new static($Row);

		return NULL;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	static public function
	Create($Opt=NULL)	:
	self {

		$Result = NULL;
		$User = NULL;
		$Blog = NULL;

		////////

		$Opt = new Nether\Object($Opt,[
			'BlogID' => 0,
			'UserID' => 0,
			'Level'  => NULL
		]);

		if(!$Opt->BlogID)
		throw new Exception('blog user must have BlogID defined');

		if(!$Opt->UserID)
		throw new Exception('blog user must have UserID defined');

		if(!$Opt->Level)
		throw new Exception('blog user must have Level defined');

		////////

		$User = Atlantis\User::GetByID((Int)$Opt->UserID);

		if(!$User)
		throw new Exception('the user must exist.');

		$Blog = Atlantis\Blog::GetByID((Int)$Opt->BlogID);

		if(!$Blog)
		throw new Exceptoin('the blog must exist');

		////////

		// if this relationship already exists just return the one that was
		// there and move on.

		if($Result = static::Get($Opt->BlogID,$Opt->UserID,$Opt->Level))
		return $Result;

		////////

		$Result = Nether\Database::Get()
		->NewVerse()
		->Insert('BlogUsers',Nether\Database\Verse::InsertIgnore)
		->Values([
			'blog_id'        => ':BlogID',
			'user_id'        => ':UserID',
			'bloguser_level' => ':Level'
		])
		->Query($Opt);

		if(!$Result->IsOK())
		throw new Exception('Blog\User::Create critical failure');

		////////

		// after a successful insert we need to flush caches for anyone
		// who was involved.

		$User->Flush();
		$Blog->Flush();

		return new static([
			'blog_id'        => $Opt->BlogID,
			'user_id'        => $Opt->UserID,
			'bloguser_level' => $Opt->Level
		]);
	}

}
