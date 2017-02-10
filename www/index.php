<?php

require(sprintf(
	'%s/conf/start.php',
	dirname(dirname(__FILE__))
));

$Router = new Atlantis\Site\Router;
Nether\Stash::Set('Router',$Router);

$Router->Run();
