<?php

namespace Routes\Blog;

use
Atlantis,
Nether,
Routes;

use
Nether\Avenue\Router,
Nether\Avenue\RouteHandler;

class IndexCD
extends Routes\Blog\Index
implements Nether\Avenue\Interfaces\RouteAcceptance {

	static protected
	?Atlantis\Prototype\BlogDomain $Domain = NULL;

	static public function
	WillHandleRequest(Router $Router, RouteHandler $Handler):
	Bool {

		static::$Domain = Atlantis\Prototype\BlogDomain::GetByDomain($Router->GetDomain());
		return (static::$Domain instanceof Atlantis\Prototype\BlogDomain);
	}

	public function
	Index(String $BlogAlias=NULL):
	Void {

		$Domain = static::$Domain;

		if($Domain->Type === $Domain::TypeMasquerade) {
			parent::Index($Domain->Blog->Alias);
			return;
		}

		$this->Goto($Domain->Blog->GetURL(),301);
		return;
	}

}
