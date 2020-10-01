<?php

namespace Routes;
use \Atlantis as Atlantis;
use \Nether   as Nether;
use \Routes   as Routes;

class Home
extends Atlantis\Site\PublicWeb {

	public function
	Index():
	Void {


		$this->Area('home/index',[
			'Posts'        => $this->GetRecentPosts(),
			'PopularBlogs' => $this->GetPopularBlogs(),
			'PopularPosts' => $this->GetPopularPosts()
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

		//($Output->Payload)
		//->Remap(function($Val){ return $Val->Blog; });

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

		($Output->Payload)
		->Remap(function($Val){ return $Val->Post; });

		return $Output;
	}

	protected function
	GetRecentPosts():
	Atlantis\Struct\SearchResult {
	/*//
	fetch a list of the most recent blog posts site wide.
	//*/

		$Output = Atlantis\Prototype\BlogPost::Find([
			'Adult' => $this->ShouldAdultAllow(),
			'Sort'  => 'newest',
			'Limit' => 10,
			'Page'  => 1
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
