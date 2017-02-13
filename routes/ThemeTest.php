<?php

namespace Routes;
use \Atlantis as Atlantis;

use \Exception as Exception;

class ThemeTest
extends Atlantis\Site\PublicWeb {

	public function
	Index($Area):
	Void {

		switch($Area) {

			case 'blog-two-col':
			case 'totally-legit-theme-component':
			$this->Surface->Area("test/{$Area}");
			break;

			default:
			$this->Surface->Area('error/not-found');
			break;
		}

		return;
	}

}
