<?php

namespace Atlantis\Element;
use \Atlantis as Atlantis;
use \Nether   as Nether;

class PostListingSidebar
extends Atlantis\Element {

	protected
	$Area = 'element/post-listing-sidebar';

	use
	Atlantis\Properties\Title,
	Atlantis\Properties\Subtitle,
	Atlantis\Properties\ItemListStore;

}
