<?php

namespace Atlantis\Properties;

trait Title {
/*//
provide a title property to any object that requests to have one with get, set,
and an actionable method.
//*/

	protected
	$Title = '';

	////////
	////////

	public function
	GetTitle():
	String {

		return $this->Title;
	}

	public function
	HasTitle():
	Bool {

		return (is_string($this->Title) && strlen($this->Title));
	}

	public function
	SetTitle(String $Title):
	self {

		$this->Title = $Title;
		return $this;
	}

	////////
	////////

	public function
	Title(?String $Title=NULL) {

		if($Title === NULL)
		return $this->GetTitle();

		else
		return $this->SetTitle($Title);
	}

}
