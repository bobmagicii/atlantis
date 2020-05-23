<?php

namespace Atlantis;

use
\Atlantis as Atlantis,
\Nether   as Nether;

use \Exception as Exception;

class User
extends Nether\Auth\User {

	public function
	__Construct($Input, Bool $MakeSafer=FALSE) {

		if($MakeSafer) {
			if(is_array($Input))
			unset($Input['PHash'],$Input['PSand'],$Input['Email']);
			elseif(is_object($Input))
			unset($Input->PHash,$Input->PSand,$Input->Email);
		}

		parent::__Construct($Input);
		return;
	}

	public function
	__Ready():
	Void {

		return;
	}

	public function
	GetBlogs():
	Atlantis\Struct\SearchResult {

		return Atlantis\Prototype\BlogUser::Find([
			'UserID' => $this->ID,
			'Sort'   => 'blog-title-az'
		]);
	}

}
