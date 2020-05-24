<?php

namespace Routes\Blog;
use \Atlantis as Atlantis;

class Index
extends Atlantis\Site\PublicWeb {

	public function
	Index(String $BlogAlias):
	Void {
	/*//
	@date 2020-05-24
	//*/

		$Blog = Atlantis\Prototype\Blog::GetByAlias($BlogAlias);

		if(!$Blog)
		$this->Area('error/not-found')->Quit(404);

		////////

		$this
		->Push([ 'Blog' => $Blog ])
		->Area('blog/index');

		return;
	}

}
