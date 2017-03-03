<?php

namespace Atlantis\Util;
use \Atlantis as Atlantis;
use \artem_c  as artem_c;

class ZenHTML
extends artem_c\emmet\Emmet {
/*//
wrap the zen coder library into a namespace that wont be annoying to type and
do some wrapping to make it a little nicer to use.
//*/

	public function
	__construct(String $String) {
	/*//
	wrap construction to cut off white space from the string that has been
	found to cause the decoder to explode.
	//*/

		parent::__construct(trim(preg_replace(
			"/[\t\n]/",'',
			$String
		)));

		return;
	}

}
