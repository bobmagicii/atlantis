<?php

namespace Atlantis\Site;
use \Atlantis as Atlantis;

class ProtectedAPI
extends PublicAPI {

	const
	ErrForbidden = -200;

	public function
	__Construct(Atlantis\Site\Router $Router) {
		parent::__Construct($Router);

		if(!$this->User)
		$this
		->SetLocation(sprintf(
			'/login?goto=%s',
			$this->GetEncodedURL()
		))
		->Quit(
			static::ErrForbidden,
			'This endpoint requires a user session.'
		);

		return;
	}

}
