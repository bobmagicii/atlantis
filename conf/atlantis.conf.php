<?php

Nether\Option::Set([

	'Atlantis.Date.DefaultTimeZone' => 'America/Chicago',

	////////////////////////////////////////////////////////////////
	// Application Config //////////////////////////////////////////

	'app-name'       => 'Atlantis',
	'app-short-desc' => 'Lulz',
	'app-long-desc'  => 'Lulz',

	'nether-web-root' => sprintf('%s/www',ProjectRoot),
	'nether-web-path' => '/',

	////////////////////////////////////////////////////////////////
	// Library Config //////////////////////////////////////////////

	// you wont want to mess with these much i promise.

	'surface-auto-stash' => 'Surface',

	'cache-stash-name'   => 'Cache',
	'cache-key-prefix'   => 'atlantis-',
	'cache-drivers-load' => [
		'App'  => 'Nether\\Cache\\Appcache'
	]

]);
