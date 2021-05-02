<?php

namespace Atlantis\Site;
use \Atlantis as Atlantis;

class PrivateAPI
extends PublicAPI {

	public function
	__Construct(Atlantis\Site\Router $Router) {
		parent::__Construct($Router);
		$this->RequireAdminSession();
		return;
	}

}
