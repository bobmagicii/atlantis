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
		$Sys = NULL;

		foreach($Systems as $Sys)
		$this->MountFilesystem($Sys->GetMountName(),$Sys->GetFileSystem());

		return;
	}

}
