<?php

namespace Routes;
use \Routes   as Routes;
use \Atlantis as Atlantis;
use \Nether   as Nether;

use \Atlantis\Site\Error\Inline as Error;

class Login
extends Atlantis\Site\PublicWeb {

	public function
	Index():
	Void {

		($this->Get)
		->Goto('Atlantis\\Util\\Filters::Base64Decode');

		if($this->Post->Account && $this->Post->Password)
		$this->HandleLogin();

		$this->Surface->Area('login/index');
		return;
	}

	public function
	Destroy():
	Void {

		Atlantis\User::DestroySession();
		$this->Goto('/');
		return;
	}

	protected function
	HandleLogin():
	Void {

		$User = Atlantis\User::Get($this->Post->Account);
		$Goto = $this->Get->Goto ?? '/';

		if(!$User) {
			$this->Errors->Push(new Error([
				'Error'   => 1,
				'Message' => 'Invalid account or password.'
			]));
			return;
		}

		if(!$User->IsValidPassword($this->Post->Password)) {
			$this->Errors->Push(new Error([
				'Error'   => 2,
				'Message' => 'Invalid account or password.'
			]));
			return;
		}

		$this->LogInfo('User Login',[
			'ID'    => $User->ID,
			'Alias' => $User->Alias
		]);

		Atlantis\User::LaunchSession($User);
		$this->Goto($Goto);
		return;
	}

}
