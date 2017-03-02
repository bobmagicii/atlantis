<?php

namespace Atlantis\Properties;

trait ID {
/*//
provide a id property to any object that requests to have one with get, set,
and an actionable method.
//*/

	protected
	$ID = '';

	////////
	////////

	public function
	GetID():
	String {

		return $this->ID;
	}

	public function
	HasID():
	Bool {

		return (is_string($this->ID) && strlen($this->ID));
	}

	public function
	SetID(String $ID):
	self {

		$this->ID = $ID;
		return $this;
	}

	////////
	////////

	public function
	ID(?String $ID=NULL) {

		if($ID === NULL)
		return $this->GetID();

		else
		return $this->SetID($ID);
	}

}
