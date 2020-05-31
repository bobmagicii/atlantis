<?php

namespace Routes;
use \Routes    as Routes;
use \Atlantis  as Atlantis;
use \Nether    as Nether;
use \ReCaptcha as ReCaptcha;

use \Atlantis\Site\Error\Inline as InlineError;

class Join
extends Atlantis\Site\PublicWeb {

	public function
	Index():
	Void {

		if($this->Post->Action)
		$this->HandleJoin();

		$this->Surface->Area('join/index');
		return;
	}

	protected function
	HandleJoin():
	Void {

		// check if they can fool google into believing they are real.

		$Human = new ReCaptcha\ReCaptcha(Nether\Option::Get('recaptcha-secret'));
		$CVal = $this->Post->{'g-recaptcha-response'};
		$IP = $_SERVER['REMOTE_ADDR'];

		if(!$Human->Verify($CVal,$IP)->IsSuccess()) {
			$this->Errors->Push(new InlineError([
				'Message' => 'Failed to validate as human.'
			]));
			return;
		}

		// then see if they were able to figure out how to fill in a form.
		// the user auth class will kick out various exceptions it does
		// all the checking we need atm.

		try {
			$User = Atlantis\User::Insert([
				'Alias'     => $this->Post->Alias,
				'Email'     => $this->Post->Email,
				'Password1' => $this->Post->Password1,
				'Password2' => $this->Post->Password2
			]);
		}

		catch(Nether\Auth\Error $Doh) {
			$this->Errors->Push(new InlineError([
				'Message' => $Doh->GetMessage()
			]));
			return;
		}

		// huzzah for you.

		$this->LogInfo('User Joined',[
			'ID'    => $User->ID,
			'Alias' => $User->Alias
		]);

		Atlantis\User::LaunchSession($User);
		$this->Goto('/');
		return;
	}

}
