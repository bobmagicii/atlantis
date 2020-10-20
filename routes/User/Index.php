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
		$Scope = [];

		if(!($Profile = Atlantis\Prototype\User::GetByAlias($Alias)))
		$this->Area('error/not-found')->Quit(404);

		////////

		$Scope['Profile'] = $Profile;
		$Scope['Blogs'] = $Profile->GetBlogs();
		$Scope['RecentPosts'] = Atlantis\Prototype\BlogPost::Find([
			'UserID' => $Profile->ID,
			'Sort'   => 'newest'
		]);

		////////

		$this->Area('user/index',$Scope);
		return;
	}

}
