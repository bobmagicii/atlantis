<?php

namespace Atlantis\Site;
use \Atlantis as Atlantis;
use \Nether   as Nether;

class Router
extends Nether\Avenue\Router {

	public function
	__Construct($Opt=NULL) {
		parent::__Construct($Opt);

		$Shortcuts = Nether\Option::Get('nether-avenue-condition-shortcuts');
		$Shortcuts['{&}'] = sprintf(
			'(?:(?:.+?\.)?%s)',
			str_replace('.','\.',Nether\Option::Get('Atlantis.Domain'))
		);
		Nether\Option::Set('nether-avenue-condition-shortcuts',$Shortcuts);

		(static function($Router){
			require(sprintf(
				'%s/conf/routes.conf.php',
				ProjectRoot
			));
			return;
		})($this);

		return;
	}

	public function
	Register(String $Name, String $Request, String $Pattern, String $Handler):
	self {

		$this->AddRoute($Request,$Handler);
		Atlantis\Site\Endpoint::Register($Name,$Pattern);

		return $this;
	}

}
