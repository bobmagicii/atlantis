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

		if($this->Post->Account && $this->Post->Password)
		$this->HandleLogin();

		$this->Surface->Area('login/index');
		return;
	}

	public function
	Destroy():
	Void {

		Atlantis\Site\User::DestroySession();
		$this->Redirect('/');
		return;
	}

	protected function
	HandleLogin():
	Void {

		$User = Atlantis\Site\User::Get($this->Post->Account);

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

		Atlantis\Site\User::LaunchSession($User);
		$this->Redirect('/');
		return;
	}

}
