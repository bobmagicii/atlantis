<?php

namespace Atlantis\Struct\EditorJS\Blocks;
use Atlantis;

class Paragraph
extends Atlantis\Struct\EditorJS\Block {

	protected function
	OnReady(Array $Raw):
	Void {
		parent::OnReady($Raw);

		($this->Data)
		->Text('Atlantis\\Util\\Filters::TrimmedText');

		return;
	}

	public function
	__ToString():
	String {

		return "<div class=\"mb-4\">{$this->Data->Text}</div>\n";
	}

}
