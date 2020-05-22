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
	__Construct(Atlantis\Site\Router $Router) {

		$this->Router = $Router;
		$this->Get = new Nether\Input\Filter($_GET);
		$this->Post = new Nether\Input\Filter($_POST);
		$this->Router = Nether\Stash::Get('Router');
		$this->Surface = new Nether\Surface;
		$this->User = Atlantis\User::FetchSession();
		$this->Errors = new Nether\Object\Datastore;

		Nether\Ki::Queue(
			'surface-render-scope',
			function(Array &$Scope):
			Void {
				$Scope['Router'] = $this->Router;
				$Scope['Route'] = $this;
				$Scope['Surface'] = $this->Surface;
				$Scope['User'] = $this->User;
				return;
			},
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

		$this->Quit();
		return;
	}

	public function
	Quit(Int $ErrNum=0):
	Void {
	/*//
	@date 2020-05-22
	so long and thanks for all the fish.
	//*/

		exit($ErrNum=0);
		return;
	}

}
