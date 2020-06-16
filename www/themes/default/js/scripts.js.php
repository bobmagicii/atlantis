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

ob_start();
$Project->Build();
ob_get_clean();

$Cache = new Atlantis\Util\FileCacheHandler([
	'File'        => $Project->OutputFile,
	'ContentType' => $Project->ContentType
]);

$Cache->Send();

