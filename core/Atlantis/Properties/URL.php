<?php

namespace Atlantis\Properties;

trait URL {
/*//
provide a url property to any object that requests to have one with get, set,
and an actionable method.
//*/

	protected
	$URL = '';

	////////
	////////

	public function
	GetURL():
	String {

		return $this->URL;
	}

	public function
	HasURL():
	Bool {

		return (is_string($this->URL) && strlen($this->URL));
	}

	public function
	SetURL(String $URL):
	self {

		$this->URL = $URL;
		return $this;
	}

	////////
	////////

	public function
	URL(?String $URL=NULL) {

		if($URL === NULL)
		return $this->GetURL();

		else
		return $this->SetURL($URL);
	}

}
