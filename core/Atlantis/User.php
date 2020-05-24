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

		// provide a way to still use user objects but omit various
		// personal data that is not needed outside of auth or
		// valid session things.

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

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	public function
	GetBlogs():
	Atlantis\Struct\SearchResult {
	/*//
	@date 2020-05-23
	get a list of blogs this user has access to.
	//*/

		return Atlantis\Prototype\BlogUser::Find([
			'UserID' => $this->ID,
			'Sort'   => 'blog-title-az'
		]);
	}

	public function
	GetURL():
	String {
	/*//
	@date 2020-05-23
	get the url to view this user's profile.
	//*/

		$Router = Nether\Stash::Get('Router');

		return sprintf(
			'%s://%s/~%s/',
			$Router->GetProtocol(),
			$Router->GetFullDomain(),
			$this->Alias
		);
	}
}
