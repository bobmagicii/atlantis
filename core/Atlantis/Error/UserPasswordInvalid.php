<?php

namespace Atlantis\Error;

use
\Atlantis as Atlantis;

class UserPasswordInvalid
extends Atlantis\Error {

	public function
	__Construct() {
		parent::__construct('Password does not meet minimum requirements.');
		return;
	}

}
