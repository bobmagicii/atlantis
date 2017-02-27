<?php

namespace Atlantis\Util;

// https://twitter.com/bobmagicii/status/825141051996389377

class Filters {
/*//
this class is a static housing for all the reusable methods we will have for
doing things like validating and sanitising input. unless stated otherwise all
methods here are safe for direct use or use as callback filtering.
//*/

	static public function
	NumberLimit25($Val):
	Int {
	/*//
	@date 2017-02-27
	make sure the specified value is within the range of 1 to 25, and if not
	force it to the max allowed.
	//*/

		if(!is_numeric($Val) || $Val < 1 || $Val > 25)
		return 25;

		return (Int)$Val;
	}

	static public function
	PageNumber($Val):
	Int {
	/*//
	@date 2017-02-27
	make sure the specified value makes sense for a page number, and if not
	force it to a reasonable value.
	//*/

		if(!is_numeric($Val) || $Val < 1)
		return 1;

		return (Int)$Val;
	}

	static public function
	RouteSafeAlias($Val):
	String {
	/*//
	@date 2017-02-27
	transform the given input to be safe for routing based on the rules i
	want to see for generated urls.
	//*/

		return strtolower(str_replace(' ','-',preg_replace(
			'/[^a-z0-9\x20]/i', '',
			$Val
		)));
	}

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
