<?php

namespace Nether\Auth;
use \Nether as Nether;

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

	////////
	////////

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

	////////
	////////

	static public function
	GetFromSession():
	?self {
	/*//
	@todo
	return the user that is currently logged in. if no user is found or the
	session failed validation then it will return null.
	//*/

		return NULL;
	}

	////////
	////////

	static public function
	Get($Val):
	?self {
	/*//
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
	@todo
	return the specified user looking up by user id.
	//*/

		return NULL;
	}

	static public function
	GetByAlias(String $Alias):
	?self {
	/*//
	@todo
	return the specified user looking up by username/alias.
	//*/

		return NULL;
	}

	static public function
	GetByEmail(String $Email):
	?self {
	/*//
	@todo
	return the specified user looking up by email address.
	//*/

		return NULL;
	}

	////////
	////////

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

		// ...

		return NULL;
	}

	static public function
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

	static public function
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

	static public function
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
