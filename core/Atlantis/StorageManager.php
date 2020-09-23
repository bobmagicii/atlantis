<?php

namespace Atlantis;

use
\Atlantis as Atlantis,
\Nether   as Nether,
\League   as League;

class StorageManager
extends League\Flysystem\MountManager {

	public function
	__Construct(){

		parent::__construct();

		$Systems = Nether\Option::Get('Atlantis.File.Filesystems') ?: [];
		$Name = NULL;
		$Sys = NULL;

		foreach($Systems as $Name => $Sys)
		$this->MountFilesystem($Name,$Sys->GetFileSystem());

		return;
	}

}
