<?php

namespace Nether\Auth\Error;
use \Nether as Nether;

class AliasInvalid
extends Nether\Auth\Error {

	public function
	__construct() {
		parent::__construct('Alias is invalid.');
		return;
	}

}
