<?php

namespace Routes;
use \Routes    as Routes;
use \Atlantis  as Atlantis;
use \Nether    as Nether;
use \ReCaptcha as ReCaptcha;

use \Atlantis\Site\Error\Inline as InlineError;

class Invite
extends Atlantis\Site\PublicWeb {

	public function
	Index():
	Void {

		if($this->Post->Action)
		$this->HandleJoin();

		$this->Surface->Area('join/invite');
		return;
	}

	protected function
	HandleJoin():
	Void {


		return;
	}

}
