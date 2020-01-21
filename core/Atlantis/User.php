<?php

namespace Atlantis;
use \Atlantis as Atlantis;
use \Nether   as Nether;

use \Exception as Exception;

class User
extends Nether\Auth\User {

	protected ?array
	$Blogs = NULL;

	public function
	GetBlogs():
	Array {

		if($this->Blogs === NULL)
		$this->Blogs = Atlantis\Blog\User::ListByUserID($this->ID);

		return $this->Blogs;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	public function
	__ready():
	Void {

		$this->GetBlogs();

		return;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

}
