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

}
