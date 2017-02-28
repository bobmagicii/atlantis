<?php

namespace Atlantis\Packages;
use \Nether as Nether;

trait CacheInterface {
/*//
this trait defines the interface required for an object to be interactable with
our cache system.
//*/

	protected
	$Cached = FALSE;
	/*//
	@type Boolean
	describe if this object was fetched from the cache or built straight off
	the database.
	//*/

	public function
	FromCache():
	Bool {
	/*//
	ask this object if it was fetched from the cache or not.
	//*/

		return $this->Cached;
	}

	public function
	SetCached(Bool $State):
	self {
	/*//
	tell this object if it was cached. while it provides public access to
	the value, its purpose is to only be used by the functions you write
	to fetch data from the cache and database. if you find it in cached you
	should set this true, if you had to pull it from the db you should set
	this false.
	//*/

		$this->Cached = $State;
		return $this;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	abstract public function
	Cache():
	self;
	/*//
	this method is for putting the current object into the distributed
	cache system. you should define it to set the various keys you may
	need, and then call it in your search methods.
	//*/

	abstract public function
	Flush():
	self;
	/*//
	this method is for removing the current object from the distributed
	cache system. you should define it to drop the various keys you
	may have added, and then call it in your update methods.
	//*/

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	static public function
	GetFromCache(String $Key):
	?self {
	/*//
	@date 2017-02-11
	see if this blog has been cached return it if so null if not.
	//*/

		$Result = Nether\Stash::Get(
			Nether\Option::Get('cache-stash-name')
		)->Get($Key);

		if(!$Result)
		return NULL;

		return $Result->Value;
	}

}
