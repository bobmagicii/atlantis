<?php

namespace Atlantis\Site;
use \Atlantis as Atlantis;
use \Nether   as Nether;

class Router
extends Nether\Avenue\Router {

	public function
	__Construct($Opt=NULL) {
		parent::__Construct($Opt);

		(static function($Router){
			require(sprintf(
				'%s/conf/routes.conf.php',
				ProjectRoot
			));
			return;
		})($this);

		return;
	}

}
