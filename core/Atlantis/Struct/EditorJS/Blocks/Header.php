<?php

namespace Atlantis\Struct\EditorJS\Blocks;
use Atlantis;

class Header
extends Atlantis\Struct\EditorJS\Block {

	protected function
	OnReady(Array $Raw):
	Void {
		parent::OnReady($Raw);

		($this->Data)
		->Text('Atlantis\\Util\\Filters::StrippedText');

		return;
	}

	public function
	__ToString():
	String {

		return "<h2 class=\"PostHeading mb-4\">{$this->Data->Text}</h2>\n";
	}

}
