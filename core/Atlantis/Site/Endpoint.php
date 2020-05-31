<?php

namespace Atlantis\Site;

use \Atlantis as Atlantis;
use \Nether as Nether;

use \Exception as Exception;

class Endpoint {
/*//
@date 2020-05-30
//*/

	static protected
	Array $Storage = [];

	static public function
	Register():
	Void {
	/*//
	@date 2020-05-30
	//*/

		$Args = func_get_args();

		if(count($Args) === 1)
		static::RegisterMany(...$Args);

		elseif(count($Args) === 2)
		static::RegisterSingle(...$Args);

		return;
	}

	static protected function
	RegisterSingle(String $Key, String $Val):
	Void {
	/*//
	@date 2020-05-30
	//*/

		static::$Storage[$Key] = $Val;
		return;
	}

	static protected function
	RegisterMany(Array $Input):
	Void {
	/*//
	@date 2020-05-30
	//*/

		$Key = NULL;
		$Val = NULL;

		foreach($Input as $Key => $Val)
		static::RegisterSingle($Key,$Val);

		return;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	protected
	Array $Tokens;

	protected
	String $Format;

	protected
	?Array $Data;

	public function
	__Construct(String $Format, ?Array $Data=NULL) {
	/*//
	@date 2020-05-30
	//*/

		$Match = NULL;
		$Tokens = NULL;

		$this->Format = $Format;
		$this->Data = $Data;

		preg_match_all('/{{([a-zA-Z0-9]+)}}/',$Format,$Match);
		$this->Tokens = $Match[1];

		return;
	}

	public function
	__ToString():
	String {

		return $this->Compile();
	}

	public function
	Compile():
	String {

		$Token = NULL;
		$Result = $this->Format;

		foreach($this->Tokens as $Token)
		if(is_array($this->Data) && array_key_exists($Token,$this->Data))
		$Result = str_replace(
			sprintf('{{%s}}',$Token),
			$this->Data[$Token],
			$Result
		);

		return $Result;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	static public function
	Get(String $Key, ?Array $Data=NULL):
	?self {
	/*//
	@date 2020-05-30
	//*/

		if(!array_key_exists($Key,static::$Storage))
		return NULL;

		return new static(
			static::$Storage[$Key],
			$Data
		);
	}

}
