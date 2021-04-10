<?php

namespace Atlantis\Util;

use Atlantis;

// https://twitter.com/bobmagicii/status/825141051996389377

class Filters {
/*//
this class is a static housing for all the reusable methods we will have for
doing things like validating and sanitising input. unless stated otherwise all
methods here are safe for direct use or use as callback filtering.
//*/

	static public function
	__CallStatic(string $Fn, array $Argv):
	mixed {
	/*//
	@date 2021-04-10
	//*/

		if(str_ends_with($Fn,'Callable'))
		return static::__CallStatic_Callable(
			substr($Fn,0,-8),
			$Argv
		);

		return NULL;
	}

	static protected function
	__CallStatic_Callable(string $Fn, array $Argv):
	mixed {
	/*//
	@date 2021-04-10
	//*/

		return (fn(...$Input)=> static::{$Fn}(...$Input));
	}

	static public function
	TypeBool(mixed $Val):
	Bool {
	/*//
	@date 2017-12-15
	//*/

		if(is_bool($Val))
		return (Bool)$Val;

		switch(strtolower((String)$Val)) {
			case 'true': case '1':
			case 'yes': case 'y':
			return TRUE;

			case 'false': case '0':
			case 'no': case 'n':
			return FALSE;
		}

		return FALSE;
	}

	static public function
	TypeInt(mixed $Val):
	Int {
	/*//
	@date 2017-12-15
	//*/

		return (Int)$Val;
	}

	static public function
	TypeFloat(mixed $Val):
	Float {
	/*//
	@date 2017-12-15
	//*/

		return (Float)$Val;
	}

	static public function
	TypeString(mixed $Val):
	String {
	/*//
	@date 2017-12-15
	//*/

		return (String)$Val;
	}

	////////////////////////////////
	////////////////////////////////

	static public function
	NumberValidRange(mixed $Val, String $Var, Int $Min=0, Int $Max=0, Int $Def=0):
	Int {
	/*//
	@date 2017-12-15
	//*/

		return filter_var($Val,FILTER_VALIDATE_INT,['options'=>[
			'min_range' => $Min,
			'max_range' => $Max,
			'default'   => $Def
		]]);
	}

	static public function
	NumberLimit25(mixed $Val):
	Int {
	/*//
	@date 2017-02-27
	make sure the specified value is within the range of 0 to 25, and if not
	force it to the max allowed.
	//*/

		if(!is_numeric($Val) || $Val < 0 || $Val > 25)
		return 25;

		return (Int)$Val;
	}

	static public function
	PageNumber(mixed $Val):
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
	TrimmedText(mixed $Val):
	String {
	/*//
	@date 2020-06-01
	//*/

		return trim($Val);
	}

	static public function
	EncodedText(mixed $Val):
	String {
	/*//
	@date 2020-06-01
	//*/

		return htmlspecialchars(trim($Val));
	}

	static public function
	StrippedText(mixed $Val):
	String {
	/*//
	@date 2020-06-01
	//*/

		return strip_tags(trim($Val));
	}

	static public function
	RouteSafeAlias(mixed $Val):
	String {
	/*//
	@date 2017-02-27
	transform the given input to be safe for routing based on the rules i
	want to see for generated urls.
	//*/

		// format the general alias.

		$Output = strtolower(str_replace(' ','-',preg_replace(
			'/[^a-z0-9\x20\-]/i', '',
			$Val
		)));

		// debounce any dashes.

		$Output = preg_replace(
			'/-{2,}/', '-',
			$Output
		);

		return $Output;
	}

	static public function
	MethodFromAlias(mixed $Val):
	String {
	/*//
	@date 2020-05-22
	transform the given input into a method name we want to call.
	//*/

		$Output = strtolower(preg_replace(
			'/[^a-zA-Z0-9-]/', '',
			$Val
		));

		$Output = ucwords(str_replace(
			'-', ' ',
			$Output
		));

		$Output = str_replace(
			' ',
			'',
			$Output
		);

		return $Output;
	}

	static public function
	SafeForHTML(mixed $Val):
	String {
	/*//
	@date 2017-02-11
	make sure strings are safe for html, this will be mostly used by printers
	within templates.
	//*/

		return htmlentities($Val);
	}

	static public function
	Email(mixed $Val):
	?String {
	/*//
	@date 2020-10-05
	//*/

		$Valid = filter_var(
			trim($Val),
			FILTER_VALIDATE_EMAIL,
			['flags'=>FILTER_FLAG_EMAIL_UNICODE]
		);

		return $Valid ?: NULL;
	}

	static public function
	ObjectAsJSON(mixed $Val):
	?String {

		$Output = json_decode($Val);

		if(!is_object($Output))
		return NULL;

		return json_encode($Output);
	}

	static public function
	ValidatorForEditorJS(mixed $Val):
	?Object {

		return new Atlantis\Struct\EditorJS\Validator($Val);
	}

	////////////////////////////////
	////////////////////////////////

	static public function
	Base64Encode(?String $Val):
	?String {
	/*//
	encode into base64 safe for urls.
	https://en.wikipedia.org/wiki/Base64#URL_applications
	//*/

		if(!$Val)
		return NULL;

		return str_replace(
			['+','/'],
			['-','_'],
			rtrim(base64_encode($Val),'=')
		);
	}

	static public function
	Base64Decode(?String $Val):
	?String {
	/*//
	decode from url safe base64.
	https://en.wikipedia.org/wiki/Base64#URL_applications
	//*/

		if(!$Val)
		return NULL;

		return base64_decode(str_replace(
			['-','_'],
			['+','/'],
			$Val
		));
	}

}
