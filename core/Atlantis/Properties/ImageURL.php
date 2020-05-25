<?php

namespace Atlantis\Properties;

trait ImageURL {
/*//
provide a url property to an image that requests to have one with get, set,
and an actionable method.
//*/

	protected ?String
	$ImageURL = NULL;

	////////
	////////

	public function
	GetImageURL():
	String {

		return $this->ImageURL;
	}

	public function
	HasImageURL():
	Bool {

		return (is_string($this->ImageURL) && strlen($this->ImageURL));
	}

	public function
	SetImageURL(?String $ImageURL):
	self {

		$this->ImageURL = $ImageURL;
		return $this;
	}

	////////
	////////

	public function
	ImageURL(?String $ImageURL=NULL) {

		if($ImageURL === NULL)
		return $this->GetImageURL();

		else
		return $this->SetImageURL($ImageURL);
	}

}
