<?php

namespace Atlantis;

use
\Atlantis as Atlantis,
\Nether as Nether,
\Monolog as Monolog;

class Logger
extends Monolog\Logger {

	public function
	__Construct(String $Name, String $Filename, Int $LogLevel) {
		parent::__construct($Name);

		$this->PushHandler(new Monolog\Handler\StreamHandler(
			$Filename,
			$LogLevel
		));

		return;
	}

}
