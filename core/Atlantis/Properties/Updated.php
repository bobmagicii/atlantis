<?php

namespace Atlantis\Properties;

trait Updated {

	protected
	Bool $Updated = FALSE;

	public function
	IsUpdated():
	Bool {

		return $this->Updated;
	}

	public function
	SetUpdated(Bool $Updated):
	self {

		$this->Updated = $Updated;
		return $this;
	}

}
