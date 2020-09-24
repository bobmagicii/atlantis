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

	public function
	GetURL(String $Path):
	String {

		return sprintf(
			'%s/upl/%s',
			Nether\Option::Get('Atlantis.Website'),
			$Path
		);
	}

	public function
	GetSignedURL(String $Path, String $Expire=''):
	String {

		// @todo 2020-09-24 this needs to not be hardcoded fool

		return $this->GetURL($Path);
	}

}
