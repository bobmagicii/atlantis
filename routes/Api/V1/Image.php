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

		$Output = Atlantis\Prototype\UploadImage::HandlePostImage(
			$this->User,
			$this->Storage
		);

		$this->SetPayload($Output);
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

		$Images = $this->Post->ID;

		if(!is_array($Images))
		$Images = [$Images];

		foreach($Images as $ImageID) {
			$ImageID = (Int)$ImageID;
			if(!$ImageID) continue;

			$Image = Atlantis\Prototype\UploadImage::GetByID($ImageID);
			if(!$Image->IsUserOwner($this->User)) continue;

			$Image->Drop();
		}

		$this->User->UpdateBytesImages();
		return;
	}

	/**
	 *
	 */

	final public function
	EntityList():
	Void {

		($this->Post)
		->Page('Atlantis\\Util\\Filters::PageNumber')
		->CheckBlogs('Atlantis\\Util\\Filters::TypeBool')
		->CheckBlogPosts('Atlantis\\Util\\Filters::TypeBool')
		->CheckUser(function($Val) {
			if(Atlantis\Util\Filters::TypeBool($Val))
			if($this->User)
			return $this->User->ID;

			return NULL;
		});

		$Result = Atlantis\Prototype\UploadImage::Find([
			'UserID'         => $this->User->ID,
			'Page'           => $this->Post->Page,
			'Limit'          => 0,
			'CheckBlogs'     => $this->Post->CheckBlogs,
			'CheckBlogPosts' => $this->Post->CheckBlogPosts,
			'CheckUser'      => $this->Post->CheckUser
		]);

		$this->SetPayload([
			'Page'              => $Result->Page,
			'PageCount'         => $Result->GetPageCount(),
			'Limit'             => $Result->Limit,
			'Count'             => $Result->Count,
			'Total'             => $Result->Total,
			'UserBytes'         => $this->User->BytesImages,
			'UserBytesReadable' => Atlantis\Util::BytesReadable($this->User->BytesImages),
			'Payload'           => $Result->Payload->GetData()
		]);

		return;
	}

}
