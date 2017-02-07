<?php

define('ProjectRoot',dirname(__FILE__,2));

////////////////////////////////////////////////////////////////////////////////
// composer loader /////////////////////////////////////////////////////////////

require(sprintf(
	'%s/vendor/autoload.php',
	ProjectRoot
));

////////////////////////////////////////////////////////////////////////////////
// application settings ////////////////////////////////////////////////////////

(function(){
	$Filename = sprintf(
		'%s/conf/database.conf.php',
		ProjectRoot
	);

	if(!file_exists($Filename))
	throw new Exception('No database configuration.');

	require($Filename);
})();

require(sprintf(
	'%s/conf/atlantis.conf.php',
	ProjectRoot
));
