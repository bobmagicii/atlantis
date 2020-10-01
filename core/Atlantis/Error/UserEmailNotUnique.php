<?php

namespace Atlantis\Error;

use
\Atlantis as Atlantis;

class UserEmailNotUnique
extends Atlantis\Error {

	public function
	__Construct() {
		parent::__construct('Email already in use.');
		return;
	}
}
