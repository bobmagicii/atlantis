<?php

namespace Atlantis\Util;

class Filters {

	static public function
	SafeForHTML($Val):
	String {
	/*//
	@date 2017-02-11
	make sure strings are safe for html, this will be mostly used by printers
	within templates.
	//*/

		return htmlentities($Val);
	}

}
