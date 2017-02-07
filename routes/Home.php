<?php

namespace Routes;
use \Atlantis as Atlantis;
use \Nether   as Nether;
use \Routes   as Routes;

class Home
extends Atlantis\Site\PublicWeb {

	public function Index() {
		echo "Hello World!";
		return;
	}

	public function About() {
		echo "About Page!";
		return;
	}

	public function NotFound() {
		header("404 Not Found");
		echo "404 - Not Found";
		return;
	}

}
