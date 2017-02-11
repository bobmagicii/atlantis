<?php

namespace Nether\Auth\Error;
use \Nether as Nether;

class PasswordInvalid
extends Nether\Auth\Error {

	public function
	__construct() {
		parent::__construct('Password is in use.');
		return;
	}

}
