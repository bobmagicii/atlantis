<?php

namespace Atlantis\Meta;

use Attribute;

#[Attribute(Attribute::IS_REPEATABLE|Attribute::TARGET_ALL)]
class Error {

	public function
	__Construct(
		public Int $Code=0,
		public String $Message='OK'
	) {

		return;
	}

}
