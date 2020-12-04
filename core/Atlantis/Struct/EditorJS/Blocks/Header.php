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
		->Text('Atlantis\\Util\\Filters::StrippedText')
		->Level('Atlantis\\Util\\Filters::TypeInt');

		return;
	}

	public function
	__ToString():
	String {

		$Level = $this->Data->Level;

		return "<h{$this->Data->Level} class=\"PostHeading mb-4\">{$this->Data->Text}</h{$this->Data->Level}>\n";
	}

}
