<?php

namespace Atlantis\Element;
use \Atlantis as Atlantis;
use \Nether   as Nether;

class PostListing
extends Atlantis\Element {

	protected
	$Area = 'element/post-listing';

	use
	Atlantis\Properties\Title,
	Atlantis\Properties\Subtitle,
	Atlantis\Properties\ItemListStore;

	protected bool
	$ShowSourceBlog = TRUE;

	public function
	GetShowSourceBlog():
	bool {
	/*//
	@date 2021-04-09
	//*/

		return $this->ShowSourceBlog;
	}

	public function
	SetShowSourceBlog(bool $Val):
	static {
	/*//
	@date 2021-04-09
	//*/

		$this->ShowSourceBlog = $Val;
		return $this;
	}

}
