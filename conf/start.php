<?php

define('ProjectTime',microtime(TRUE));
define('ProjectRoot',dirname(__FILE__,2));

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if(file_exists(sprintf('%s/prod.lock',ProjectRoot))) {
	define('ENV\\DEV',FALSE);
	define('ENV\\PROD',TRUE);
}

else {
	error_reporting(E_ALL);
	ini_set('display_errors',TRUE);
	define('ENV\\DEV',TRUE);
	define('ENV\\PROD',FALSE);
}

////////////////////////////////////////////////////////////////////////////////
// composer loader /////////////////////////////////////////////////////////////

require(sprintf(
	'%s/vendor/autoload.php',
	ProjectRoot
));

////////////////////////////////////////////////////////////////////////////////
// application settings ////////////////////////////////////////////////////////

require(sprintf(
	'%s/conf/atlantis.conf.php',
	ProjectRoot
));

(function(){
	$Filename = sprintf(
		'%s/conf/database.conf.php',
		ProjectRoot
	);

	if(!file_exists($Filename))
	throw new Exception('No database configuration.');

	require($Filename);
	return;
})();

(function(){
	$Filename = sprintf(
		'%s/conf/private.conf.php',
		ProjectRoot
	);

	if(!file_exists($Filename))
	throw new Exception('No private configuration.');

	require($Filename);
	return;
})();

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

new Nether\Cache;
