<?php

namespace Atlantis\Meta;

use Attribute;

#[Attribute(Attribute::IS_REPEATABLE|Attribute::TARGET_ALL)]
class Parameter {

	public function
	__Construct(
		public ?String $Name=NULL,
		public ?String $Type=NULL
	) {

		return;
	}

}
