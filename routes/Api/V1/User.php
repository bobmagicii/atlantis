<?php

namespace Routes\Api\V1;

use
\Atlantis as Atlantis,
\Nether as Nether;

class User
extends Atlantis\Site\ProtectedAPI {

	/**
	 * @input ?Int OptAdult
	 */

	final public function
	EntityPatch():
	Void {
	/*//
	@date 2020-06-18
	//*/

		$Dataset = [];
		$Fields = new Nether\Input\Filter($this->Post->Fields);

		$Fields
		->OptAdult('Atlantis\Util\Filters::NumberValidRange',[0,2,0])
		->OptAllowSeen('Atlantis\Util\Filters::NumberValidRange',[0,1,0]);

		////////

		if($Fields->Exists('OptAdult'))
		$Dataset['OptAdult'] = $Fields->OptAdult;

		if($Fields->Exists('OptAllowSeen'))
		$Dataset['OptAllowSeen'] = $Fields->OptAllowSeen;

		if($Fields->Exists('RemoveImageHeader') && (Int)$Fields->RemoveImageHeader) {
			$Dataset['ImageHeaderID'] = NULL;
		}

		if($Fields->Exists('RemoveImageIcon') && (Int)$Fields->RemoveImageIcon) {
			$Dataset['ImageIconID'] = NULL;
		}

		////////

		if(!count($Dataset))
		$this->Quit(0,'zzz');

		($this->User)
		->Update($Dataset);

		if(array_key_exists('ImageIconID',$Dataset) && $Dataset['ImageIconID'] === NULL)
		$Dataset['ImageIconURL'] = Nether\Option::Get('Atlantis.Blog.DefaultImageIconURL');

		if(array_key_exists('ImageHeaderID',$Dataset) && $Dataset['ImageHeaderID'] === NULL)
		$Dataset['ImageHeaderURL'] = Nether\Option::Get('Atlantis.Blog.DefaultImageHeaderURL');

		$this
		->SetLocation($this->User->URL)
		->SetPayload($Dataset);

		return;
	}


	final public function
	IconPost():
	Void {
	/*//
	@date 2020-09-21
	//*/

		if(!$this->Post->ID) {
			// this is usually actually caused by file uploads being too large
			// so php did not even parse the request.
			$this->Quit(4,'upload may have been too large');
		}

		$Uploads = NULL;

		////////

		$Uploads = Atlantis\Prototype\UploadImage::HandlePostImage(
			$this->User,
			$this->Storage,
			"-user-icon"
		);

		if(!count($Uploads->Success))
		$this->Quit(3,'no images successfully uploaded.');

		////////

		$this->User->Update([
			'ImageIconID' => $Uploads->Success[0]->ID
		]);

		$this->SetPayload([
			'ImageID'  => $this->User->ImageIconID,
			'ImageURL' => $Uploads->Success[0]->GetURL('th')
		]);

		return;
	}

	/**
	 * @info Upload an image to be this blog's header graphic
	 * @input Int ID
	 * @input File Image
	 * @error 1 blog not found
	 * @error 2 user not blog manager
	 * @error 3 no image upload
	 * @error 4 upload too large
	 */

	final public function
	HeaderPost():
	Void {
	/*//
	@date 2020-09-21
	//*/

		if(!$this->Post->ID) {
			// this is usually actually caused by file uploads being too large
			// so php did not even parse the request.
			$this->Quit(4,'upload may have been too large');
		}

		$Uploads = NULL;

		////////

		$Uploads = Atlantis\Prototype\UploadImage::HandlePostImage(
			$this->User,
			$this->Storage,
			"-user-header"
		);

		if(!count($Uploads->Success)) {
			$this->SetPayload($Uploads->Fail);
			$this->Quit(3,'no images successfully uploaded.');
		}

		////////

		$this->User->Update([
			'ImageHeaderID' => $Uploads->Success[0]->ID
		]);

		$this->SetPayload([
			'ImageID'  => $this->User->ImageHeaderID,
			'ImageURL' => $Uploads->Success[0]->GetURL('lg')
		]);

		return;
	}

}
