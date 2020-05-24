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

		$this->Push([
			'Router'  => $this->Router,
			'Route'   => $this,
			'Surface' => $this->Surface,
			'User'    => $this->User
		]);

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

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	public function
	Push(Array $Items):
	self {
	/*//
	@date 2020-05-24
	push items into the surface scope array.
	//*/

		Nether\Ki::Queue(
			'surface-render-scope',
			function(Array &$Scope) use ($Items):
			Void {
				$Key = NULL;
				$Val = NULL;

				foreach($Items as $Key => $Val)
				$Scope[$Key] = $Val;

				return;
			},
			TRUE
		);

		return $this;
	}

	public function
	Set(String $Key, $Value):
	self {
	/*//
	@date 2020-05-24
	a chainable call to the surface set.
	//*/

		($this->Surface)
		->Set($Key,$Value);

		return $this;
	}


	public function
	Area(String $Area):
	self {
	/*//
	@date 2020-05-24
	a chainable call to the surface area.
	//*/

		($this->Surface)
		->Area($Area);

		return $this;
	}

	public function
	Goto(String $URL, Int $Code=303):
	Void {
	/*//
	@todo actually use the specific code.
	@date 2020-05-22
	//*/

		http_response_code($Code);
		header("Location: {$URL}");

		exit($Code);
		return;
	}

	public function
	Quit(Int $ErrNum=0):
	Void {
	/*//
	@date 2020-05-22
	so long and thanks for all the fish.
	//*/

		http_response_code($ErrNum);

		exit($ErrNum);
		return;
	}

}
