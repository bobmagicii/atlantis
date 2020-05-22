<?php

namespace Routes\Api\V1;

use \Atlantis as Atlantis;

class Test
extends Atlantis\Site\PublicAPI {

	public function
	OkGet():
	Void {

		$this
		->SetPayload([
			'Value' => TRUE
		]);

		return;
	}

	public function
	BadGet():
	Void {

		$this
		->Quit(1,'Bad');

		return;
	}

	public function
	IndeedGet():
	Void {

		$this
		->SetPayload('Indeed');

		return;
	}

}
