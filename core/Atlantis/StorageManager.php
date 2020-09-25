<?php

namespace Atlantis;

use
\Atlantis as Atlantis,
\Nether   as Nether,
\League   as League;

class StorageManager
extends League\Flysystem\MountManager {

	public static
	$FileSystem = [];

	public function
	__Construct(){

		parent::__construct();

		$Systems = Nether\Option::Get('Atlantis.File.Filesystems') ?: [];
		$Name = NULL;
		$Sys = NULL;

		foreach($Systems as $Name => $Sys) {
			static::$FileSystem[$Name] = $Sys->GetFileSystem();
			$this->MountFilesystem($Name,static::$FileSystem[$Name]);
		}

		return;
	}

	public function
	GetFilesystemConfig(String $Key) {

		$Systems = Nether\Option::Get('Atlantis.File.Filesystems') ?: [];

		if(array_key_exists($Key,$Systems))
		return $Systems[$Key];

		return NULL;
	}

}
