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

	static protected
	?Atlantis\Prototype\BlogPost $FoundPost = NULL;

	static public function
	WillHandleRequest(Router $Router, Handler $Handler):
	Bool {
	/*//
	check if we were able to find a blog and post that matches this request.
	we are trusting that by looking for these the local cache has been
	populated to get them fast again later rather than store a reference to
	them in a static property.
	//*/

		// make sure we could find the blog.

		$Result = Atlantis\Prototype\BlogPost::Find([
			'BlogAlias' => $Router->GetPathSlot(1),
			'Alias'     => $Router->GetPathSlot(2),
			'Limit'     => 1
		]);

		if($Result->Total === 0)
		return FALSE;

		static::$FoundPost = new Atlantis\Prototype\BlogPost($Result->Payload[0]);
		return TRUE;
	}

	public function
	Index(String $BlogAlias, String $PostAlias):
	Void {

		$Post = static::$FoundPost;
		$Blog = static::$FoundPost->Blog;

		$Promo = (new Atlantis\Element\PagePromo)
		->SetTitle($Blog->Title)
		->SetSubtitle($Blog->Tagline);

		////////

		Nether\Ki::Queue(
			'surface-render-scope',
			function(Array &$Scope) use($Blog,$Post) {
				$Scope['Blog'] = $Blog;
				$Scope['Post'] = $Post;
				return;
			},
			FALSE
		);

		////////

		$this->Surface->Set('Page.Promo',$Promo);
		$this->Surface->Area('post/index');
		return;
	}

}
