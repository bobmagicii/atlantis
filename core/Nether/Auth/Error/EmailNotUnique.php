<?php

namespace Nether\Auth\Error;
use \Nether as Nether;

class EmailNotUnique
extends Nether\Auth\Error {

	public function
	__construct() {
		parent::__construct('Email already in use.');
		return;
	}
}
