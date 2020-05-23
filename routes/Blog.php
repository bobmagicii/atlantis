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

	static protected
	?Atlantis\Prototype\Blog $FoundBlog = NULL;

	static public function
	WillHandleRequest(Router $Router, Handler $Handler):
	Bool {
	/*//
	check if we were able to find a blog that matches this request. we are
	trusting that the lookup primed the local cache with this object rather
	than storing a static reference to it.
	//*/

		$Result = Atlantis\Prototype\Blog::Find([
			'Alias' => $Router->GetPathSlot(1),
			'Limit' => 1
		]);

		if($Result->Count === 0)
		return FALSE;

		static::$FoundBlog = new Atlantis\Prototype\Blog($Result->Payload[0]);
		return TRUE;
	}

	public function
	Index(String $BlogAlias):
	Void {

		$Blog = static::$FoundBlog;

		$Promo = (new Atlantis\Element\PagePromo)
		->SetTitle($Blog->Title)
		->SetSubtitle($Blog->Tagline);

		////////

		Nether\Ki::Queue(
			'surface-render-scope',
			function(Array &$Scope) use($Blog) {
				$Scope['Blog'] = $Blog;
				return;
			},
			FALSE
		);

		////////

		$this->Surface->Set('Page.Promo',$Promo);
		$this->Surface->Area('blog/index');
		return;
	}

}
