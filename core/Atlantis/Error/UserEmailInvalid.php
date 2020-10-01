<?php

namespace Atlantis\Error;

use
\Atlantis as Atlantis;

class UserEmailInvalid
extends Atlantis\Error {

	public function
	__Construct() {
		parent::__Construct('Email is invalid.');
		return;
	}
}
