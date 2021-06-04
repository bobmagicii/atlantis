<?php

namespace Atlantis\Cache;
use Nether;

class GlobalMemory
extends Nether\Cache\Manager {
/*//
@date 2021-06-03
this cache is for handling volitile ram cache like the local app cache and
the memcached network. things that need to be faf. it is safe to initialize
multiple copies of this manager, they will all access the same global pool of
data.
//*/

	public function
	__Construct() {
		parent::__Construct();

		$MemcacheServers = NULL;

		////////

		if(!Nether\Cache\Engines\MemcacheEngine::HasGlobalPool())
		$MemcacheServers = Nether\Option::Get(
			'Atlantis.Cache.MemcacheServers'
		);

		// add the global app cache.

		$this->EngineAdd(new Nether\Cache\Engines\LocalEngine(
			UseGlobal: TRUE
		));

		// add the global memcache with the trick that makes it safe to
		// spawn multiple instances of the manager.

		$this->EngineAdd(new Nether\Cache\Engines\MemcacheEngine(
			UseGlobal: TRUE,
			Servers: $MemcacheServers
		));

		return;
	}

}

