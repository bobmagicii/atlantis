<?php

////////////////////////////////////////////////////////////////////////////////
// Application Configuration ///////////////////////////////////////////////////

Nether\Option::Set([
	// application settings.
	'app-name' => 'Atlantis',
	'app-short-desc' => 'Lulz',
	'app-long-desc' => 'Lulz',

	// framework settings.
	'nether-web-root' => sprintf('%s/www',ProjectRoot),
	'nether-web-path' => '/',

	// cache config.
	// delete cache-drivers-load for production.
	'cache-stash-name' => 'Cache',
	'cache-key-prefix' => 'atlantis-',
	'cache-drivers-load' => [
		'App'  => 'Nether\\Cache\\Appcache',
	],

	// surface config.
	'surface-auto-stash' => 'Surface'
]);
