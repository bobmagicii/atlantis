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

	protected function
	OnReady($Raw):
	Void {

		if(!is_array($this->Blocks))
		$this->Blocks = [];

		$this->OnReady_DigestBlocks();

		return;
	}

	protected function
	OnReady_DigestBlocks():
	Void {

		$Block = NULL;
		$Class = NULL;

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
	FromString(String $Input):
	self {

		$Object = json_decode($Input);

		if(!is_object($Object))
		throw new Exception('Error parsing content');

		return new static($Object);
	}

}
