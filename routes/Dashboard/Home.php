<?php

namespace Routes\Dashboard;

use \Atlantis as Atlantis;

class Home
extends Atlantis\Site\ProtectedWeb {

	public function
	Index():
	Void {

		($this->Surface)
		->Area('dashboard/home');

		return;
	}

}
