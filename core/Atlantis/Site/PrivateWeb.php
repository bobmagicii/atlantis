<?php

namespace Atlantis\Site;
use \Atlantis as Atlantis;
use \Nether   as Nether;

class PrivateWeb
extends PublicWeb {

	public function
	__Construct(Atlantis\Site\Router $Router) {
		parent::__Construct($Router);
		$this->RequireAdminSession();
		return;
	}

}
