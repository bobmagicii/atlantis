<?php

namespace Atlantis\Struct\EditorJS\Blocks;
use Atlantis;

class Image
extends Atlantis\Struct\EditorJS\Block {

	protected function
	OnReady(Array $Raw):
	Void {
		parent::OnReady($Raw);

		($this->Data)
		->URL('Atlantis\\Util\\Filters::StrippedText');

		return;
	}

	public function
	__ToString():
	String {

		return sprintf(
			'<div class="PostImage mb-4"><img src="%s" alt="" title="" /></div>',
			$this->Data->URL
		);
	}

}
