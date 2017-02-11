<?php

namespace Nether\Auth\Error;
use \Nether as Nether;

class AliasNotUnique
extends Nether\Auth\Error {

	public function
	__construct() {
		parent::__construct('Alias already in use.');
		return;
	}

}
