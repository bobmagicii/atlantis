<?php

namespace Routes\Dashboard;

use \Atlantis as Atlantis;

class Home
extends Atlantis\Site\ProtectedWeb {

	public function
	Index():
	Void {

		$this
		->Set('Page.Title','Dashboard')
		->Area('dashboard/home',[
			'Blogs' => $this->User->GetBlogs()
		]);

		return;
	}

}
