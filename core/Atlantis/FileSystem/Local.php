<?php

namespace Atlantis\FileSystem;

use
Atlantis as Atlantis,
Nether as Nether,
League as League;

class Local {

	protected
	String $MountName;

	protected
	String $Root;

	////////////////
	////////////////

	public function
	__Construct($MountName,$Root) {

		$this->MountName = $MountName;
		$this->Root = $Root;

		return;
	}

	public function
	GetMountName():
	String {

		return $this->MountName;
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
