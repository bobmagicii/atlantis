<?php

namespace Atlantis\FileSystem;

use
Atlantis as Atlantis,
Nether as Nether,
League as League;

class Duplicator {

	protected
	$Source;

	protected
	$Dest;

	////////////////
	////////////////

	public function
	__Construct($Source,$Dest) {

		$this->Source = $Source;
		$this->Dest = $Dest;

		return;
	}

	public function
	GetAdapter() {

		return new League\Flysystem\Replicate\ReplicateAdapter(
			$this->Source->GetAdapter(),
			$this->Dest->GetAdapter()
		);
	}

	public function
	GetFileSystem() {

		return new League\Flysystem\Filesystem(
			$this->GetAdapter()
		);
	}


}
