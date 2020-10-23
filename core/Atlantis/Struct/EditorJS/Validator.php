<?php

namespace Atlantis\Struct\EditorJS;

use JsonSerializable;
use Nether;

class Validator
extends Nether\Object\Mapped
implements JsonSerializable {
/*//
@date 2020-10-09
intended to recieve and return a blob of data that we would have expected to see
from editor.js - and if someone gave us garbage this should throw it away and hand
you back at a conforming structure.
//*/

	protected static
	$PropertyMap = [
		'version' => 'Version',
		'time'    => 'Time:int',
		'blocks'  => 'Blocks'
	];

	protected
	$Version;

	protected
	$Time;

	protected
	$Blocks;

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

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

		return json_encode($this->JsonSerialize());
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	protected function
	OnReady():
	Void {

		if(!is_array($this->Blocks))
		$this->Blocks = [];

		return;
	}

	public function
	JsonSerialize():
	Array {

		return [
			'version' => $this->Version,
			'time'    => $this->Time,
			'blocks'  => $this->Blocks
		];
	}

}
