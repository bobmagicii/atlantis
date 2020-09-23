<?php

namespace Atlantis\FileSystem;

use
Atlantis as Atlantis,
Nether as Nether,
League as League;

class Duplicator {

	protected
	String $MountName;

	protected
	$Source;

	protected
	$Dest;

	////////////////
	////////////////

	public function
	__Construct($MountName,$Source,$Dest) {

		$this->MountName = $MountName;
		$this->Source = $Source;
		$this->Dest = $Dest;

		return;
	}

	public function
	GetMountName():
	String {

		return $this->MountName;
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
