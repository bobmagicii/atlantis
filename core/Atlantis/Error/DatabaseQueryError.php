<?php

namespace Atlantis\Error;

use \Nether as Nether;

use \Exception as Exception;

class DatabaseQueryError
extends Exception {

	public function
	__Construct(?Nether\Database\Result $Result=NULL) {

		if($Result instanceof Nether\Database\Result)
		parent::__Construct($Result->GetError());
		else
		parent::__Construct('Database Query Error');

		return;
	}

}
