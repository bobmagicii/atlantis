<?php

namespace Atlantis\FileSystem;

use
Atlantis as Atlantis,
Nether as Nether,
League as League;

class Local {

	protected
	String $Root;

	////////////////
	////////////////

	public function
	__Construct($Root) {

		$this->Root = $Root;

		return;
	}

	public function
	GetAdapter() {

		return new League\Flysystem\Adapter\Local($this->Root);
	}

	public function
	GetFileSystem() {

		return new League\Flysystem\Filesystem(
			$this->GetAdapter()
		);
	}

}
