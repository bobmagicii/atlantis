<?php

namespace Atlantis\Properties;

trait IconURL {
/*//
provide a url property to an Icon that requests to have one with get, set,
and an actionable method.
//*/

	protected ?String
	$IconURL = NULL;

	////////
	////////

	public function
	GetIconURL():
	String {

		return $this->IconURL;
	}

	public function
	HasIconURL():
	Bool {

		return (is_string($this->IconURL) && strlen($this->IconURL));
	}

	public function
	SetIconURL(?String $IconURL):
	self {

		$this->IconURL = $IconURL;
		return $this;
	}

	////////
	////////

	public function
	IconURL(?String $IconURL=NULL) {

		if($IconURL === NULL)
		return $this->GetIconURL();

		else
		return $this->SetIconURL($IconURL);
	}

}
