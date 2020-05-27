<?php

namespace Atlantis\Element;
use \Atlantis as Atlantis;
use \Nether   as Nether;

class BlogListing
extends Atlantis\Element {

	protected
	$Area = 'element/blog-listing';

	use
	Atlantis\Properties\Title,
	Atlantis\Properties\ItemListStore;

}
