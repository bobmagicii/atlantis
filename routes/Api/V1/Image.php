<?php

namespace Routes\Api\V1;

use
\Atlantis as Atlantis,
\Nether as Nether;

use
\Imagick as Imagick,
\Throwable as Throwable;

class Image
extends Atlantis\Site\ProtectedAPI {

	/**
	 * @input ?Int ID
	 * @input ?String UUID
	 */

	final public function
	EntityGet():
	Void {
	/*//
	@error 1 not found
	//*/

		$Upload = NULL;

		////////

		if($this->Get->ID)
		$Upload = Atlantis\Prototype\UploadImage::GetByID((Int)$this->Get->ID);
		elseif($this->Get->UUID)
		$Upload = Atlantis\Prototype\UploadImage::GetByUUID((Int)$this->Get->UUID);

		if(!$Upload)
		$this->Quit(1,'not found');

		////////

		$this->SetPayload($Upload);
		return;
	}

	/**
	 * @input String File
	 */

	final public function
	EntityPost():
	Void {
	/*//
	@error 1 no file found
	@error 2 imagick said it aint a image or something
	@error 3 failure to move to final directory
	@error 4 failure to create database row for file
	//*/

		$Output = Atlantis\Util\UploadImageProcessor::HandlePost(
			$this->User
		);

		$this->SetPayload($Output->Success);
		return;
	}

	/**
	 * @input Int ID
	 * @input ?String Title
	 * @input ?String Alias
	 * @input ?File ImageHeader
	 * @input ?File ImageIcon
	 */

	final public function
	EntityPatch():
	Void {

		return;
	}

	/**
	 * @input Int ID
	 */

	final public function
	EntityDelete():
	Void {

		return;
	}

}
