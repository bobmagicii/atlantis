<?php

namespace Atlantis\Properties;

trait Subtitle {
/*//
provide a title property to any object that requests to have one with get, set,
and an actionable method.
//*/

	protected
	$Subtitle = '';

	////////
	////////

	public function
	GetSubtitle():
	String {

		return $this->Subtitle;
	}

	public function
	HasSubtitle():
	Bool {

		return (is_string($this->Subtitle) && strlen($this->Subtitle));
	}

	public function
	SetSubtitle(String $Subtitle):
	self {

		$this->Subtitle = trim($Subtitle);
		return $this;
	}

	////////
	////////

	public function
	Subtitle(?String $Subtitle=NULL) {

		if($Subtitle === NULL)
		return $this->GetSubtitle();

		else
		return $this->SetSubtitle($Subtitle);
	}

}
