<?php

namespace Atlantis\Cache;
use Nether;

class AppMemory
extends Nether\Cache\Manager {
/*//
@date 2021-06-03
local appcache.
//*/

	public function
	__Construct() {
		parent::__Construct();

		$this->EngineAdd(new Nether\Cache\Engines\LocalEngine(
			UseGlobal: FALSE
		));

		return;
	}

}

