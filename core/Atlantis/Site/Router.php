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
		->AddRoute('{@}//index','Routes\Home::Index')
		->AddRoute('{@}//about','Routes\Home::About')
		->AddRoute('{@}//{@}','Routes\Home::NotFound');

		Nether\Ki::Queue(
			'surface-render-scope',
			function(Array &$Scope):
			Void { $Scope['router'] = $this; return; },
			TRUE
		);

		return;
	}

}

