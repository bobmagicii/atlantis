<?php

namespace Atlantis\Struct\EditorJS;

use Atlantis;
use Atlantis\Struct\EditorJS;
use Nether;

use JsonSerializable;

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

	public ?string
	$Version = NULL;

	public ?int
	$Time = NULL;

	public ?array
	$Blocks = NULL;

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	public function
	__Construct(string|object|array $Input) {
	/*//
	@date 2021-04-13
	//*/

		if(is_string($Input))
		$Input = json_decode($Input);

		if(!is_object($Input) && !is_array($Input))
		$Input = [];

		parent::__Construct($Input);
		return;
	}

	public function
	__ToString():
	string {
	/*//
	@date 2020-10-09
	//*/

		return json_encode($this->JsonSerialize());
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	protected function
	OnReady():
	void {
	/*//
	@date 2020-10-09
	//*/

		if(!is_array($this->Blocks))
		$this->Blocks = [];

		$this->Blocks = array_filter(
			$this->Blocks,
			(fn($Block)=> is_object($Block) && property_exists($Block,'type'))
		);

		return;
	}

	public function
	JsonSerialize():
	array {
	/*//
	@date 2020-10-09
	//*/

		return $this->ToArray();
	}

	public function
	ToStruct():
	EditorJS\Content {
	/*//
	@date 2021-04-13
	//*/

		return new EditorJS\Content($this->ToArray());
	}

	public function
	ToArray() {
	/*//
	@date 2021-04-13
	//*/

		return [
			'version' => $this->Version,
			'time'    => $this->Time,
			'blocks'  => $this->Blocks
		];
	}

}
