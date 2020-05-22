<?php

namespace Atlantis\Site;

use
\Atlantis as Atlantis,
\Nether   as Nether;

class PublicAPI
extends PublicWeb {
/*//
@date 2020-05-22
//*/

	const
	ErrMethodNotFound = -1;

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	public function
	__Construct(Atlantis\Site\Router $Router) {
		parent::__Construct($Router);

		($this->Surface)
		->Set('Error',0)
		->Set('Message','OK')
		->SetTheme('json');

		return;
	}

	public function
	Index(String $Call):
	Void {

		$Verb = 'GET';
		$Method = NULL;

		if(array_key_exists('REQUEST_METHOD',$_SERVER))
		$Verb = $_SERVER['REQUEST_METHOD'];

		// see if we have a verb specific method.
		// if not, try a non-verb specific method.

		$Method = Atlantis\Util\Filters::MethodFromAlias("{$Call}-{$Verb}");

		if(!method_exists($this,$Method)) {
			$Method = Atlantis\Util\Filters::MethodFromAlias($Call);

			if(!method_exists($this,$Method)) {
				header("HTTP/1.1 404 Not Found");
				$this->Quit(
					static::ErrMethodNotFound,
					'Requested Method Not Found.'
				);
			}
		}

		$this->{$Method}(...func_get_args());
		return;
	}

	public function
	Quit(Int $ErrNum=0, String $Message='OK'):
	Void {
	/*//
	@date 2020-05-22
	so long and thanks for all the fish.
	//*/

		($this->Surface)
		->Set('Error',$ErrNum)
		->Set('Message',$Message);

		exit($ErrNum);
		return;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	protected function
	SetLocation(String $Input):
	self {
	/*//
	@date 2020-05-22
	//*/

		($this->Surface)
		->Set('Location',$Input);

		return $this;
	}

	protected function
	SetPayload($Input):
	self {
	/*//
	@date 2020-05-22
	//*/

		($this->Surface)
		->Set('Payload',$Input);

		return $this;
	}

}
