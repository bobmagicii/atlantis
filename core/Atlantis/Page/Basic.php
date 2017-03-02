<?php

namespace Atlantis\Page;
use \Atlantis as Atlantis;

class Basic
extends Atlantis\Page {

	protected
	$Area = 'page/basic';

	protected function
	OnConstruct():
	Void {

		$this->Main = new Atlantis\Datastore;
		return;
	}

}
