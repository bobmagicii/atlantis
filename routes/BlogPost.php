<?php

namespace Routes;
use \Atlantis as Atlantis;
use \Routes   as Routes;
use \Nether   as Nether;

use Atlantis\Site\Router       as Router;
use Nether\Avenue\RouteHandler as Handler;
use Exception                  as Exception;

class BlogPost
extends Atlantis\Site\PublicWeb {

	static public function
	WillHandleRequest(Router $Router, Handler $Handler):
	Bool {
	/*//
	check if we were able to find a blog and post that matches this request.
	we are trusting that by looking for these the local cache has been
	populated to get them fast again later rather than store a reference to
	them in a static property.
	//*/

		$Blog = NULL;
		$Post = NULL;

		////////

		// make sure we could find the blog.

		if(!($Blog = Atlantis\Blog::GetByAlias($Router->GetPathSlot(1))))
		return FALSE;

		// make sure we could find the post.

		if(!($Post = $Blog->GetPostByAlias($Router->GetPathSlot(2))))
		return FALSE;

		////////

		return TRUE;
	}

	public function
	Index(String $BlogAlias, String $PostAlias):
	Void {

		$Blog = Atlantis\Blog::GetByAlias($BlogAlias);
		$Post = $Blog->GetPostByAlias($PostAlias);

		////////

		Nether\Ki::Queue(
			'surface-render-scope',
			function(Array &$Scope) use($Blog,$Post) {
				$Scope['blog'] = $Blog;
				$Scope['post'] = $Post;
				return;
			},
			FALSE
		);

		////////

		$this->Surface->Area('post/index');
		return;
	}

}
