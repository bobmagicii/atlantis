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

		$AllowJoin = Nether\Option::Get('Atlantis.User.Join.Mode') === Atlantis\Prototype\User::JoinModeNormal;
		$Client = NULL;
		$Account = NULL;
		$User = NULL;

		$AuthID = NULL;
		$Alias = NULL;
		$Emails = NULL;
		$Email = NULL;

		////////

		$Client = new League\OAuth2\Client\Provider\Github([
			'clientId'     => Nether\Option::Get('Atlantis.Auth.Github.ClientID'),
			'clientSecret' => Nether\Option::Get('Atlantis.Auth.Github.ClientSecret')
		]);

		////////

		// kick off an auth flow with a redirect to the remote app.

		if(!$this->Get->Code) {
			$this->Goto($Client->GetAuthorizationUrl([
				'state' => 'OPTIONAL_CUSTOM_CONFIGURED_STATE',
				'scope' => [ 'user:email' ]
			]));

			return;
		}

		////////

		// finish an auth flow by getting a token from the auth code.

		try {
			$Token = $Client->GetAccessToken(
				'authorization_code',
				[ 'code' => $this->Get->Code ]
			);
		}

		catch(Throwable $Error) {
			$this->AddErrorMessage('Unable to process the auth code.');
			return;
		}

		////////

		// get information about the user's identity.

		try {
			$Account = $Client->GetResourceOwner($Token);
			/** @var League\OAuth2\Client\Provider\GithubResourceOwner $Account */

			$AuthID = $Account->GetID();
			$Alias = Atlantis\Util\Filters::RouteSafeAlias($Account->GetNickname());
			$Email = Atlantis\Util\Filters::Email($Account->GetEmail());

			// github tends to not return an email address even if
			// you have one set as public, so, here we go.

			if(!$Email) {
				$Request = $Client->GetAuthenticatedRequest(
					'GET', 'https://api.github.com/user/emails',
					$Token
				);

				$Emails = (
					(new Atlantis\Datastore((Array)$Client->GetParsedResponse($Request)))
					->Filter(function($Val){ return $Val['primary'] === TRUE; })
					->Remap(function($Val){ return $Val['email']; })
				);

				if($Emails->Count() >= 1)
				$Email = $Emails->Shift();
			}
		}

		catch(Throwable $Error) {
			$this->AddErrorMessage('We did not get the data from Github we expected.');
			return;
		}

		////////

		// determine if we have enough information to proceed with an identity.

		if(!$Alias || !$Email || !$AuthID) {
			$this->AddErrorMessage('Github did not give us a nickname, email, or auth id.');
			return;
		}

		$User = Atlantis\Prototype\User::GetByGithubID($AuthID);

		if(!$User)
		$User = Atlantis\Prototype\User::GetByEmail($Email);

		if(!$User && $AllowJoin) {
			try {
				$User = Atlantis\Prototype\User::Insert([
					'Alias'        => $Alias,
					'Email'        => $Email,
					'AuthGithubID' => $AuthID,
					'PHash'        => Atlantis\Util::UUID(4),
					'PSand'        => Atlantis\Util::UUID(4)
				]);
			}

			catch(Throwable $Error) {
				$this->AddErrorMessage("Unable to create a new account: {$Error->GetMessage()}");
				return;
			}
		}

		if(!$User) {
			$this->AddErrorMessage('Unable to locate a user account to log into.');
			return;
		}

		////////

		// handle if a user is authing for the first time later on.

		if(!$User->AuthGithubID)
		$User->Update(['AuthGithubID'=>$AuthID]);

		////////

		Atlantis\Prototype\User::LaunchSession($User);
		$this->Goto(Atlantis\Site\Endpoint::Get('Atlantis.Dashboard.Home'));
		return;
	}

	public function
	Twitter():
	Void {

		$AllowJoin = Nether\Option::Get('Atlantis.User.Join.Mode') === Atlantis\Prototype\User::JoinModeNormal;
		$SessionTokenKey = 'Atlantis.Login.Auth.Twitter.Token';
		$Client = NULL;
		$Account = NULL;
		$User = NULL;

		$AuthID = NULL;
		$Alias = NULL;
		$Email = NULL;

		////////

		$Client = new League\OAuth1\Client\Server\Twitter([
			'identifier' => Nether\Option::Get('Atlantis.Auth.Twitter.ClientID'),
			'secret'     => Nether\Option::Get('Atlantis.Auth.Twitter.ClientSecret')
		]);

		////////

		// kick off an auth flow with a redirect to the remote app.

		if(!$this->Get->OAuth_Token) {
			$Client->Authorize(
				$_SESSION[$SessionTokenKey] = $Client->GetTemporaryCredentials()
			);
			return;
		}

		////////

		// finish an auth flow by getting a token from the auth code.

		try {
			$Token = $Client->GetTokenCredentials(
				$_SESSION[$SessionTokenKey],
				$this->Get->OAuth_Token,
				$this->Get->OAuth_Verifier
			);
		}

		catch(Throwable $Error) {
			$this->AddErrorMessage('Unnable to process the auth code.');
			return;
		}

		////////

		// get information about the user's identity.

		try {
			$Account = $Client->GetUserDetails($Token);

			$AuthID = $Account->uid;
			$Alias = Atlantis\Util\Filters::RouteSafeAlias($Account->nickname);
			$Email = Atlantis\util\Filters::Email($Account->email);
		}

		catch(Throwable $Error) {
			$this->AddErrorMessage('We did not get the data from Twitter we expected.');
			return;
		}

		////////

		// determine if we have enough information to proceed with an identity.

		if(!$Alias || !$Email || !$AuthID) {
			$this->AddErrorMessage('Twitter did not give us a nickname, email, or auth id.');
			return;
		}

		$User = Atlantis\Prototype\User::GetByTwitterID($AuthID);

		if(!$User)
		$User = Atlantis\Prototype\User::GetByEmail($Email);

		if(!$User && $AllowJoin) {
			try {
				$User = Atlantis\Prototype\User::Insert([
					'Alias'         => $Alias,
					'Email'         => $Email,
					'AuthTwitterID' => $AuthID,
					'PHash'         => Atlantis\Util::UUID(4),
					'PSand'         => Atlantis\Util::UUID(4)
				]);
			}

			catch(Throwable $Error) {
				$this->AddErrorMessage("Unable to create a new account: {$Error->GetMessage()}");
				return;
			}
		}

		if(!$User) {
			$this->AddErrorMessage('Unable to locate a user account to log into.');
			return;
		}

		////////

		// handle if a user is authing for the first time later on.

		if(!$User->AuthTwitterID)
		$User->Update(['AuthTwitterID'=>$AuthID]);

		////////

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
