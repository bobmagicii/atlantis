<?php

namespace Atlantis\Struct\EditorJS;

use
Atlantis,
Nether;

use
Exception;

class Content
extends Nether\Object\Mapped {

	protected static
	$PropertyMap = [
		'version' => 'Version',
		'time'    => 'Time:int',
		'blocks'  => 'Blocks'
	];

	public ?string
	$Version = '';

	public ?int
	$Time = 0;

	public array
	$Blocks = [];

	protected function
	OnReady($Raw):
	void {

		$this->OnReady_DigestBlocks();

		return;
	}

	protected function
	OnReady_DigestBlocks():
	void {

		$Block = NULL;
		$Class = NULL;

		$this->Blocks = array_filter(
			$this->Blocks,
			function($Block){ return is_object($Block) && property_exists($Block,'type'); }
		);

		foreach($this->Blocks as &$Block) {
			$Class = sprintf(
				'Atlantis\Struct\EditorJS\Blocks\%s',
				Atlantis\Util\Filters::MethodFromAlias($Block->type)
			);

			if(class_exists($Class))
			$Block = new $Class($Block);
			else
			$Block = new Block($Block);
		}

		return;
	}

	public static function
	FromString(string $Input):
	self {

		$Object = json_decode(json_encode(
			new Atlantis\Struct\EditorJS\Validator($Input)
		));

		return new static($Object);
	}

}
