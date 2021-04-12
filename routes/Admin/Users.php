<?php

namespace Routes\Admin;

use Atlantis;
use Nether;

use Atlantis\Struct\SearchResult;

class Users
extends Atlantis\Site\PrivateWeb {

	protected function
	OnReady():
	void {
	/*//
	@date 2021-04-11
	//*/

		($this->Get)
		->Page(Atlantis\Util\Filters::PageNumberCallable())
		->Sort(fn($Val)=> match($Val){
			'newest',
			'seen-az',
			'seen-za' => $Val,
			default => 'newest'
		});

		return;
	}

	public function
	Index():
	void {
	/*//
	@date 2021-04-11
	//*/

		$Area = 'admin/users/index';
		$Scope = new class {
			public SearchResult $Users;
			public string $Sort;
		};

		$Scope->Sort = $this->Get->Sort;
		$Scope->Users = Atlantis\Prototype\User::Find([
			'Sort'  => $this->Get->Sort,
			'Page'  => $this->Get->Page,
			'Limit' => 20
		]);

		$this->Area($Area,$Scope);
		return;
	}

}
