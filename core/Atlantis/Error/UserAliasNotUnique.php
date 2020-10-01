<?php

namespace Atlantis\Error;

use
\Atlantis as Atlantis;

class UserAliasNotUnique
extends Atlantis\Error {

	public function
	__Construct() {
		parent::__construct('Alias already in use.');
		return;
	}

}
