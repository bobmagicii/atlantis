<?php

namespace Atlantis\Site;
use \Atlantis as Atlantis;
use \Nether   as Nether;

class PublicWeb {

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	public
	$Get     = NULL,
	$Post    = NULL,
	$Router  = NULL,
	$Surface = NULL,
	$User    = NULL;

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	public function
	__construct() {

		$this->Get = new Nether\Input\Filter($_GET);
		$this->Post = new Nether\Input\Filter($_POST);
		$this->Router = Nether\Stash::Get('Router');
		$this->Surface = new Nether\Surface;
		$this->User = Nether\Stash::Get('User');

		return;
	}

}
