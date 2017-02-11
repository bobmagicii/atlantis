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

		$Human = new ReCaptcha\ReCaptcha(Nether\Option::Get('recaptcha-secret'));

		// @todo finish recaptcha validation
		// cuz gf is staring at me

		try {
			$User = Nether\Auth\User::Create([
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

		Nether\Auth\User::LaunchSession($User);
		$this->Redirect('/');
		return;
	}

}
