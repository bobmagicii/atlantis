<?php

namespace Routes\Blog;

use
Atlantis,
Nether,
Routes;

class CustomDomain
extends Routes\Blog\Index
implements Nether\Avenue\Interfaces\RouteAcceptance {

	static protected
	?Atlantis\Prototype\BlogDomain $Found = NULL;

	static public function
	WillHandleRequest(Nether\Avenue\Router $Router, Nether\Avenue\RouteHandler $Handler):
	Bool {

		static::$Found = Atlantis\Prototype\BlogDomain::GetByDomain($Router->GetDomain());
		return (static::$Found instanceof Atlantis\Prototype\BlogDomain);
	}

	public function
	Index(String $BlogAlias=NULL):
	Void {

		$Custom = static::$Found;

		if($Custom->Type === $Custom::TypeRedirect)
		$this->Goto($Custom->Blog->GetURL());

		return;
	}

}
