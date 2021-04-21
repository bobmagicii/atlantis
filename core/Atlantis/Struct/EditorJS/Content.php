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

	public function
	FindPrimaryImageID():
	?int {
	/*//
	@date 2021-04-19
	finds the first image block in this structure that is flagged as the
	primary image and contains a local file image id.
	//*/

		$Block = NULL;

		foreach($this->Blocks as $Block) {
			if($Block instanceof Blocks\Image)
			if($Block->Data->PrimaryImage && $Block->Data->ImageID)
			return $Block->Data->ImageID;
		}

		return NULL;
	}

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
