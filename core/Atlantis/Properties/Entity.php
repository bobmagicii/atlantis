<?php

namespace Atlantis\Properties;

trait Entity {
/*//
provide a id property to any object that requests to have one with get, set,
and an actionable method.
//*/

	protected
	$Object = NULL;

	////////
	////////

	public function
	GetObject() {
	/*//
	@return Object
	//*/

		return $this->Object;
	}

	public function
	HasObject():
	Bool {

		return is_object($this->Object);
	}

	public function
	SetObject($Object):
	self {
	/*//
	@argv Object $Object
	//*/

		if(is_object($Object))
		$this->Object = $Object;

		return $this;
	}

	////////
	////////

	public function
	Object($Object=NULL) {

		if($Object === NULL)
		return $this->GetObject();

		else
		return $this->SetObject($Object);
	}

}
