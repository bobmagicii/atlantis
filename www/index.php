<?php

require(sprintf(
	'%s/conf/start.php',
	dirname(dirname(__FILE__))
));

(new Atlantis\Site\Router)
->Run();
