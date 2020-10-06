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

	'Atlantis.User.Join.Mode'      => Atlantis\Prototype\User::JoinModeInvite,
	'Atlantis.User.Password.Algo'  => PASSWORD_ARGON2ID,
	'Atlantis.User.Cookie.Name'    => 'atlantis-user',
	'Atlantis.User.Cookie.Path'    => '/',
	'Atlantis.User.Cookie.Domain'  => (
		(array_key_exists('HTTP_HOST',$_SERVER))?
		($_SERVER['HTTP_HOST']):
		(NULL)
	),

	// blog settings.
	'Atlantis.Blog.AllowCustomDomains'    => TRUE,
	'Atlantis.Blog.DefaultImageHeaderURL' => '/themes/default/gfx/bg01.jpg',
	'Atlantis.Blog.DefaultImageIconURL'   => '/themes/default/gfx/icon-default-light.png',

	// date settings.
	'Atlantis.Date.DefaultTimeZone' => 'America/Chicago',

	// uuid settings.
	'Atlantis.UUID.Version'         => 6,
	'Atlantis.UUID.Node'            => TRUE,

	// logging settings.
	'Atlantis.Log.Application.File'  => sprintf('%s/logs/atlantis.log',ProjectRoot),
	'Atlantis.Log.Application.Level' => Atlantis\Logger::INFO,

	////////////////////////////////////////////////////////////////
	// Library Config //////////////////////////////////////////////

	'surface-auto-stash' => 'Surface',

	'cache-stash-name'   => 'Cache',
	'cache-key-prefix'   => 'atlantis-',
	'cache-drivers-load' => [
		'App'  => 'Nether\\Cache\\Appcache'
	]

]);
