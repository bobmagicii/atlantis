<?php

namespace Routes\Blog;

use
Atlantis,
Nether,
Routes;

use
Nether\Avenue\Router,
Nether\Avenue\RouteHandler;

class PostCD
extends Routes\Blog\Post
implements Nether\Avenue\Interfaces\RouteAcceptance {

	static protected
	?Atlantis\Prototype\BlogDomain $Domain = NULL;

	static public function
	WillHandleRequest(Router $Router, RouteHandler $Handler):
	Bool {

		if($Router->GetPath() === '/index')
		return FALSE;

		static::$Domain = Atlantis\Prototype\BlogDomain::GetByDomain($Router->GetDomain());
		return (static::$Domain instanceof Atlantis\Prototype\BlogDomain);
	}

	public function
	Index(String $BlogAlias=NULL, String $PostAlias1=NULL, ?String $PostAlias2=NULL):
	Void {
	/*//
	@date 2020-10-04
	//*/

		$Domain = static::$Domain;
		$PostAlias = $BlogAlias ?? NULL;

		if($Domain->Type === $Domain::TypeMasquerade) {
			parent::Index($Domain->Blog->Alias,$PostAlias);
			return;
		}

		$this->Goto($Domain->Blog->GetURL(),301);
		return;
	}

}
