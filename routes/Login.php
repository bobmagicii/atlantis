<?php

namespace Routes;
use \Routes   as Routes;
use \Atlantis as Atlantis;

class Login
extends Atlantis\Site\PublicWeb {

	public function
	Index():
	Void {

		if($this->Post->Account && $this->Post->Password) {
			$this->HandleLogin();
			return;
		}

		$this->Surface->Area('login/index');
		return;
	}

	protected function
	HandleLogin():
	Void {

		return;
	}

}
