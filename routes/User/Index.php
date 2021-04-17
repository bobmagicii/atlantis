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

	protected function
	OnReady():
	void {
	/*//
	@date 2021-04-16
	//*/

		($this->Get)
		->Page(Atlantis\Util\Filters::PageNumberCallable());

		return;
	}

	public function
	Index(string $Alias):
	void {

		$Profile = NULL;
		$Scope = [];

		if(!($Profile = Atlantis\Prototype\User::GetByAlias($Alias)))
		$this->Area('error/not-found')->Quit(404);

		////////

		$Scope['Profile'] = $Profile;
		$Scope['Blogs'] = $Profile->GetBlogs();
		$Scope['RecentPosts'] = Atlantis\Prototype\BlogPost::Find([
			'UserID' => $Profile->ID,
			'Sort'   => 'newest',
			'Limit'  => 6,
			'Page'   => $this->Get->Page
		]);

		////////

		$this->Area('user/index',$Scope);
		return;
	}

}
