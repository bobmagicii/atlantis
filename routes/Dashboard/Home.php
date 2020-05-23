<?php

namespace Routes\Dashboard;

use \Atlantis as Atlantis;

class Home
extends Atlantis\Site\ProtectedWeb {

	public function
	Index():
	Void {

		($this->Surface)
		->Set('Dashboard.Blogs',$this->User->GetBlogs())
		->Area('dashboard/home');

		return;
	}

}
