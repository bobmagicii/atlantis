<?php

namespace Nether\Auth;
use \Nether as Nether;

use \Exception as Exception;

Nether\Option::Define([
	'nether-user-table-name'    => 'Users',
	'nether-user-cookie-name'   => 'nether-user',
	'nether-user-cookie-path'   => '/',
	'nether-user-cookie-domain' => (
		(array_key_exists('HTTP_HOST',$_SERVER))?
		($_SERVER['HTTP_HOST']):
		(NULL)
	)
]);

class User
extends Nether\Object {

	static public
	$PropertyMap = [
		'user_id'       => 'ID:int',
		'user_ctime'    => 'TimeCreated:int',
		'user_stime'    => 'TimeSeen:int',
		'user_btime'    => 'TimeBanned:int',
		'user_alias'    => 'Alias',
		'user_email'    => 'Email',
		'user_phash'    => 'PHash',
		'user_psand'    => 'PSand'
	];

	////////
	////////

	protected
	$ID = 0;

	protected
	$TimeCreated = 0;

	protected
	$TimeSeen = 0;

	protected
	$TimeBanned = 0;

	protected
	$Alias = NULL;

	protected
	$Email = NULL;

	protected
	$PHash = NULL;

	protected
	$PSand = NULL;

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	public function
	Cache():
	self {
	/*//
	@date 2017-02-11
	prime the cache with this user.
	//*/

		$Cache = Nether\Stash::Get(Nether\Option::Get('cache-stash-name'));

		$Cache->Set("nether-user-id-{$this->GetID()}",$this);
		$Cache->Set("nether-user-al-{$this->GetAlias()}",$this);
		$Cache->Set("nether-user-em-{$this->GetEmail()}",$this);

		return $this;
	}

	public function
	Flush():
	self {
	/*//
	@date 2017-02-11
	drop this user from the cache. you'll need to use this after changing any
	information about them.
	//*/

		$Cache = Nether\Stash::Get(Nether\Option::Get('cache-stash-name'));

		$Cache->Drop("nether-user-id-{$this->GetID()}");
		$Cache->Drop("nether-user-al-{$this->GetAlias()}");
		$Cache->Drop("nether-user-em-{$this->GetEmail()}");

		return $this;
	}

	////////////////////////////////////////////////////////////////
	// Instance Property Methods ///////////////////////////////////

	public function
	GetID():
	Int {
	/*//
	@get ID
	//*/

		return $this->ID;
	}

	public function
	GetAlias():
	?String {
	/*//
	@get Alias
	//*/

		return $this->Alias;
	}

	public function
	GetEmail():
	?String {
	/*//
	@get Email
	//*/

		return $this->Email;
	}

	public function
	GetSessionHash():
	String {
	/*//
	@date 2017-02-10
	get the current session hash allowing for shifting sands.
	//*/

		return hash('sha512',"{$this->PHash}:{$this->PSand}");
	}

	public function
	IsValidPassword(String $Password):
	Bool {
	/*//
	@date 2017-02-11
	does the specified password match the one belonging to this user?
	//*/

		return (hash('sha512',$Password) === $this->PHash);
	}

	////////////////////////////////////////////////////////////////
	// User Session API ////////////////////////////////////////////

	static public function
	FetchSession():
	?self {
	/*//
	@date 2017-02-09
	fetch the currently active session
	//*/

		return self::GetSession(TRUE) ?? self::GetSession(FALSE);
	}

	static public function
	GetSession(Bool $Overshadowed=FALSE):
	?self {
	/*//
	@date 2017-02-09
	return the user that is currently logged in to the specified session. it
	will pull either the normal session or the overshadow.
	//*/

		$Data = NULL;
		$User = NULL;
		$CName = Nether\Option::Get('nether-user-cookie-name');

		////////

		if($Overshadowed)
		$CName .= '-os';

		////////

		// did we even have data
		if(!array_key_exists($CName,$_COOKIE))
		return NULL;

		// did the data fit our expected format
		if(!preg_match(
			'/^([a-z0-9]+):([a-z0-9]+)$/',
			$_COOKIE[$CName],
			$Data
		))
		return NULL;

		// expand the user id.
		$Data[1] = (Int)base_convert($Data[1],36,10);

		// see if the user exists.
		if(!($User = self::GetByID($Data[1])))
		return NULL;

		// see that the user validates.
		if($User->GetSessionHash() !== $Data[2])
		return NULL;

		// so we're good.
		return $User;
	}

	////////////////
	////////////////

	static public function
	DestroySession():
	Void {
	/*//
	@date 2017-02-11
	kill the login session.
	//*/

		$CName = Nether\Option::Get('nether-user-cookie-name');
		$CPath = Nether\Option::Get('nether-user-cookie-path');
		$CDomain = Nether\Option::Get('nether-user-cookie-domain');

		setcookie($CName,'',(-1),$CPath,$CDomain);
		return;
	}

	static public function
	LaunchSession(self $User, Bool $Overshadow=FALSE):
	Void {
	/*//
	@date 2017-02-09
	set a user to be logged in.
	//*/

		$CName = Nether\Option::Get('nether-user-cookie-name');
		$CPath = Nether\Option::Get('nether-user-cookie-path');
		$CDomain = Nether\Option::Get('nether-user-cookie-domain');

		if($Overshadow)
		$CName .= '-os';

		setcookie(
			$CName,
			sprintf(
				'%s:%s',
				base_convert($User->GetID(),10,36),
				$User->GetSessionHash()
			),
			(time() + (86400*7)),
			$CPath,
			$CDomain
		);

		return;
	}

	////////////////////////////////////////////////////////////////
	// User Retrieval API //////////////////////////////////////////

	static public function
	Get($Val):
	?self {
	/*//
	@date 2017-02-08
	return the specified user automatically determining the proper method to
	use to look them up based on what you gave us.
	//*/

		// if given an integer look it up by id.
		if(is_int($Val))
		return self::GetByID($Val);

		// if it looks like an email look it up by email.
		if(strpos($Val,'@') !== FALSE)
		return self::GetByEmail($Val);

		// fall back to looking up by username.
		return self::GetByAlias($Val);
	}

	static public function
	GetByID(Int $ID):
	?self {
	/*//
	@date 2017-02-10
	return the specified user looking up by user id.
	//*/

		$Cached = self::GetFromCache("nether-user-id-{$ID}");
		if($Cached) return $Cached;

		$Table = Nether\Option::Get('nether-user-table-name');
		$SQL = Nether\Database::Get()->NewVerse();

		$Result = $SQL
		->Select($Table)
		->Fields('*')
		->Where('user_id=:ID')
		->Limit(1)
		->Query([ ':ID' => $ID ]);

		// boom boom pow
		if(!$Result->IsOK())
		throw new Exception('User::GetByID critical phail');

		// user not found
		if(!$Result->GetCount())
		return NULL;

		// get user.
		return (new self($Result->Next()))->Cache();
	}

	static public function
	GetByAlias(String $Alias):
	?self {
	/*//
	@date 2017-02-10
	return the specified user looking up by username/alias.
	//*/

		$Cached = self::GetFromCache("nether-user-al-{$Alias}");
		if($Cached) return $Cached;

		$Table = Nether\Option::Get('nether-user-table-name');
		$SQL = Nether\Database::Get()->NewVerse();

		$Result = $SQL
		->Select($Table)
		->Fields('*')
		->Where('user_alias LIKE :Alias')
		->Limit(1)
		->Query([ ':Alias' => $Alias ]);

		// boom boom pow
		if(!$Result->IsOK())
		throw new Exception('User::GetByAlias critical phail');

		// user not found
		if(!$Result->GetCount())
		return NULL;

		// get user.
		return (new self($Result->Next()))->Cache();
	}

	static public function
	GetByEmail(String $Email):
	?self {
	/*//
	@date 2017-02-10
	return the specified user looking up by email address.
	//*/

		$Cached = self::GetFromCache("nether-user-em-{$Email}");
		if($Cached) return $Cached;

		$Table = Nether\Option::Get('nether-user-table-name');
		$SQL = Nether\Database::Get()->NewVerse();

		$Result = $SQL
		->Select($Table)
		->Fields('*')
		->Where('user_email LIKE :Email')
		->Limit(1)
		->Query([ ':Email' => $Email ]);

		// boom boom pow
		if(!$Result->IsOK())
		throw new Exception('User::GetByEmail critical phail');

		// user not found
		if(!$Result->GetCount())
		return NULL;

		// get user.
		return (new self($Result->Next()))->Cache();
	}

	static public function
	GetFromCache(String $Key):
	?self {
	/*//
	@date 2017-02-11
	see if this user has been cached return it if so null if not.
	//*/

		return Nether\Stash::Get(
			Nether\Option::Get('cache-stash-name')
		)->Get($Key);
	}

	////////////////////////////////////////////////////////////////
	// User Creation API ///////////////////////////////////////////

	static public function
	Create($Opt=NULL):
	?self {
	/*//
	@todo
	create a new user. throws exceptions when user requirements are not met,
	so we can dump data directly to this method and let it make sure things
	like the email looks legit, passwords match, etc, and catch various
	exceptions when they fail.
	//*/

		$Result = NULL;
		$UserID = 0;

		////////

		$Opt = new Nether\Object($Opt,[
			// fields used by the query.
			'TimeCreated' => time(),
			'TimeSeen'    => 0,
			'TimeBanned'  => 0,
			'Alias'       => NULL,
			'Email'       => NULL,
			'PHash'       => NULL,
			'PSand'       => NULL,

			// fields used to generate data.
			'Password1'   => NULL,
			'Password2'   => NULL
		]);

		self::Create_ValidateAlias($Opt);
		self::Create_ValidateEmail($Opt);
		self::Create_ValidatePassword($Opt);

		////////

		$Result = Nether\Database::Get()
		->NewVerse()
		->Insert(Nether\Option::Get('nether-user-table-name'))
		->Fields([
			'user_ctime' => ':TimeCreated',
			'user_stime' => ':TimeSeen',
			'user_btime' => ':TimeBanned',
			'user_alias' => ':Alias',
			'user_email' => ':Email',
			'user_psand' => ':PSand',
			'user_phash' => ':PHash'
		])
		->Query($Opt);

		if(!$Result->IsOK())
		throw new Exception('User::Create critical phail');

		////////

		if(!($UserID = (Int)$Result->GetInsertID()))
		throw new Exception('User::Create interesting phail');

		////////

		return self::GetByID($UserID);
	}

	static protected function
	Create_ValidateAlias($Opt):
	Void {
	/*//
	@date 2017-02-08
	handle validation of the user alias. if the validation fails it throws
	an exception. if it succeeds nothing special happens.
	//*/

		// make sure it has a minimum length.
		if(strlen($Opt->Alias) < 3)
		throw new Error\AliasInvalid;

		// make sure it does not already exist.
		if(self::GetByAlias($Opt->Alias) !== NULL)
		throw new Error\AliasNotUnique;

		return;
	}

	static protected function
	Create_ValidateEmail($Opt):
	Void {
	/*//
	@date 2017-02-08
	handle validation of the user email. if the validation fails it throws an
	exception. if it succeeds nothing special happens.
	//*/

		// make sure it looks like an email.
		if(!filter_var($Opt->Email,FILTER_VALIDATE_EMAIL))
		throw new Error\EmailInvalid;

		// make sure it does not already exist.
		if(self::GetByEmail($Opt->Email) !== NULL)
		throw new Error\EmailNotUnique;

		return;
	}

	static protected function
	Create_ValidatePassword($Opt):
	Void {
	/*//
	@date 2017-02-08
	handle validation cases about the user password. if the validation fails
	it throws an exception. if the validation succeeds then the PHash and
	PSand fields will be filled in on the Input object.
	//*/

		// if they didn't even supply password.
		if(!$Opt->Password1 || !$Opt->Password2)
		throw new Error\PasswordConfirmFail;

		// if they failed at typing it twice.
		if($Opt->Password1 !== $Opt->Password2)
		throw new Error\PasswordConfirmFail;

		// require passwords be a certain length.
		if(strlen($Opt->Password1) < 8)
		throw new Error\PasswordInvalid;

		////////

		// hash the password for storage. we will be unable to retrieve it.
		// if it is forgotten it will have to be reset.

		$Opt->PHash = hash('sha512',$Opt->Password1);

		// generate a random hash for shifting sands. does not really need
		// to be cryptographically secure or promised unique. the main
		// use is to provide the ability to invalidate any dangling sessions
		// at a users request.

		$Opt->PSand = hash('sha512',sprintf(
			'%s%s%s',
			random_int(PHP_INT_MIN, PHP_INT_MAX),
			random_int(PHP_INT_MIN, PHP_INT_MAX),
			random_int(PHP_INT_MIN, PHP_INT_MAX)
		));

		return;
	}

}
