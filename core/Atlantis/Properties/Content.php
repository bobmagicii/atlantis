<?php

namespace Atlantis\Properties;

trait Content {
/*//
provide a content property to any object that requests to have one with get,
set, and an actionable method.
//*/

	protected
	$Content = '';

	////////
	////////

	public function
	GetContent():
	String {

		return $this->Content;
	}

	public function
	HasContent():
	Bool {

		return (is_string($this->Content) && strlen($this->Content));
	}

	public function
	SetContent(String $Content):
	self {

		$this->Content = $Content;
		return $this;
	}

	////////
	////////

	public function
	Content(?String $Content=NULL) {

		if($Title === NULL)
		return $this->GetContent();

		else
		return $this->SetContent($Content);
	}

}
