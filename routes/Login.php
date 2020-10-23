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
	Destroy():
	Void {

		Atlantis\Prototype\User::DestroySession();
		$this->Goto('/');
		return;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

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
		$AuthID = NULL;

		$User = NULL;
		$Email = NULL;
		$UUID1 = Atlantis\Util::UUID(4);
		$UUID2 = Atlantis\Util::UUID(4);

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
			/** @var League\OAuth2\Client\Provider\GithubResourceOwner $Account */

			$Alias = Atlantis\Util\Filters::RouteSafeAlias($Account->GetNickname());
			$AuthID = $Account->GetID();
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
					function($Val) { return $Val['primary'] === TRUE; }
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

		if(!$Alias || !count($Emails) || !$AuthID) {
			$this->AddErrorMessage('Github did not give us a nickname, email, or auth id.');
			return;
		}

		////////

		// try to find an account already identified as using this auth.

		$User = Atlantis\Prototype\User::GetByGithubID($AuthID);

		// try to find a user by the email address.

		if(!$User)
		foreach($Emails as $Email) {
			$User = Atlantis\Prototype\User::GetByEmail($Email);
			if($User) break;
		}

		if(!$User) {
			reset($Emails);

			if(Nether\Option::Get('Atlantis.User.Join.Mode') === Atlantis\Prototype\User::JoinModeNormal)
			$User = Atlantis\Prototype\User::Insert([
				'Alias'        => $Alias,
				'Email'        => current($Emails),
				'PHash'        => $UUID1,
				'PSand'        => $UUID2,
				'AuthGithubID' => $AuthID
			]);
		}

		if(!$User) {
			$this->AddErrorMessage('Unable to locate a user account to log into.');
			return;
		}

		////////

		if(!$User->AuthGithubID)
		$User->Update(['AuthGithubID'=>$AuthID]);

		Atlantis\Prototype\User::LaunchSession($User);
		$this->Goto(Atlantis\Site\Endpoint::Get('Atlantis.Dashboard.Home'));
		return;
	}

	public function
	Twitter():
	Void {

		$Client = new League\OAuth1\Client\Server\Twitter([
			'identifier'   => Nether\Option::Get('Atlantis.Auth.Twitter.ClientID'),
			'secret'       => Nether\Option::Get('Atlantis.Auth.Twitter.ClientSecret'),
			'callback_uri' => 'https:'.Atlantis\Site\Endpoint::Get('Atlantis.Login.Auth.Twitter')
		]);

		$SessionTokenKey = 'Atlantis.Login.Auth.Twitter.Token';
		$Account = NULL;
		$Alias = NULL;
		$Email = NULL;
		$AuthID = NULL;

		$User = NULL;
		$UUID1 = Atlantis\Util::UUID(4);
		$UUID2 = Atlantis\Util::UUID(4);

		////////

		if(!$this->Get->OAuth_Token) {
			$Client->Authorize(
				$_SESSION[$SessionTokenKey] = $Client->GetTemporaryCredentials()
			);
			return;
		}

		////////

		try {
			$Token = $Client->GetTokenCredentials(
				$_SESSION[$SessionTokenKey],
				$this->Get->OAuth_Token,
				$this->Get->OAuth_Verifier
			);

			$Account = $Client->GetUserDetails($Token);
			$Alias = Atlantis\Util\Filters::RouteSafeAlias($Account->nickname);
			$AuthID = $Account->uid;
			$Email = Atlantis\util\Filters::Email($Account->email);
		}

		catch(Throwable $Error) {
			$this->AddErrorMessage('We did not get the data from Twitter we expected.');
			return;
		}

		////////

		if(!$Alias || !$Email || !$AuthID) {
			$this->AddErrorMessage('Twitter did not give us a nickname, email, or auth id.');
			return;
		}

		$User = Atlantis\Prototype\User::GetByTwitterID($AuthID);

		if(!$User)
		$User = Atlantis\Prototype\User::GetByEmail($Email);

		if(!$User) {
			if(Nether\Option::Get('Atlantis.User.Join.Mode') === Atlantis\Prototype\User::JoinModeNormal)
			$User = Atlantis\Prototype\User::Insert([
				'Alias'         => $Alias,
				'Email'         => $Email,
				'PHash'         => $UUID1,
				'PSand'         => $UUID2,
				'AuthTwitterID' => $AuthID
			]);
		}

		if(!$User) {
			$this->AddErrorMessage('Unable to locate a user account to log into.');
			return;
		}

		////////

		if(!$User->AuthTwitterID)
		$User->Update(['AuthTwitterID'=>$AuthID]);

		Atlantis\Prototype\User::LaunchSession($User);
		$this->Goto(Atlantis\Site\Endpoint::Get('Atlantis.Dashboard.Home'));
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
