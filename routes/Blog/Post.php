<?php

namespace Routes\Blog;
use \Atlantis as Atlantis;
use \Routes   as Routes;
use \Nether   as Nether;

use Atlantis\Site\Router       as Router;
use Nether\Avenue\RouteHandler as Handler;
use Exception                  as Exception;

class Post
extends Atlantis\Site\PublicWeb {

	static protected
	?Atlantis\Prototype\BlogPost $Found = NULL;

	static public function
	WillHandleRequest(Router $Router, Handler $Handler):
	Bool {

		$Result = Atlantis\Prototype\BlogPost::Find([
			'BlogAlias' => $Router->GetPathSlot(1),
			'Alias'     => $Router->GetPathSlot(2),
			'Limit'     => 1
		]);

		if($Result->Total === 0)
		return FALSE;

		static::$Found = $Result->Payload[0];
		return TRUE;
	}

	public function
	Index(String $BlogAlias, String $PostAlias):
	Void {

		$Post = static::$Found;

		$Promo = (new Atlantis\Element\PagePromo)
		->SetTitle($Post->Blog->Title)
		->SetSubtitle($Post->Blog->Tagline);

		////////

		($this->Surface)
		->Set('Page.Promo',$Promo)
		->Set('Blog.Post',$Post)
		->Area('blog/post');
		return;
	}

}
