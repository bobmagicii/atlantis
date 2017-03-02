<?php

namespace Atlantis\Page;
use \Atlantis as Atlantis;

class TwoCol1x3
extends Atlantis\Page {

	protected
	$Area = 'page/two-col-1x3';

	protected function
	OnConstruct():
	Void {

		$this->Main = new Atlantis\Datastore;
		$this->Sidebar = new Atlantis\Datastore;
		return;
	}

}
