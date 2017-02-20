<?php

namespace Atlantis\Site;
use \Atlantis as Atlantis;
use \Nether   as Nether;

use \Exception as Exception;

class User
extends Nether\Auth\User {

	protected
	$Blogs = [];

	public function
	GetBlogs():
	Array {

		return $this->Blogs;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	public function
	__ready():
	Void {

		// $this->FetchBlogs();
		return;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	protected function
	FetchBlogs():
	Void {

		$Result = Nether\Database::Get()
		->NewVerse()
		->Select('BlogUsers')
		->Fields('*')
		->Where('user_id=:ID')
		->Query([
			':ID' => $this->ID
		]);

		if(!$Result->IsOK())
		throw new Exception('User::FetchBlogs critikal phail');

		while($Row = $Result->Next())
		$this->Blogs[] = new Atlantis\Blog\User($Row);

		return;
	}

}
