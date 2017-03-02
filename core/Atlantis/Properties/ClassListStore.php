<?php

namespace Atlantis\Properties;
use \Atlantis as Atlantis;

trait ClassListStore {
/*//
provides storage and formatting of strings designed to be used as html/css
classes in widgets and such.
//*/

	protected
	$ClassListStore = NULL;
	/*//
	@type Atlantis\Datastore
	//*/

	public function
	GetClasses():
	Atlantis\Datastore {
	/*//
	fetch the class store. creates it if it has not been initialised yet.
	//*/

		if(!$this->ClassListStore)
		$this->ClassListStore = new Atlantis\Datastore;

		return $this->ClassListStore;
	}

	public function
	GetClassesAttrString():
	String {
	/*//
	fetch a string suitable for html class attribute where each class is
	delimited by a space.
	//*/

		if(!$this->ClassListStore)
		return '';

		return implode(
			' ',
			$this->GetClasses()->GetData()
		);
	}

}
