<?php

namespace Routes\Api\V1;

use Atlantis;
use Nether;

use Throwable;
use Atlantis\Prototype\User as UserEntity;

class User
extends Atlantis\Site\ProtectedAPI {

	protected function
	OnReady():
	void {
	/*//
	@date 2021-04-12
	//*/

		($this->Post)
		->ID(Atlantis\Util\Filters::NullableIntCallable());

		return;
	}

	/**
	 * @input ?Int OptAdult
	 */

	final public function
	EntityPatch():
	void {
	/*//
	@date 2020-06-18
	//*/

		$Dataset = [];
		$Fields = new Nether\Input\Filter($this->Post->Fields);

		$Fields
		->ID(Atlantis\Util\Filters::NullableIntCallable())
		->Location(Atlantis\Util\Filters::EncodedTextCallable())
		->Details(Atlantis\Util\Filters::EncodedTextCallable())
		->Email(Atlantis\Util\Filters::EmailCallable())
		->OptAdult(Atlantis\Util\Filters::NumberValidRangeCallable(),[0,2,0])
		->OptAllowSeen(Atlantis\Util\Filters::NumberValidRangeCallable(),[0,1,0]);

		////////

		$Entity = $this->User;

		if($this->User->IsAdmin()) {
			if($Fields->ID !== NULL) // admins can specify who.
			$Entity = Atlantis\Prototype\User::GetByID($Fields->ID,FALSE);
		}

		if(!$Entity)
		$this->Quit(1);

		////////

		if($Fields->Exists('Email'))
		$Dataset['Email'] = $Fields->Email;

		if($Fields->Exists('Location'))
		$Dataset['Location'] = $Fields->Location;

		if($Fields->Exists('Details'))
		$Dataset['Details'] = $Fields->Details;

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

		if($Fields->Exists('Password0') && $Fields->Exists('Password1') && $Fields->Exists('Password2')) {

			if(!$Entity->IsValidPassword($Fields->Password0))
			$this->Quit(101,'Invalid Old Password');

			try {
				Atlantis\Prototype\User::Insert_ValidatePassword($Fields);
				$Dataset['PHash'] = $Fields->PHash;
				$Dataset['PSand'] = $Fields->PSand;
			}

			catch(Throwable $Error) {
				$this->Quit(100,$Error->GetMessage());
			}
		}

		////////

		if(!count($Dataset))
		$this->Quit(0,'zzz');

		($Entity)
		->Update($Dataset);

		////////

		if(array_key_exists('ImageIconID',$Dataset) && $Dataset['ImageIconID'] === NULL)
		$Dataset['ImageIconURL'] = Nether\Option::Get('Atlantis.Blog.DefaultImageIconURL');

		if(array_key_exists('ImageHeaderID',$Dataset) && $Dataset['ImageHeaderID'] === NULL)
		$Dataset['ImageHeaderURL'] = Nether\Option::Get('Atlantis.Blog.DefaultImageHeaderURL');

		if(array_key_exists('PHash',$Dataset)) {
			if($Entity->ID === $this->User->ID)
			Atlantis\Prototype\User::LaunchSession($Entity);

			unset($Dataset['PHash'],$Dataset['PSand']);
		}

		////////

		$this
		->SetLocation($Entity->URL)
		->SetPayload($Dataset);

		return;
	}

	final public function
	IconPost():
	void {
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
	void {
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

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	#[Atlantis\Meta\Parameter('ID','int')]
	#[Atlantis\Meta\Error(1,'profile not found')]
	#[Atlantis\Meta\Error(2,'stop touching yourself')]
	final public function
	EntityOvershadow():
	void {
	/*//
	@date 2021-04-12
	yo danny fenton he was just 14 when his parents built a very strange
	machine designed to view a world unseen
	//*/

		$this->RequireAdminSession();

		$Entity = (
			$this->Post->ID?
			UserEntity::GetByID($this->Post->ID,FALSE):NULL
		);

		if(!$Entity)
		$this->Quit(1);

		if($Entity->ID === $this->User->ID)
		$this->Quit(2);

		UserEntity::LaunchSession($Entity,TRUE);
		$this->SetMessage('going ghost');

		return;
	}

	#[Atlantis\Meta\Parameter('ID','int')]
	#[Atlantis\Meta\Error(1,'profile not found')]
	#[Atlantis\Meta\Error(2,'stop touching yourself')]
	final public function
	EntityBan():
	void {
	/*//
	@date 2021-04-12
	yo danny fenton he was just 14 when his parents built a very strange
	machine designed to view a world unseen
	//*/

		$this->RequireAdminSession();

		$Entity = (
			$this->Post->ID?
			UserEntity::GetByID($this->Post->ID,FALSE):NULL
		);

		if(!$Entity)
		$this->Quit(1);

		if($Entity->ID === $this->User->ID)
		$this->Quit(2);

		////////

		$Entity->Update([
			'TimeBanned' => time()
		]);

		return;
	}

	#[Atlantis\Meta\Parameter('ID','int')]
	#[Atlantis\Meta\Error(1,'profile not found')]
	#[Atlantis\Meta\Error(2,'stop touching yourself')]
	final public function
	EntityUnban():
	void {
	/*//
	@date 2021-04-12
	yo danny fenton he was just 14 when his parents built a very strange
	machine designed to view a world unseen
	//*/

		$this->RequireAdminSession();

		$Entity = (
			$this->Post->ID?
			UserEntity::GetByID($this->Post->ID,FALSE):NULL
		);

		if(!$Entity)
		$this->Quit(1);

		if($Entity->ID === $this->User->ID)
		$this->Quit(2);

		////////

		$Entity->Update([
			'TimeBanned' => 0
		]);

		return;
	}

	#[Atlantis\Meta\Parameter('ID','int')]
	#[Atlantis\Meta\Error(1,'profile not found')]
	#[Atlantis\Meta\Error(2,'stop touching yourself')]
	final public function
	EntityDelete():
	void {
	/*//
	@date 2021-04-12
	yo danny fenton he was just 14 when his parents built a very strange
	machine designed to view a world unseen
	//*/

		$this->RequireAdminSession();

		$Entity = (
			$this->Post->ID?
			UserEntity::GetByID($this->Post->ID,FALSE):NULL
		);

		if(!$Entity)
		$this->Quit(1);

		if($Entity->ID === $this->User->ID)
		$this->Quit(2);

		////////

		$Entity->Drop();
		return;
	}

}
