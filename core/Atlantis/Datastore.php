<?php

namespace Atlantis;
use \Atlantis as Atlantis;
use \Nether   as Nether;

class Datastore
extends Nether\Object\Datastore {
/*//
this class has been extended in theme with the methods being styled as actions
just like in the original datastore.
//*/

	//////////////////////////////////////////////////////////////////////////
	// search result methods.

	protected
	$Found = 0;

	public function
	Found(?Int $Value=NULL) {
	/*//
	return the number of found objects (which must be set by your search
	method where you generate this datastore) or the number of objects in this
	datastore if it was never told. returns an integer in get mode and the
	object itself in set mode.
	//*/

		if($Value === NULL) {
			if($this->Found > 0)
			return $this->Found;

			else
			return $this->Count();
		}

		$this->Found = $Value;
		return $this;
	}

	//////////////////////////////////////////////////////////////////////////

	protected
	$Limit = 0;

	public function
	Limit(?Int $Value=NULL) {
	/*//
	return the number of items per page that this datastore represents (which
	must be set by your search method where you generate this datastore).
	returns an int in get mode and the object itself in set mode.
	//*/

		if($Value === NULL)
		return $this->Found;

		$this->Limit = $Value;
		return $this;
	}

	//////////////////////////////////////////////////////////////////////////

	protected
	$Page = 1;

	public function
	Page(?Int $Value=NULL) {
	/*//
	return the page number this datastore represents (which must be set by
	your search method where you generate this datastore). returns an int in
	get mode and the object itself in set mode.
	//*/

		if($Value === NULL)
		return $this->Page;

		$this->Page = Atlantis\Util\Filters::PageNumber($Value);
		return $this;
	}

	//////////////////////////////////////////////////////////////////////////

}
