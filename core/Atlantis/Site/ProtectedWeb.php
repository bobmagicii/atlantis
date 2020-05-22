<?php

namespace Atlantis\Site;
use \Atlantis as Atlantis;
use \Nether   as Nether;

class ProtectedWeb
extends PublicWeb {

	public function
	__Construct(Atlantis\Site\Router $Router) {
		parent::__Construct($Router);

		if(!$this->User)
		$this->Goto(sprintf(
			'/login?goto=%s',
			$this->GetEncodedURL()
		));

		return;
	}

}
