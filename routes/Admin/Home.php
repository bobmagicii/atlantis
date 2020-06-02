<?php

namespace Routes\Admin;

use
\Atlantis as Atlantis;

class Home
extends Atlantis\Site\PrivateWeb {

	public function
	Index():
	Void {

		$this
		->Set('Page.Title','Admin')
		->Area('admin/home',[
			'BlogCount'   => $this->GetBlogCount(),
			'PostCount'   => $this->GetPostCount(),
			'UsersRecent' => $this->GetRecentUsers()
		]);

		return;
	}

	public function
	GetBlogCount():
	Int {

		return 0;
	}

	public function
	GetPostCount():
	Int {

		return 0;
	}

	public function
	GetRecentUsers():
	Atlantis\Struct\SearchResult {

		return Atlantis\User::Find([
			'Limit' => 10,
			'Page'  => 1,
			'Sort'  => 'newest'
		]);
	}

}
