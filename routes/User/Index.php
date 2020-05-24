<?php

namespace Routes\User;
use \Atlantis as Atlantis;
use \Routes   as Routes;
use \Nether   as Nether;

use Atlantis\Site\Router       as Router;
use Nether\Avenue\RouteHandler as Handler;
use Exception                  as Exception;

class Index
extends Atlantis\Site\PublicWeb {

	public function
	Index(String $Alias):
	Void {

		$Profile = NULL;

		if(!($Profile = Atlantis\User::GetByAlias($Alias)))
		$this->Area('error/not-found')->Quit(404);

		$Promo = (new Atlantis\Element\PagePromo)
		->SetTitle($Profile->Alias)
		->SetSubtitle("User Profile");

		////////

		($this->Surface)
		->Set('Page.Promo',$Promo)
		->Set('User.Profile',$Profile)
		->Area('user/index');

		return;
	}

}
