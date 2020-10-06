<?php

namespace Routes\Api\V1;

use
Atlantis;

class Invite
extends Atlantis\Site\PublicAPI {

	public function
	EntityPost():
	Void {
	/*//
	@date 2020-10-05
	//*/

		($this->Post)
		->Email('Atlantis\\Util\\Filters::Email');

		if(!$this->Post->Email)
		$this->Quit(1,'Invalid Email address');

		if(!$this->DidValidateHuman())
		$this->Quit(2,'Failed to validate as human.');

		////////

		$Invite = Atlantis\Prototype\InviteRequest::GetByEmail($this->Post->Email);

		if(!$Invite) {
			$Invite = Atlantis\Prototype\InviteRequest::Insert([
				'Email' => $this->Post->Email
			]);


			$this->LogInfo('Invite Request',[
				'ID'    => $Invite->ID,
				'Email' => $Invite->Email
			]);
		}

		$this->SetPayload([
			'InviteID' => $Invite->ID
		]);

		return;
	}

}
