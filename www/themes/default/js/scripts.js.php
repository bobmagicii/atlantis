<?php

error_reporting(E_ALL);
ini_set('display_errors',TRUE);
define('ProjectAutoloadOnly',TRUE);

require(sprintf(
	'%s/conf/start.php',
	dirname(__FILE__,5)
));

$Project = Nether\OneScript\Project::FromFile(sprintf(
	'%s/scripts.js.json',
	dirname(__FILE__)
));

$Project->Print = TRUE;
$Project->Build();
