<?php

namespace Atlantis\Site;
use \Atlantis as Atlantis;
use \Nether   as Nether;

class Router
extends Nether\Avenue\Router {

	public function
	__construct($Opt=NULL) {
		parent::__construct($Opt);

		$this
		->AddRoute('{@}//index','Routes\\Home::Index')
		->AddRoute('{@}//about','Routes\\Home::About')
		->AddRoute('{@}//login','Routes\\Login::Index')
		->AddRoute('{@}//logout','Routes\\Login::Destroy')
		->AddRoute('{@}//join','Routes\\Join::Index')
		->AddRoute('{@}//theme-test/($)','Routes\\ThemeTest::Index')
		->AddRoute('{@}//{@}','Routes\\Home::NotFound');

		// figure out who is logged in.
		Nether\Stash::Set(
			'User',
			Atlantis\Site\User::FetchSession()
		);

		// give surface area access to the router via $router.
		// lowercase to match $this, a "magic" variable.
		Nether\Ki::Queue(
			'surface-render-scope',
			function(Array &$Scope):
			Void { $Scope['router'] = $this; return; },
			TRUE
		);

		return;
	}

}

