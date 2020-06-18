<?php

namespace Routes\Api\V1;

use
\Atlantis as Atlantis,
\Nether as Nether;

class User
extends Atlantis\Site\ProtectedAPI {

	/**
	 * @input ?Int OptAdult
	 */

	final public function
	EntityPatch():
	Void {
	/*//
	@date 2020-06-18
	//*/

		$Dataset = [];
		$Fields = new Nether\Input\Filter($this->Post->Fields);

		$Fields
		->OptAdult('Atlantis\Util\Filters::NumberValidRange',[0,2,0]);

		////////

		if($Fields->Exists('OptAdult'))
		$Dataset['OptAdult'] = $Fields->OptAdult;

		////////

		if(!count($Dataset))
		$this->Quit(0,'zzz');

		($this->User)
		->Update($Dataset);

		$this
		->SetLocation($this->User->URL)
		->SetPayload($Dataset);

		return;
	}

}
