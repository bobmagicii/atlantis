<?php

namespace Atlantis\Struct;

use
\Atlantis as Atlantis;

class PopularPost {

	public
	Atlantis\Prototype\BlogPost $Post;

	public
	Int $Views = 0;

	public function
	__Construct(Atlantis\Prototype\BlogPost $Post, Int $Views) {

		$this->Views = $Views;
		$this->Post = $Post;

		return;
	}

}
