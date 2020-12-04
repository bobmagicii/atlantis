<?php

namespace Atlantis\Meta;

use Attribute;

#[Attribute(Attribute::IS_REPEATABLE|Attribute::TARGET_ALL)]
class Error {

	public
	Int $Code;

	public
	String $Message;

	public function
	__Construct(Int $Code=0, String $Message='OK') {

		return;
	}

}
