<?php

require(sprintf(
	'%s/conf/start.php',
	dirname(dirname(__FILE__))
));

try {
	$Router = new Atlantis\Site\Router;
	Nether\Stash::Set('Router',$Router);

	$Router->Run();
}

catch(Throwable $Error) {
	if(Nether\Stash::Has('Surface')) {
		Nether\Stash::Get('Surface')
		->Set('Error',(ENV\DEV)?($Error):(NULL))
		->Area('error/error');
	}
}