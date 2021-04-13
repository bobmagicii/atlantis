<?php

namespace Atlantis\Struct\EditorJS;

use
Atlantis,
Nether;

use
Exception;

class Block
extends Nether\Object\Mapped
implements Atlantis\Packages\StringableObject {

	protected static
	$PropertyMap = [
		'type' => 'Type'
	];

	// local properties.

	public ?string
	$Type = NULL;

	public ?Nether\Input\Filter
	$Data = NULL;

	////////

	protected function
	OnReady(array $Raw):
	void {

		$this->Data = new Nether\Input\Filter($Raw);
		return;
	}

	public function
	__ToString():
	string {

		return "<div class=\"mb-4\">[EditorJS\Block type={$this->Type}]</div>";
	}

}
