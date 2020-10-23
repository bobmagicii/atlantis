<?php

namespace Atlantis\Struct;

class SitemapLocation {

	public
	String $URL;

	public
	String $Date;

	public
	Float $Priority;

	public function
	__Construct(String $URL, String $Date, Float $Priority) {

		$this->URL = $URL;
		$this->Date = $Date;
		$this->Priority = $Priority;

		return;
	}

}
