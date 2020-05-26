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
			'Posts' => $this->GetRecentPosts()
		]);

		return;
	}

	protected function
	GetRecentPosts():
	Atlantis\Struct\SearchResult {
	/*//
	fetch a list of the most recent blog posts site wide.
	//*/

		$Output = Atlantis\Prototype\BlogPost::Find([
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
