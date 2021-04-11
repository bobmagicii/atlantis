<?php

namespace Atlantis\Util;

class Emote {

	const
	Angry = 'angry';

	protected static array
	$E = [
		self::Angry => [
			'(　ﾟДﾟ)＜!!',
			'ლ(ಠ_ಠლ)',
			'(」｡≧□≦)」',
			'(눈_눈)',
			'ヾ(｀⌒´メ)ノ″'
		]
	];

	static public function
	Random(string $E):
	?string {
	/*//
	@date 2021-04-11
	//*/

		if(array_key_exists($E,self::$E))
		return self::$E[$E][rand(0,count(self::$E[$E])-1)];

		return NULL;
	}

}
