<?php

namespace Atlantis\Prototype;

use
\Atlantis as Atlantis,
\Nether   as Nether,
\Ramsey   as Ramsey;

use
\Exception as Exception,
\JsonSerializable as JsonSerializable;

class User
extends Atlantis\Prototype
implements JsonSerializable {

	static protected
	$Table = 'Users';

	static protected
	$PropertyMap = [
		'ID'              => 'ID:int',
		'TimeCreated'     => 'TimeCreated:int',
		'TimeSeen'        => 'TimeSeen:int',
		'TimeBanned'      => 'TimeBanned:int',
		'Enabled'         => 'Enabled:int',
		'Admin'           => 'Admin:int',
		'UUID'            => 'UUID',
		'Alias'           => 'Alias',
		'Email'           => 'Email',
		'PHash'           => 'PHash',
		'PSand'           => 'PSand',
		'ImageHeaderID'   => 'ImageHeaderID:int',
		'ImageIconID'     => 'ImageIconID:int',
		'AccountPlanID'   => 'AccountPlanID:int',
		'AccountPlanTime' => 'AccountPlanTime:int',
		'OptAdult'        => 'OptAdult:int',
		'OptAllowSeen'    => 'OptAllowSeen:int',
		'BytesImages'     => 'BytesImages:int',
		'Location'        => 'Location',
		'Details'         => 'Details',
		'AuthGithubID'    => 'AuthGithubID',
		'AuthTwitterID'   => 'AuthTwitterID'
	];

	// data properties

	public int $ID;
	public string $UUID;
	public int $TimeCreated;
	public int $TimeSeen;
	public int $TimeBanned;
	public int $Enabled;
	public int $Admin;
	public string $Alias;
	public string $Email;
	public ?string $PHash;
	public ?string $PSand;
	public ?int $ImageHeaderID;
	public ?int $ImageIconID;
	public int $OptAdult;
	public int $OptAllowSeen;
	public int $BytesImages;
	public ?string $Location;
	public ?string $Details;
	public ?string $AuthGithubID;
	public ?string $AuthTwitterID;

	// extended properties

	public ?String $URL;
	public Atlantis\Util\Date $DateCreated;
	public Atlantis\Util\Date $DateSeen;
	public Atlantis\Util\Date $DateBanned;
	public Atlantis\Prototype\UploadImage $ImageIcon;
	public Atlantis\Prototype\UploadImage $ImageHeader;

	// account plan properties.

	public int $AccountPlanID;
	public int $AccountPlanTime;
	public Atlantis\Prototype\AccountPlan $AccountPlan;
	public Atlantis\Util\Date $AccountPlanDate;

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	const
	AdminTypeGlobal = 0b00000001;

	const
	AdultDisable = 0, // do not list, safespace direct access.
	AdultWarn    = 1, // list, apply visual warnings, blur images
	AdultAllow   = 2; // yolo

	const
	JoinModeDisabled = 0,
	JoinModeNormal   = 1,
	JoinModeInvite   = 2;

	public function
	__Construct($Input, bool $MakeSafer=TRUE) {

		// provide a way to still use user objects but omit various
		// personal data that is not needed outside of auth or
		// valid session things.

		if($MakeSafer) {
			if(is_array($Input))
			unset($Input['PHash'],$Input['PSand']);
			elseif(is_object($Input))
			unset($Input->PHash,$Input->PSand);
		}

		parent::__Construct($Input);
		return;
	}

	public function
	__Ready($Raw):
	void {

		$this->URL = $this->GetURL();

		$this->DateCreated = new Atlantis\Util\Date("@{$Raw['TimeCreated']}");
		$this->DateSeen = new Atlantis\Util\Date("@{$Raw['TimeSeen']}");
		$this->DateBanned = new Atlantis\Util\Date("@{$Raw['TimeBanned']}");

		if(array_key_exists('UII_ID',$Raw) && $Raw['UII_ID']) {
			$this->ImageIcon = new Atlantis\Prototype\UploadImage(
				Atlantis\Util::StripPrefixedQueryFields($Raw,'UII_')
			);
		}

		if(array_key_exists('UIH_ID',$Raw) && $Raw['UIH_ID']) {
			$this->ImageHeader = new Atlantis\Prototype\UploadImage(
				Atlantis\Util::StripPrefixedQueryFields($Raw,'UIH_')
			);
		}

		if(array_key_exists('UAP_ID',$Raw) && $Raw['UAP_ID']) {
			$this->AccountPlan = new Atlantis\Prototype\AccountPlan(
				Atlantis\Util::StripPrefixedQueryFields($Raw,'UAP_')
			);

			$this->AccountPlanDate = new Atlantis\Util\Date("@{$Raw['AccountPlanTime']}");
		}

		return;
	}

	public function
	JsonSerialize():
	array {
	/*//
	@date 2020-06-01
	@implements JsonSerializable
	//*/

		return [
			'ID'             => $this->ID,
			'UUID'           => $this->UUID,
			'Alias'          => $this->Alias,
			'URL'            => $this->URL,
			'TimeCreated'    => $this->TimeCreated,
			'TimeSeen'       => ($this->OptAllowSeen ? $this->TimeSeen : $this->TimeCreated),
			'DateCreated'    => (String)$this->DateCreated,
			'DateSeen'       => ($this->OptAllowSeen ? $this->DateSeen->Fancy() : $this->DateCreated),
			'ImageHeader'    => [
				'Large'  => $this->GetImageHeaderURL('lg'),
				'Medium' => $this->GetImageHeaderURL('md'),
				'Small'  => $this->GetImageHeaderURL('sm')
			],
			'ImageIcon'    => [
				'Large'  => $this->GetImageIconURL('lg'),
				'Medium' => $this->GetImageIconURL('md'),
				'Small'  => $this->GetImageIconURL('sm'),
				'Tiny'   => $this->GetImageIconURL('th')
			]
		];
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	public function
	CacheDrop():
	static {
	/*//
	@date 2021-06-08
	//*/

		$CacheKey = static::GetCacheKey($this->ID);
		$Cache = NULL;

		////////

		// drop from shared app and memcache.

		$Cache = Nether\Stash::Get('Atlantis.Cache.GlobalMemory');

		if($Cache instanceof Nether\Cache\Manager)
		$Cache->Drop($CacheKey);

		////////

		return $this;
	}

	protected function
	OnDrop():
	void {
	/*//
	@date 2021-06-08
	//*/

		$this->CacheDrop();
		return;
	}

	protected function
	OnUpdate():
	void {
	/*//
	@date 2021-06-08
	//*/

		$this->CacheDrop();
		return;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	public function
	IsFriendsWith(?Atlantis\Prototype\User $User):
	bool {
	/*//
	@date 2020-12-11
	//*/

		if($User === NULL)
		return FALSE;

		// @todo

		return FALSE;
	}

	public function
	IsAdmin(int $Flags=1):
	bool {
	/*//
	@date 2020-06-02
	//*/

		if(($this->Admin & $Flags) === $Flags)
		return TRUE;

		return FALSE;
	}

	public function
	IsBanned():
	bool {
	/*//
	@date 2021-04-12
	//*/

		return ($this->TimeBanned !== 0);
	}

	public function
	GetBlogs():
	Atlantis\Struct\SearchResult {
	/*//
	@date 2020-05-23
	get a list of blogs this user has access to.
	//*/

		return Atlantis\Prototype\BlogUser::Find([
			'UserID' => $this->ID,
			'Sort'   => 'blog-title-az'
		]);
	}

	public function
	GetURL():
	?Atlantis\Site\Endpoint {
	/*//
	@date 2017-03-02
	//*/

		return Atlantis\Site\Endpoint::Get('Atlantis.User.Home',[
			'UserAlias' => $this->Alias
		]);
	}

	public function
	GetImageHeaderURL(string $Size='lg'):
	string {
	/*//
	@date 2020-10-01
	//*/

		if(!isset($this->ImageHeader))
		return Nether\Option::Get('Atlantis.Blog.DefaultImageHeaderURL');

		return $this->ImageHeader->GetURL($Size);
	}

	public function
	GetImageIconURL(string $Size='th'):
	string {
	/*//
	@date 2020-10-01
	//*/

		if(!isset($this->ImageIcon))
		return Nether\Option::Get('Atlantis.Blog.DefaultImageIconURL');

		return $this->ImageIcon->GetURL($Size);
	}

	public function
	ShouldAdultSafespace():
	bool {
	/*//
	@date 2020-06-18
	//*/

		return $this->OptAdult === static::AdultDisable;
	}

	public function
	ShouldAdultWarn():
	bool {
	/*//
	@date 2020-06-18
	//*/

		return $this->OptAdult !== static::AdultAllow;
	}

	public function
	ShouldAdultAllow():
	bool {
	/*//
	@date 2020-06-18
	if we should allow adult content to be shown. additional care needs
	to be taken in the application side to determine if it needs to
	apply warnings and whatnot in the ui.
	//*/

		return $this->OptAdult !== static::AdultDisable;
	}

	public function
	QueryBytesImages():
	int {
	/*//
	@date 2020-09-21
	//*/

		$Result = (
			(Nether\Database::Get()->NewVerse())
			->Select('UploadImages')
			->Fields('SUM(Bytes) AS TotalBytes')
			->Where('UserID=:UserID')
			->Query([
				':UserID' => $this->ID
			])
		);

		if(!$Result->IsOK())
		throw new Atlantis\Error\DatabaseQueryError($Result);

		return (Int)$Result->Next()->TotalBytes;
	}

	public function
	UpdateBytesImages():
	self {
	/*//
	@date 2020-10-18
	//*/

		$this->Update([
			'BytesImages' => $this->QueryBytesImages()
		]);

		return $this;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	static public function
	ExtendMainFields($SQL, string $TableAlias, string $FieldPrefix):
	void {
	/*//
	@date 2020-05-23
	//*/

		$SQL->Fields(Atlantis\Util::BuildPrefixedQueryFields(
			static::GetPropertyMap(),
			$TableAlias, $FieldPrefix
		));

		return;
	}

	static public function
	ExtendQueryJoins($SQL, string $TableAlias='Main', string $FieldPrefix=''):
	void {
	/*//
	@date 2020-05-23
	//*/

		$SQL
		->Join("UploadImages {$FieldPrefix}UII ON {$TableAlias}.ImageIconID={$FieldPrefix}UII.ID")
		->Join("UploadImages {$FieldPrefix}UIH ON {$TableAlias}.ImageHeaderID={$FieldPrefix}UIH.ID")
		->Join("AccountPlans {$FieldPrefix}UAP ON {$TableAlias}.AccountPlanID={$FieldPrefix}UAP.ID");

		Atlantis\Prototype\UploadImage::ExtendQueryJoins($SQL,"{$FieldPrefix}UII","{$FieldPrefix}UII_");
		Atlantis\Prototype\UploadImage::ExtendQueryJoins($SQL,"{$FieldPrefix}UIH","{$FieldPrefix}UIH_");
		Atlantis\Prototype\AccountPlan::ExtendQueryJoins($SQL,"{$FieldPrefix}UAP","{$FieldPrefix}UAP_");

		return;
	}

	static public function
	ExtendQueryFields($SQL, string $TablePrefix='', string $FieldPrefix=''):
	void {
	/*//
	@date 2020-05-23
	//*/

		Atlantis\Prototype\UploadImage::ExtendMainFields($SQL,"{$FieldPrefix}UII","{$FieldPrefix}UII_");
		Atlantis\Prototype\UploadImage::ExtendMainFields($SQL,"{$FieldPrefix}UIH","{$FieldPrefix}UIH_");
		Atlantis\Prototype\AccountPlan::ExtendMainFields($SQL,"{$FieldPrefix}UAP","{$FieldPrefix}UAP_");

		Atlantis\Prototype\UploadImage::ExtendQueryFields($SQL,"{$FieldPrefix}UII","{$FieldPrefix}UII_");
		Atlantis\Prototype\UploadImage::ExtendQueryFields($SQL,"{$FieldPrefix}UIH","{$FieldPrefix}UIH_");
		Atlantis\Prototype\AccountPlan::ExtendQueryFields($SQL,"{$FieldPrefix}UAP","{$FieldPrefix}UAP_");

		return;
	}

	static protected function
	FindExtendOptions($Opt):
	array {
	/*//
	@date 2018-06-08
	//*/

		return [
			'OptAllowSeen' => NULL
		];
	}

	static protected function
	FindApplyFilters($Opt,$SQL):
	void {
	/*//
	@date 2018-06-08
	//*/

		if($Opt->OptAllowSeen !== NULL)
		$SQL->Where('Main.OptAllowSeen=:OptAllowSeen');

		return;
	}

	static protected function
	FindApplySorts($Opt,$SQL):
	void {
	/*//
	@date 2018-06-08
	//*/

		switch($Opt->Sort) {
			case 'seen-az':
				$SQL->Sort('Main.TimeSeen',$SQL::SortAsc);
			break;
			case 'seen-za':
				$SQL->Sort('Main.TimeSeen',$SQL::SortDesc);
			break;
		}

		return;
	}

	////////////////////////////////////////////////////////////////
	// User Session API ////////////////////////////////////////////

	public function
	GetSessionHash():
	string {
	/*//
	@date 2017-02-10
	get the current session hash allowing for shifting sands.
	//*/

		if(!isset($this->PSand))
		throw new Exception('cannot generate hash from safety instance');

		return hash('sha512',"{$this->PHash}:{$this->PSand}");
	}

	public function
	IsValidPassword(string $Password):
	bool {
	/*//
	@date 2017-02-11
	does the specified password match the one belonging to this user?
	//*/

		$Valid = FALSE;
		$Algo = Nether\Option::Get('Atlantis.User.Password.Algo');

		////////

		if(!isset($this->PHash))
		throw new Exception('cannot validate hash from saftey instance');

		// using the php password api

		if(strpos($this->PHash,'$') === 0)
		$Valid = password_verify($Password,$this->PHash);

		// falling back to the old old old.

		else
		$Valid = (hash('sha512',$Password) === $this->PHash);

		// if the password needs rehashed because we changed the server
		// settings then lets do it now since we have it in our grasp.

		if($Valid && password_needs_rehash($this->PHash,$Algo))
		$this->Update([ 'PHash' => password_hash($Password,$Algo) ]);

		return $Valid;
	}

	public function
	IsSeenAllowed():
	bool {
	/*//
	@date 2021-04-16
	//*/

		return (bool)$this->OptAllowSeen;
	}

	public function
	UsesThirdPartyAuth():
	bool {
	/*//
	@date 2021-04-16
	//*/

		return ($this->AuthGithubID || $this->AuthTwitterID);
	}

	static public function
	FetchSession():
	?self {
	/*//
	@date 2017-02-09
	fetch the currently active session
	//*/

		return static::GetSession(TRUE) ?? static::GetSession(FALSE);
	}

	static public function
	GetSession(bool $Overshadowed=FALSE):
	?self {
	/*//
	@date 2017-02-09
	return the user that is currently logged in to the specified session. it
	will pull either the normal session or the overshadow.
	//*/

		$Data = NULL;
		$User = NULL;
		$CName = Nether\Option::Get('Atlantis.User.Cookie.Name');

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
		if(!($User = static::GetByID($Data[1],FALSE)))
		return NULL;

		/** @var Atlantis\Prototype\User $User */

		// not if they are banned
		if($User->IsBanned())
		return NULL;

		// see that the user validates.
		if($User->GetSessionHash() !== $Data[2])
		return NULL;

		// so we're good.
		return $User;
	}

	static public function
	DestroySession():
	void {
	/*//
	@date 2017-02-11
	kill the login session.
	//*/

		$CName = Nether\Option::Get('Atlantis.User.Cookie.Name');
		$CPath = Nether\Option::Get('Atlantis.User.Cookie.Path');
		$CDomain = Nether\Option::Get('Atlantis.User.Cookie.Domain');

		// first log out of an overshadow if it exists.

		if(array_key_exists("{$CName}-os",$_COOKIE)) {
			setcookie("{$CName}-os",'',(-1),$CPath,$CDomain);
			return;
		}

		// then log out of the real session.

		setcookie($CName,'',(-1),$CPath,$CDomain);
		return;
	}

	static public function
	LaunchSession(self $User, bool $Overshadow=FALSE):
	void {
	/*//
	@date 2017-02-09
	set a user to be logged in.
	//*/

		$CName = Nether\Option::Get('Atlantis.User.Cookie.Name');
		$CPath = Nether\Option::Get('Atlantis.User.Cookie.Path');
		$CDomain = Nether\Option::Get('Atlantis.User.Cookie.Domain');

		if($Overshadow)
		$CName .= '-os';

		setcookie(
			$CName,
			sprintf(
				'%s:%s',
				base_convert($User->ID,10,36),
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
		return static::GetByID($Val);

		// if it looks like an email look it up by email.
		if(strpos($Val,'@') !== FALSE)
		return static::GetByEmail($Val);

		// fall back to looking up by username.
		return static::GetByAlias($Val);
	}

	static public function
	GetByFieldValue(string $Field, string $Value, string $Comp='LIKE'):
	?self {
	/*//
	@date 2020-10-23
	return the specified user by the specified field with the specified value.
	//*/

		$Comp = strtoupper($Comp);
		$SQL = NULL;

		////////

		if(!array_key_exists($Field,static::$PropertyMap))
		throw new Exception('You asked for an invalid field.');

		if($Comp !== '=' && $Comp !== 'LIKE')
		throw new Exception('You asked for an invalid comparison.');

		////////

		$SQL = (
			(Nether\Database::Get()->NewVerse())
			->Select(sprintf('%s Main',static::$Table))
			->Fields('Main.*')
			->Where(sprintf('Main.%s %s :Value',$Field,$Comp))
			->Limit(1)
		);

		static::ExtendQueryJoins($SQL);
		static::ExtendQueryFields($SQL);

		$Result = $SQL->Query([ ':Value' => $Value ]);

		if(!$Result->IsOK())
		throw new Exception("GetByFieldValue failed ({$Field},{$Value})");

		if(!$Result->GetCount())
		return NULL;

		return (new static($Result->Next()));
	}

	static public function
	GetByAlias(string $Alias):
	?self {
	/*//
	@date 2020-10-23
	return the specified user looking up by user alias.
	//*/

		return static::GetByFieldValue('Alias',$Alias);
	}

	static public function
	GetByEmail(string $Email):
	?self {
	/*//
	@date 2020-10-23
	return the specified user looking up by email.
	//*/

		return static::GetByFieldValue('Email',$Email);
	}

	static public function
	GetByGithubID(string $GithubID):
	?self {
	/*//
	@date 2020-10-23
	return the specified user looking up by github auth id.
	//*/

		return static::GetByFieldValue('AuthGithubID',$GithubID);
	}

	static public function
	GetByTwitterID(string $TwitterID):
	?self {
	/*//
	@date 2020-10-23
	return the specified user looking up by twitter auth id.
	//*/

		return static::GetByFieldValue('AuthTwitterID',$TwitterID);
	}

	////////////////////////////////////////////////////////////////
	// User Creation API ///////////////////////////////////////////

	static public function
	Insert($Opt):
	Atlantis\Prototype {
	/*//
	@date 2017-02-08
	//*/

		$Opt = new Nether\Object\Mapped($Opt,[
			// fields used by the query.
			'TimeCreated'   => time(),
			'TimeSeen'      => 0,
			'TimeBanned'    => 0,
			'Enabled'       => 1,
			'UUID'          => Ramsey\Uuid\Uuid::UUID4()->ToString(),
			'Alias'         => NULL,
			'Email'         => NULL,
			'PHash'         => NULL,
			'PSand'         => NULL,
			'AccountPlanID' => 1,
			'OptAdult'      => 0,
			'BytesImages'   => 0,
			// fields used to generate data.
			'Password1'     => NULL,
			'Password2'     => NULL
		]);

		static::Insert_ValidateAlias($Opt);
		static::Insert_ValidateEmail($Opt);

		if($Opt->PHash === NULL && $Opt->PSand === NULL)
		static::Insert_ValidatePassword($Opt);

		return parent::Insert($Opt);
	}

	static public function
	Insert_ValidateAlias($Opt):
	void {
	/*//
	@date 2017-02-08
	handle validation of the user alias. if the validation fails it throws
	an exception. if it succeeds nothing special happens.
	//*/

		// make sure it has a minimum length.
		if(strlen($Opt->Alias) < 3)
		throw new Atlantis\Error\UserAliasInvalid;

		// make sure it does not already exist.
		if(static::GetByAlias($Opt->Alias) !== NULL)
		throw new Atlantis\Error\UserAliasNotUnique;

		return;
	}

	static public function
	Insert_ValidateEmail($Opt):
	void {
	/*//
	@date 2017-02-08
	handle validation of the user email. if the validation fails it throws an
	exception. if it succeeds nothing special happens.
	//*/

		// make sure it looks like an email.
		if(!filter_var($Opt->Email,FILTER_VALIDATE_EMAIL))
		throw new Atlantis\Error\UserEmailInvalid;

		// make sure it does not already exist.
		if(static::GetByEmail($Opt->Email) !== NULL)
		throw new Atlantis\Error\UserEmailNotUnique;

		return;
	}

	static public function
	Insert_ValidatePassword($Opt):
	void {
	/*//
	@date 2017-02-08
	handle validation cases about the user password. if the validation fails
	it throws an exception. if the validation succeeds then the PHash and
	PSand fields will be filled in on the Input object.
	//*/

		// require passwords be a certain length.
		if(strlen($Opt->Password1) < 8)
		throw new Atlantis\Error\UserPasswordInvalid;

		// if they didn't even supply password.
		if(!$Opt->Password1 || !$Opt->Password2)
		throw new Atlantis\Error\UserPasswordConfirmFail;

		// if they failed at typing it twice.
		if($Opt->Password1 !== $Opt->Password2)
		throw new Atlantis\Error\UserPasswordConfirmFail;

		////////

		// hash the password for storage. we will be unable to retrieve it.
		// if it is forgotten it will have to be reset.

		$Opt->PHash = password_hash(
			$Opt->Password1,
			Nether\Option::Get('Atlantis.User.Password.Algo')
		);

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

	////////////////////////////////////////////////////////////////
	// Cached Object API ///////////////////////////////////////////

	static protected
	$CacheKeyFormat = 'atlantis-user-%d';

	static public function
	GetCacheKey(int $ID):
	string {
	/*//
	@date 2021-06-08
	//*/

		return sprintf(static::$CacheKeyFormat,$ID);
	}

	static public function
	BuildObjectResult(array $Raw, string $Prefix, bool $Saftey=TRUE):
	static {
	/*//
	@date 2021-06-08
	//*/

		// even though we have queried and returned a full dataset
		// needed to construct a user object, we are going to check
		// if we have one already built in cache. this will make all
		// user objects built this way all point to the exact same
		// reference.

		$CacheKey = static::GetCacheKey($Raw["{$Prefix}ID"]);
		$Cache = Nether\Stash::Get('Atlantis.Cache.GlobalMemory');

		if($Cache instanceof Nether\Cache\Manager) {
			$User = $Cache->Get($CacheKey);

			if($User instanceof Atlantis\Prototype\User) {
				return $User;
			}
		}

		////////

		$User = new static(
			Atlantis\Util::StripPrefixedQueryFields($Raw, $Prefix),
			$Saftey
		);

		$Cache->Set($CacheKey,$User);

		return $User;
	}

}
