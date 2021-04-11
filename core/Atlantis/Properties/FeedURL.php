<?php

namespace Atlantis\Properties;

trait FeedURL {
/*//
provide a url property to any object that requests to have one with get, set,
and an actionable method.
//*/

	protected
	$FeedURL = '';

	////////
	////////

	public function
	GetFeedURL():
	string {

		return $this->FeedURL;
	}

	public function
	HasFeedURL():
	bool {

		return (is_string($this->FeedURL) && strlen($this->FeedURL));
	}

	public function
	SetFeedURL(string $FeedURL):
	self {

		$this->FeedURL = $FeedURL;
		return $this;
	}

	////////
	////////

	public function
	FeedURL(?string $FeedURL=NULL) {

		if($FeedURL === NULL)
		return $this->GetFeedURL();

		else
		return $this->SetFeedURL($FeedURL);
	}

}
