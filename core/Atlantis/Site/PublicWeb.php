<?php

namespace Atlantis\Site;
use \Atlantis as Atlantis;
use \Nether   as Nether;
use \Monolog  as Monolog;

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
			'Router'    => $this->Router,
			'Route'     => $this,
			'Surface'   => $this->Surface,
			'User'      => $this->User,
			'Printer'   => function($Val){ echo Atlantis\Util\Filters::SafeForHTML($Val); return; }
		]);

		$this->LogDebug('Route Hit',[
			'Name'       => static::class,
			'Path'       => $Router->GetPath(),
			'Addr'       => $Router->GetRemoteAddr(),
			'User'       => ($this->User)?($this->User->ID):(0)
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
	GetHitHash():
	String {

		if($this->User)
		return hash('sha512',sprintf(
			'atlantis-%s-%s-%s',
			$this->User->ID,
			$this->Router->GetFullDomain(),
			$this->Router->GetPath()
		));

		return $this->Router->GetHitHash();
	}

	public function
	Push(Array $Items, ?String $Area=NULL):
	self {
	/*//
	@date 2020-05-24
	push items into the surface scope array.
	//*/

		($this->Surface)
		->Push($Items,$Area);

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
	Area(String $Area, ?Array $Scope=NULL):
	self {
	/*//
	@date 2020-05-24
	a chainable call to the surface area.
	//*/

		if(is_array($Scope))
		$this->Push($Scope,$Area);

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

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	public function
	Log(String $Msg, Int $Level, ?Array $Context=[]):
	self {

		if(Nether\Stash::Get('Atlantis.Log.Application'))
		Nether\Stash::Get('Atlantis.Log.Application')
		->addRecord($Level,$Msg,$Context);

		return $this;
	}

	public function
	LogCritical(String $Msg, ?Array $Context=[]):
	self {

		return $this->Log($Msg,Monolog\Logger::CRITICAL,$Context);
	}

	public function
	LogWarning(String $Msg, ?Array $Context=[]):
	self {

		return $this->Log($Msg,Monolog\Logger::WARNING,$Context);
	}

	public function
	LogNotice(String $Msg, ?Array $Context=[]):
	self {

		return $this->Log($Msg,Monolog\Logger::NOTICE,$Context);
	}

	public function
	LogDebug(String $Msg, ?Array $Context=[]):
	self {

		return $this->Log($Msg,Monolog\Logger::DEBUG,$Context);
	}

	public function
	LogInfo(String $Msg, ?Array $Context=[]):
	self {

		return $this->Log($Msg,Monolog\Logger::INFO,$Context);
	}

}
