<?php

namespace Nether\Auth\Error;
use \Nether as Nether;

class PasswordConfirmFail
extends Nether\Auth\Error {

	public function
	__construct() {
		parent::__construct('Passwords did not match.');
		return;
	}

}
