<?php

namespace Atlantis\Error;

use
\Atlantis as Atlantis;

class UserPasswordConfirmFail
extends Atlantis\Error {

	public function
	__Construct() {
		parent::__construct('Passwords did not match.');
		return;
	}

}
