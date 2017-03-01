<?php

namespace Routes;
use \Atlantis as Atlantis;
use \Routes   as Routes;
use \Nether   as Nether;

use Atlantis\Site\Router       as Router;
use Nether\Avenue\RouteHandler as Handler;
use Exception                  as Exception;

class Blog
extends Atlantis\Site\PublicWeb {

	static public function
	WillHandleRequest(Router $Router, Handler $Handler):
	Bool {
	/*//
	check if we were able to find a blog that matches this request. we are
	trusting that the lookup primed the local cache with this object rather
	than storing a static reference to it.
	//*/

		$Blog = NULL;

		////////

		// make sure we could find the blog.

		if(!($Blog = Atlantis\Blog::GetByAlias($Router->GetPathSlot(1))))
		return FALSE;

		////////

		return TRUE;
	}

	public function
	Index(String $BlogAlias):
	Void {

		$Blog = Atlantis\Blog::GetByAlias($BlogAlias);

		////////

		Nether\Ki::Queue(
			'surface-render-scope',
			function(Array &$Scope) use($Blog) {
				$Scope['blog'] = $Blog;
				return;
			},
			FALSE
		);

		////////

		$this->Surface->Area('blog/index');
		return;
	}

}
