<?php

namespace Atlantis\Error;

use
\Atlantis as Atlantis;

class UserAliasInvalid
extends Atlantis\Error {

	public function
	__Construct() {
		parent::__construct('Alias is invalid.');
		return;
	}

}
