<?php

namespace Atlantis;

use
\Atlantis as Atlantis,
\Nether   as Nether;

use
\Exception as Exception,
\JsonSerializable as JsonSerializable;

class User
extends Nether\Auth\User
implements JsonSerializable {

	public
	String $URL;

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

		$this->URL = $this->GetURL();

		return;
	}

	public function
	JsonSerialize():
	Array {
	/*//
	@date 2020-06-01
	@implements JsonSerializable
	//*/

		return [
			'ID'             => $this->ID,
			'UUID'           => $this->UUID,
			'Alias'          => $this->Alias,
			'URL'            => $this->URL,
			'TimeCreated'    => $this->TimeCreated,
			'TimeSeen'       => $this->TimeSeen
		];
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
	Atlantis\Site\Endpoint {
	/*//
	@date 2017-03-02
	get the url to view this blog post.
	//*/

		return Atlantis\Site\Endpoint::Get('Atlantis.User.Home',[
			'UserAlias' => $this->Alias
		]);
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	static protected function
	ExtendQueryJoins($SQL):
	Void {
	/*//
	@date 2020-05-23
	extension classes should override this method for use to join
	additional tables that may be needed for filters and sorts.
	//*/

		return;
	}

	static protected function
	ExtendQueryFields($SQL):
	Void {
	/*//
	@date 2020-05-23
	extension classes should override this method for use to include
	additional fields into selects from joined tables. it is provided
	as an optimisation for performing searches without bloating the
	result dataset with data you might use use in a specific case.
	//*/

		return;
	}

}
