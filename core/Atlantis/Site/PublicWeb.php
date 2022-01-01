<?php

namespace Atlantis\Site;

use
Atlantis,
Nether,
Monolog,
ReCaptcha;

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
	?Atlantis\Prototype\User $User;

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	public function
	__Construct(Atlantis\Site\Router $Router) {

		$this->Router = $Router;
		$this->Method = $this->GetRequestMethod();
		$this->Get = new Nether\Input\Filter($_GET);
		$this->Router = Nether\Stash::Get('Router');
		$this->Surface = new Atlantis\Site\Surface;
		$this->User = Atlantis\Prototype\User::FetchSession();
		$this->Errors = new Nether\Object\Datastore;
		$this->Storage = new Atlantis\StorageManager;

		if($this->Method === 'POST')
		$this->Post = new Nether\Input\Filter($_POST);
		else
		$this->Post = new Nether\Input\Filter(Atlantis\Util::ParseEncodedStandardInput());

		$this->Surface
		->Set('Page.Type','article');

		$this->Push([
			'Router'    => $this->Router,
			'Route'     => $this,
			'Surface'   => $this->Surface,
			'User'      => $this->User,
			'Encoder'   => function($Val){ return Atlantis\Util\Filters::SafeForHTML($Val); },
			'Printer'   => function($Val){ echo Atlantis\Util\Filters::SafeForHTML($Val); return; },
			'Checked'   => function($Val){ if($Val) echo 'checked="checked"'; return; },
			'Selected'  => function($Val){ if($Val) echo 'selected="selected"'; return; },
			'Endpoint'  => function(String $Key, ?Array $Val=NULL) { return Atlantis\Site\Endpoint::Get($Key,$Val); }
		]);

		$this->LogDebug('Route Hit',[
			'Name'       => static::class,
			'Path'       => $Router->GetPath(),
			'Addr'       => $Router->GetRemoteAddr(),
			'User'       => ($this->User)?($this->User->ID):(0)
		]);

		if($this->User)
		if(ProjectTime - $this->User->TimeSeen > 60)
		$this->User->Update([ 'TimeSeen' => ProjectTime ]);

		Nether\Stash::Set('Atlantis.User',$this->User);

		$this->OnReady();
		return;
	}

	protected function
	OnReady():
	void {

		return;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	public function
	GetRequestMethod():
	string {
	/*//
	@date 2017-10-25
	figure out what type of request this is. how is this not in nether avenue
	by default lulz.
	//*/

		if(array_key_exists('REQUEST_METHOD',$_SERVER))
		return strtoupper((String)$_SERVER['REQUEST_METHOD']);

		return 'GET';
	}

	public function
	GetEncodedURL():
	string {
	/*//
	@date 2020-05-22
	get the current url encoded to be safe for url pararms.
	//*/

		return Atlantis\Util\Filters::Base64Encode($this->Router->GetURL());
	}

	protected function
	RequireUserSession():
	void {
	/*//
	@date 2020-06-01
	provide a method to force a user session being required.
	//*/

		if($this->User)
		return;

		if(!$this->User)
		$this->Goto(sprintf(
			'/login?goto=%s',
			$this->GetEncodedURL()
		));

		return;
	}

	protected function
	RequireAdminSession():
	void {
	/*//
	@date 2020-06-01
	provide a method to force a user session being required.
	//*/

		if($this->User && $this->User->IsAdmin())
		return;

		if(!$this->User) {
			$this->Goto(sprintf(
				'/login?goto=%s',
				$this->GetEncodedURL()
			));
			return;
		}

		$this->Goto(sprintf(
			'/',
			$this->GetEncodedURL()
		));

		return;
	}

	protected function
	DidValidateHuman():
	bool {
	/*//
	@date 2020-10-05
	//*/

		$Human = new ReCaptcha\ReCaptcha(Nether\Option::Get('Google.ReCaptcha.Secret'));
		$CVal = $this->Post->{'g-recaptcha-response'};
		$IP = $_SERVER['REMOTE_ADDR'];

		if($Human->Verify($CVal,$IP)->IsSuccess())
		return TRUE;

		return FALSE;
	}

	public function
	ShouldAdultAllow():
	bool {
	/*//
	@date 2020-06-18
	//*/

		if(!$this->User)
		return FALSE;

		return $this->User->ShouldAdultAllow();
	}

	public function
	ShouldAdultWarn():
	bool {
	/*//
	@date 2020-06-18
	//*/

		if(!$this->User)
		return TRUE;

		return $this->User->ShouldAdultWarn();
	}

	public function
	ShouldAdultSafespace():
	bool {
	/*//
	@date 2020-06-18
	//*/

		if(!$this->User)
		return TRUE;

		return $this->User->ShouldAdultSafespace();
	}

	public function
	AddErrorMessage(string $Message):
	self {

		($this->Errors)
		->Push(new Atlantis\Site\Error\Inline([
			'Message' => $Message
		]));

		return $this;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	public function
	GetHitHash():
	string {

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
	Push(array $Items, ?string $Area=NULL):
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
	Set(string $Key, $Value):
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
	Area(string $Area, array|object|NULL $Scope=NULL):
	self {
	/*//
	@date 2020-05-24
	a chainable call to the surface area.
	//*/

		$this->Push((array)$Scope,$Area);

		($this->Surface)
		->Area($Area);

		return $this;
	}

	public function
	Goto(string $URL, int $Code=303):
	void {
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
	Quit(int $ErrNum=0):
	void {
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
	Log(string $Msg, int $Level, ?array $Context=[]):
	self {

		if(Nether\Stash::Get('Atlantis.Log.Application'))
		Nether\Stash::Get('Atlantis.Log.Application')
		->addRecord($Level,$Msg,$Context);

		return $this;
	}

	public function
	LogCritical(string $Msg, ?array $Context=[]):
	self {

		return $this->Log($Msg,Monolog\Logger::CRITICAL,$Context);
	}

	public function
	LogWarning(string $Msg, ?array $Context=[]):
	self {

		return $this->Log($Msg,Monolog\Logger::WARNING,$Context);
	}

	public function
	LogNotice(string $Msg, ?array $Context=[]):
	self {

		return $this->Log($Msg,Monolog\Logger::NOTICE,$Context);
	}

	public function
	LogDebug(string $Msg, ?array $Context=[]):
	self {

		return $this->Log($Msg,Monolog\Logger::DEBUG,$Context);
	}

	public function
	LogInfo(string $Msg, ?array $Context=[]):
	self {

		return $this->Log($Msg,Monolog\Logger::INFO,$Context);
	}

}
