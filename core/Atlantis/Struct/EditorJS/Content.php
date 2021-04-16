<?php

namespace Atlantis\Struct\EditorJS;

use Atlantis;
use Nether;

use Exception;
use Nether\Object\Datastore;

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

	public array|Datastore
	$Blocks = [];

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	protected function
	OnReady($Raw):
	void {

		$this->OnReady_DigestBlocks();

		return;
	}

	protected function
	OnReady_DigestBlocks():
	void {


		$this->Blocks = new Datastore(array_filter(
			$this->Blocks,
			function($Block){ return is_object($Block) && property_exists($Block,'type'); }
		));

		$this->Blocks
		->Remap(function(object $Block){
			$Class = sprintf(
				'Atlantis\Struct\EditorJS\Blocks\%s',
				Atlantis\Util\Filters::MethodFromAlias($Block->type)
			);

			if(class_exists($Class))
			return new $Class($Block);

			return new Block($Block);
		});

		return;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////


	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	static public function
	FromString(string $Input):
	self {

		$Object = json_decode(json_encode(
			new Atlantis\Struct\EditorJS\Validator($Input)
		));

		return new static($Object);
	}

}
