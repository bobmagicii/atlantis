<?php

namespace Atlantis\Struct;

use Atlantis;
use Nether;

class PopularBlog {

	public
	Atlantis\Prototype\Blog $Blog;

	public
	Int $Views = 0;

	public function
	__Construct(Atlantis\Prototype\Blog $Blog, Int $Views) {

		$this->Blog = $Blog;
		$this->Views = $Views;

		return;
	}

}
