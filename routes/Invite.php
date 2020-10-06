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

		$this->Surface->Area('join/invite');
		return;
	}

}
