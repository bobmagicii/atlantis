<?php

namespace Atlantis\Properties;
use \Atlantis as Atlantis;

trait ItemListStore {
/*//
provides storage and formatting of strings designed to be used as html/css
classes in widgets and such.
//*/

	protected
	$ItemListStore = NULL;
	/*//
	@type Atlantis\Datastore
	//*/

	public function
	SetItemStore(Atlantis\Datastore $Input):
	static {

		$this->ItemListStore = $Input;
		return $this;
	}

	public function
	GetItemStore():
	Atlantis\Datastore {
	/*//
	fetch the class store. creates it if it has not been initialised yet.
	//*/

		if(!$this->ItemListStore)
		$this->ItemListStore = new Atlantis\Datastore;

		return $this->ItemListStore;
	}

}
