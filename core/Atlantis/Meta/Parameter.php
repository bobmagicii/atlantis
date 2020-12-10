<?php

namespace Atlantis\Meta;

use Attribute;

#[Attribute(Attribute::IS_REPEATABLE|Attribute::TARGET_ALL)]
class Parameter {

	public
	String $Name;

	public
	String $Type;

	public function
	__Construct(String $Name, String $Type) {

		$this->Name = $Name;
		$this->Type = $Type;

		return;
	}

}
