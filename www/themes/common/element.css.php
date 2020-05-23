<?php

require(sprintf(
	'%s/conf/start.php',
	dirname(__FILE__,4)
));

$Project = Nether\OneScript\Project::FromFile(sprintf(
	'%s/element.json',
	dirname(__FILE__)
));

$Project->Print = TRUE;
$Project->Build();
