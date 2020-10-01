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
			'BlogsRecent'  => $this->GetRecentBlogs(),
			'PostsRecent'  => $this->GetRecentPosts(),
			'PostsPopular' => $this->GetPopularPosts(),
			'UsersRecent'  => $this->GetRecentUsers()
		]);

		return;
	}

	public function
	GetRecentBlogs():
	Atlantis\Struct\SearchResult {

		return Atlantis\Prototype\Blog::Find([
			'Adult' => TRUE,
			'Limit' => 10,
			'Page'  => 1,
			'Sort'  => 'newest'
		]);
	}

	public function
	GetRecentPosts():
	Atlantis\Struct\SearchResult {

		return Atlantis\Prototype\BlogPost::Find([
			'Adult' => TRUE,
			'Limit' => 10,
			'Page'  => 1,
			'Sort'  => 'newest'
		]);
	}

	public function
	GetRecentUsers():
	Atlantis\Struct\SearchResult {

		return Atlantis\Prototype\User::Find([
			'Limit' => 10,
			'Page'  => 1,
			'Sort'  => 'newest'
		]);
	}

	protected function
	GetPopularPosts():
	Atlantis\Struct\SearchResult {

		$Output = Atlantis\Prototype\LogBlogPostTraffic::FindPopularPosts([
			'Adult'     => TRUE,
			'Limit'     => 10,
			'Page'      => 1,
			'Timeframe' => strtotime('-30 days')
		]);

		return $Output;
	}

}
