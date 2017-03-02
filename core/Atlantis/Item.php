<?php

namespace Atlantis;
use \Atlantis as Atlantis;
use \Nether   as Nether;

class Item {
/*//
a class which makes it impossible to ask for properties which do not exist.
if you try, it just returns null back as the value.
//*/

	use
	Atlantis\Properties\ID,
	Atlantis\Properties\Title,
	Atlantis\Properties\Subtitle,
	Atlantis\Properties\URL,
	Atlantis\Properties\ImageURL,
	Atlantis\Properties\ClassListStore;

	public function
	__construct($Opt=NULL) {

		$Opt = new Nether\Object($Opt,[
			'ID'       => '',
			'Title'    => '',
			'Subtitle' => '',
			'URL'      => '',
			'ImageURL' => '',
			'Classes'  => []
		]);

		if(!is_array($Opt->Classes))
		$Opt->Classes = [];

		////////

		$this->ID = $Opt->ID;
		$this->Title = $Opt->Title;
		$this->Subtitle = $Opt->Subtitle;
		$this->URL = $Opt->URL;
		$this->ImageURL = $Opt->ImageURL;

		$this->GetClasses()
		->SetData($Opt->Classes);

		return;
	}

}
