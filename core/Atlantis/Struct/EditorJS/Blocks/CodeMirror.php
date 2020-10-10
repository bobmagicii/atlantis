<?php

namespace Atlantis\Struct\EditorJS\Blocks;
use Atlantis;

class CodeMirror
extends Atlantis\Struct\EditorJS\Block {

	protected function
	OnReady(Array $Raw):
	Void {
		parent::OnReady($Raw);

		($this->Data)
		->Mine('Atlantis\\Util\\FIlters::StrippedText')
		->Text('Atlantis\\Util\\Filters::TrimmedText');

		return;
	}

	public function
	__ToString():
	String {

		return "<div class=\"CodeViewer\" data-mime=\"{$this->Data->Mime}\">" . htmlentities($this->Data->Text) . "</div>\n";
	}

}
