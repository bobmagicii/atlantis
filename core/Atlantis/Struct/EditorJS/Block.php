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

	protected function
	OnReady(Array $Raw):
	Void {

		$this->Data = new Nether\Input\Filter($this->Data);
		return;
	}

	public function
	__ToString():
	String {

		return "<div class=\"mb-4\">[EditorJS\Block type={$this->Type}]</div>";
	}

}
