<?php

namespace Routes\Blog;
use \Atlantis as Atlantis;

class Post
extends Atlantis\Site\PublicWeb {

	static protected
	?Atlantis\Prototype\BlogPost $Found = NULL;

	public function
	Index(String $BlogAlias, String $PostAlias):
	Void {
	/*//
	@date 2020-05-24
	//*/

		$Post = Atlantis\Prototype\BlogPost::GetByAlias(
			$BlogAlias,
			$PostAlias
		);

		if(!$Post)
		$this->Area('error/not-found')->Quit(404);

		////////

		$this
		->Push([ 'Blog' => $Post->Blog, 'Post' => $Post ])
		->Area('blog/post');

		return;
	}

}
