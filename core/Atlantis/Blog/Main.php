<?php

namespace Atlantis\Blog;

class Main {

	static public
	$PropertyMap = [
		'blog_id'      => 'ID:int',
		'blog_title'   => 'Title',
		'blog_tagline' => 'Tagline'
	];

	////////
	////////

	protected
	$ID = 0;

	public function
	GetID():
	Int {

		return $this->ID;
	}

	////////
	////////

	protected
	$Title = '';

	public function
	GetTitle():
	String {

		return $this->Title;
	}

	public function
	SetTitle(String $Title):
	self {

		$this->Title = $Title;
		return $this;
	}

	////////
	////////

	protected
	$Tagline = '';

	public function
	GetTagline():
	String {

		return $this->Tagline;
	}

	public function
	SetTagline(String $Tagline):
	self {

		$this->Tagline = $Tagline;
		return $this;
	}

}
