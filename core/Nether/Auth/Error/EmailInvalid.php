<?php

namespace Nether\Auth\Error;
use \Nether as Nether;

class EmailInvalid
extends Nether\Auth\Error {

	public function
	__construct() {
		parent::__construct('Email is invalid.');
		return;
	}
}
