<?php

namespace Atlantis\Element;
use \Atlantis as Atlantis;

class PagePromo
extends Atlantis\Element {
/*//
this widget is to provide a horizontal stripe across the page between the main
top navigation and the main page content. generally it is purely for aestetic
purposes.
//*/

	protected
	$Area = 'element/page-promo';

	use
	Atlantis\Properties\Title,
	Atlantis\Properties\Subtitle,
	Atlantis\Properties\URL,
	Atlantis\Properties\ImageURL,
	Atlantis\Properties\IconURL;

}
