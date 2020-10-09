<?php

namespace Atlantis\Struct\EditorJS;

use Nether;

class Validator
extends Nether\Object\Mapped {
/*//
@date 2020-10-09
intended to recieve and return a blob of data that we would have expected to see
from editor.js - and if someone gave us garbage this should throw it away.
//*/

	protected static
	$PropertyMap = [
		'type'   => 'type',
		'time'   => 'time:int',
		'blocks' => 'blocks'
	];

	public function
	__Construct($Input) {

		if(is_string($Input))
		$Input = json_decode($Input);

		if(!is_object($Input) && !is_array($Input))
		$Input = [];

		parent::__Construct($Input);
		return;
	}

	public function
	__ToString():
	String {

		return json_encode($this);
	}

	protected function
	OnReady():
	Void {

		if(!is_array($this->blocks))
		$this->blocks = [];

		return;
	}

}
