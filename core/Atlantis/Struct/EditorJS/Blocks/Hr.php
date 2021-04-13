<?php

namespace Atlantis\Struct\EditorJS\Blocks;
use Atlantis;

class Hr
extends Atlantis\Struct\EditorJS\Block {

	protected function
	OnReady(array $Raw):
	void {
		parent::OnReady($Raw);

		($this->Data)
		->Mode('Atlantis\\Util\\Filters::StrippedText');

		return;
	}

	public function
	__ToString():
	string {

		switch($this->Data->Mode) {
			case 'empty':
				return sprintf('<div class="pt-4 pb-4"></div>');
			break;
		}

		return sprintf(
			'<hr />'
		);
	}

}
