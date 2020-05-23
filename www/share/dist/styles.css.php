<?php

error_reporting(E_ALL);
ini_set('display_errors',TRUE);

require(sprintf(
	'%s/conf/start.php',
	dirname(__FILE__,4)
));

$Project = Nether\OneScript\Project::FromFile(sprintf(
	'%s/styles.css.json',
	dirname(__FILE__)
));

$Project->Print = TRUE;
$Project->Build();
