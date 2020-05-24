<?php

// if you wish to change any of these settings it is recommended you
// copy them to your private.conf.php so that they cannot be
// accidentally overwritten with an update.

Nether\Option::Set([

	////////////////////////////////////////////////////////////////
	// Application Config //////////////////////////////////////////

	'app-name'       => 'Atlantis',
	'app-short-desc' => 'Lulz',
	'app-long-desc'  => 'Lulz',

	'nether-web-root' => sprintf('%s/www',ProjectRoot),
	'nether-web-path' => '/',

	'Atlantis.Date.DefaultTimeZone' => 'America/Chicago',
	'Atlantis.UUID.Version'         => 6,
	'Atlantis.UUID.Node'            => NULL,

	////////////////////////////////////////////////////////////////
	// Library Config //////////////////////////////////////////////

	'surface-auto-stash' => 'Surface',

	'cache-stash-name'   => 'Cache',
	'cache-key-prefix'   => 'atlantis-',
	'cache-drivers-load' => [
		'App'  => 'Nether\\Cache\\Appcache'
	]

]);
