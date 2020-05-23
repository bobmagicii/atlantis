<?php

namespace Atlantis\Site;
use \Atlantis as Atlantis;
use \Nether   as Nether;

class PublicWeb {

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	public
	Nether\Input\Filter $Get;

	public
	Nether\Input\Filter $Post;

	public
	Atlantis\Site\Router $Router;

	public
	Nether\Surface $Surface;

	public
	Nether\Object\Datastore $Errors;

	public
	?Atlantis\User $User;

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
	GetEncodedURL():
	String {
	/*//
	@date 2020-05-22
	get the current url encoded to be safe for url pararms.
	//*/

		return Atlantis\Util\Filters::Base64Encode($this->Router->GetURL());
	}

	public function
	Goto(String $URL, Int $Code=303):
	Void {
	/*//
	@todo actually use the specific code.
	@date 2020-05-22
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
