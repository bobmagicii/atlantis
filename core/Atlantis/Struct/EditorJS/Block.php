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
		'type' => 'Type',
		'data' => 'Data'
	];

	// data properties from EditorJS

	public ?array
	$data = NULL;

	public ?string
	$type = NULL;

	// local properties.

	public ?Nether\Input\Filter
	$Data = NULL;

	////////

	protected function
	OnReady(array $Raw):
	void {

		$this->Data = new Nether\Input\Filter($this->Data);
		return;
	}

	public function
	__ToString():
	string {

		return "<div class=\"mb-4\">[EditorJS\Block type={$this->Type}]</div>";
	}

}
