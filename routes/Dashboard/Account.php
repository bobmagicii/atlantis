<?php

namespace Routes\Dashboard;

use \Atlantis as Atlantis;

class Account
extends Atlantis\Site\ProtectedWeb {

	public function
	Settings():
	Void {

		if($this->HandleUpdateSettings())
		$this->Goto(Atlantis\Site\Endpoint::Get('Atlantis.Dashboard.Home'));

		$this
		->Set('Page.Title','Account Settings')
		->Area('dashboard/account/settings');

		return;
	}

	protected function
	HandleUpdateSettings():
	Bool {

		if($this->Post->Action !== 'update')
		return FALSE;

		($this->User)
		->Update([
			'OptAdult' => (Int)$this->Post->OptAdult
		]);

		return TRUE;
	}


}
