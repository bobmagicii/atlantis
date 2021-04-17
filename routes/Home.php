<?php

namespace Routes;
use \Atlantis as Atlantis;
use \Nether   as Nether;
use \Routes   as Routes;

class Home
extends Atlantis\Site\PublicWeb {

	protected function
	OnReady():
	void {
	/*//
	@date 2021-04-17
	//*/

		($this->Get)
		->Page(Atlantis\Util\Filters::PageNumberCallable());

		return;
	}

	public function
	Index():
	void {

		$this->Area('home/index',[
			'Posts'        => $this->GetRecentPosts($this->Get->Page),
			'PopularBlogs' => $this->GetPopularBlogs(),
			'PopularPosts' => $this->GetPopularPosts(),
			'RecentUsers'  => $this->GetRecentUsers()
		]);

		return;
	}

	protected function
	GetPopularBlogs():
	Atlantis\Struct\SearchResult {

		$Output = Atlantis\Prototype\LogBlogPostTraffic::FindPopularBlogs([
			'Adult'     => $this->ShouldAdultAllow(),
			'Limit'     => 10,
			'Page'      => 1,
			'Timeframe' => strtotime('-30 days')
		]);

		return $Output;
	}

	protected function
	GetPopularPosts():
	Atlantis\Struct\SearchResult {

		$Output = Atlantis\Prototype\LogBlogPostTraffic::FindPopularPosts([
			'Adult'     => $this->ShouldAdultAllow(),
			'Limit'     => 10,
			'Page'      => 1,
			'Timeframe' => strtotime('-30 days')
		]);

		return $Output;
	}

	protected function
	GetRecentPosts(int $Page=1):
	Atlantis\Struct\SearchResult {
	/*//
	fetch a list of the most recent blog posts site wide.
	//*/

		$Output = Atlantis\Prototype\BlogPost::Find([
			'Adult' => $this->ShouldAdultAllow(),
			'Sort'  => 'newest',
			'Limit' => 6,
			'Page'  => $Page,
			'BindTagsToResult' => TRUE
		]);

		return $Output;
	}

	protected function
	GetRecentUsers():
	Atlantis\Struct\SearchResult {
	/*//
	@date 2020-10-01
	//*/

		$Output = Atlantis\Prototype\User::Find([
			'OptAllowSeen' => 1,
			'Sort'         => 'seen-za'
		]);

		return $Output;
	}

	public function
	About() {
		echo "About Page!";
		return;
	}

	public function
	NotFound() {

		$this
		->Area('error/not-found')
		->Quit(404);

		return;
	}

}
