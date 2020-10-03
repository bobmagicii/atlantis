<?php

namespace Routes\Dashboard;

use \Atlantis as Atlantis;

class Account
extends Atlantis\Site\ProtectedWeb {

	public function
	Settings():
	Void {

		$this
		->Set('Page.Title','Account Settings')
		->Area('dashboard/account/settings');

		return;
	}

	public function
	Password():
	Void {

		$this
		->Set('Page.Title','Change Password')
		->Area('dashboard/account/password');

		return;
	}


}
