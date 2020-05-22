<?php

namespace Routes;
use \Atlantis as Atlantis;
use \Nether   as Nether;
use \Routes   as Routes;

class Home
extends Atlantis\Site\PublicWeb {

	public function
	Index() {

		$Promo = (new Atlantis\Element\PagePromo)
		->SetTitle('Oh Snap')
		->SetSubtitle(
			"This theme is not even blue.\n".
			"With a name like that you think it would be."
		);

		$this->Surface->Set('Page.Promo',$Promo);
		$this->Surface->Set('Home.PopularBlogs',$this->GetPopularBlogs());
		$this->Surface->Set('Home.Posts',$this->GetRecentPosts());
		$this->Surface->Area('home/index');
		return;
	}

	protected function
	GetPopularBlogs():
	Atlantis\Datastore {
	/*//
	fetch a list of the most popular blogs for displaying on the home page.
	technically this is just an alphabetical list atm since there is no
	stat tracking and i am the only blog...
	//*/

		$Output = Atlantis\Blog::Search([
			'Sort'  => 'TitleAZ',
			'Limit' => 8,
			'Page'  => 1
		]);

		return $Output;
	}

	protected function
	GetRecentPosts():
	Atlantis\Datastore {
	/*//
	fetch a list of the most recent blog posts site wide.
	//*/

		$Output = Atlantis\Blog\Post::Search([
			'Sort'  => 'Newest',
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
		header("404 Not Found");
		echo "404 - Not Found";
		return;
	}

}
