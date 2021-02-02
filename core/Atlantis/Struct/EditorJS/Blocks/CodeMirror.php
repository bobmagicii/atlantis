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
		->Title('Atlantis\\Util\\Filters::StrippedText')
		->Mime('Atlantis\\Util\\Filters::StrippedText')
		->Text('Atlantis\\Util\\Filters::TrimmedText');

		return;
	}

	public function
	__ToString():
	String {

		return sprintf(
			'<pre class="%s" data-mime="%s" data-title="%s" data-theme="%s">%s</pre>',
			'CodeViewer',
			$this->Data->Mime,
			$this->Data->Title,
			$this->Data->Theme,
			htmlentities($this->Data->Text)
		);
	}

}
