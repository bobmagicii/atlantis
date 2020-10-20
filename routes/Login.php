<?php

namespace Routes;

use
Routes,
Atlantis,
Nether,
League;

use
Atlantis\Site\Error\Inline as Error;

use
Throwable;

class Login
extends Atlantis\Site\PublicWeb {

	public function
	Index():
	Void {

		($this->Get)
		->Goto('Atlantis\\Util\\Filters::Base64Decode');

		if($this->Post->Account && $this->Post->Password)
		$this->HandleLogin();

		$this->Surface->Area('login/index');
		return;
	}

	public function
	Github():
	Void {

		$Client = new League\OAuth2\Client\Provider\Github([
			'clientId'     => Nether\Option::Get('Atlantis.Auth.Github.ClientID'),
			'clientSecret' => Nether\Option::Get('Atlantis.Auth.Github.ClientSecret')
		]);

		$Account = NULL;
		$Alias = NULL;
		$Emails = NULL;

		$User = NULL;
		$Email = NULL;
		$UUID = Atlantis\Util::UUID(4);

		////////

		if(!$this->Get->Code)
		$this->Goto($Client->GetAuthorizationUrl([
			'state' => 'OPTIONAL_CUSTOM_CONFIGURED_STATE',
			'scope' => [ 'user:email' ]
		]));

		////////

		$Token = $Client->GetAccessToken('authorization_code',[
			'code' => $this->Get->Code
		]);

		try {
			$Account = $Client->GetResourceOwner($Token);
			$Alias = Atlantis\Util\Filters::TrimmedText($Account->GetNickname());
			$Emails = [ Atlantis\Util\Filters::Email($Account->GetEmail()) ];

			// github tends to not return an email address even if
			// you have one set as public, so, here we go.

			if(!$Emails[0]) {
				$Request = $Client->GetAuthenticatedRequest(
					'GET','https://api.github.com/user/emails',
					$Token
				);

				$Emails = array_filter(
					(Array)$Client->GetParsedResponse($Request),
					function($Val) { return $Val['verified'] === TRUE; }
				);

				$Emails = array_map(
					function($Val) { return $Val['email']; },
					$Emails
				);
			}
		}

		catch(Throwable $Error) {
			$this->AddErrorMessage('We did not get the data from Github we expected.');
			return;
		}

		////////

		if(!$Alias || !count($Emails)) {
			$this->AddErrorMessage('Github did not give us a nickname or email address.');
			return;
		}

		foreach($Emails as $Email) {
			$User = Atlantis\Prototype\User::GetByEmail($Email);
			if($User) break;
		}

		if(!$User)
		if(Nether\Option::Get('Atlantis.User.Join.Mode') === Atlantis\Prototype\User::JoinModeNormal)
		$User = Atlantis\Prototype\User::Insert([
			'Alias'     => $Alias,
			'Email'     => current($Emails),
			'Password1' => $UUID,
			'Password2' => $UUID
		]);

		if(!$User) {
			$this->AddErrorMessage('Unable to locate a user account to log into.');
			return;
		}

		////////

		Atlantis\Prototype\User::LaunchSession($User);
		$this->Goto(Atlantis\Site\Endpoint::Get('Atlantis.Dashboard.Home'));
		return;
	}

	public function
	Destroy():
	Void {

		Atlantis\Prototype\User::DestroySession();
		$this->Goto('/');
		return;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	protected function
	HandleLogin():
	Void {

		$User = Atlantis\Prototype\User::Get($this->Post->Account);
		$Goto = $this->Get->Goto ?? '/';

		if(!$User) {
			$this->Errors->Push(new Error([
				'Error'   => 1,
				'Message' => 'Invalid account or password.'
			]));
			return;
		}

		if(!$User->IsValidPassword($this->Post->Password)) {
			$this->Errors->Push(new Error([
				'Error'   => 2,
				'Message' => 'Invalid account or password.'
			]));
			return;
		}

		$this->LogInfo('User Login',[
			'ID'    => $User->ID,
			'Alias' => $User->Alias
		]);

		Atlantis\Prototype\User::LaunchSession($User);
		$this->Goto($Goto);
		return;
	}



}
