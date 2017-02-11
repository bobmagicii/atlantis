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
	$User    = NULL,
	$Errors  = NULL;

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	public function
	__construct() {

		$this->Get = new Nether\Input\Filter($_GET);
		$this->Post = new Nether\Input\Filter($_POST);
		$this->Router = Nether\Stash::Get('Router');
		$this->Surface = new Nether\Surface;
		$this->User = Nether\Stash::Get('User');
		$this->Errors = new Nether\Object\Datastore;

		Nether\Ki::Queue(
			'surface-render-scope',
			function(Array &$Scope):
			Void { $Scope['route'] = $this; return; },
			TRUE
		);

		return;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	public function
	Redirect(String $URL, Int $Code=303):
	Void {
	/*//
	@todo actually use the specific code.
	@date 2017-02-11
	//*/

		header("HTTP/1.1 303 See Other");
		header("Location: {$URL}");

		exit(0);
	}

}
