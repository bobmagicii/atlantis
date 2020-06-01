<?php

namespace Routes\Dashboard;

use \Atlantis as Atlantis;

class Blog
extends Atlantis\Site\ProtectedWeb {

	public function
	Create():
	Void {

		$this
		->Set('Page.Title','Create New Blog')
		->Area('dashboard/blog/create');

		return;
	}

}
