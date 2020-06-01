<?php

namespace Atlantis\Site;

use
\Atlantis as Atlantis,
\Nether   as Nether;

use
\ReflectionMethod as ReflectionMethod;

class PublicAPI
extends PublicWeb {
/*//
@date 2020-05-22
//*/

	const
	ErrMethodNotFound = -100;

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

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	final public function
	HelpGet():
	Void {
	/*//
	@date 2020-06-01
	a janky api describer method. self contained because i do not desire to
	pollute with over abstraction something i fully intend to replace once
	php 8 comes out and we have annotations.
	//*/

		$List = get_class_methods(static::class);
		$Output = [];

		$Match = NULL;
		$Inputs = NULL;
		$Method = NULL;
		$Key = NULL;
		$Val = NULL;

		$Reflect = NULL;
		$Verb = NULL;
		$Doc = NULL;
		$Vars = NULL;

		foreach($List as $Method) {
			$Reflect = new ReflectionMethod(static::class,$Method);

			if(!$Reflect->IsFinal())
			continue;

			if(!preg_match('/(.+?)([A-Z][a-z]+)$/',$Method,$Match))
			continue;

			$Doc = $Reflect->GetDocComment();
			$Match[1] = strtolower(preg_replace('/[A-Z]/','-$0',$Match[1]));
			$Match[1] = sprintf('%s/%s',dirname($this->Router->GetPath()),trim($Match[1],'-'));
			$Verb = strtoupper($Match[2]);

			$Output[$Match[1]][$Verb] = NULL;

			if($Doc) {
				$Vars = [];
				preg_match_all('/\@input ([^\h]+) ([^\h]+)$/ms',$Doc,$Inputs);

				foreach($Inputs[0] as $Key => $Val)
				$Vars[$Inputs[2][$Key]] = $Inputs[1][$Key];

				$Output[$Match[1]][$Verb] = count($Vars) ? $Vars : NULL;
			}

			ksort($Output[$Match[1]]);
		}

		ksort($Output);

		$this
		->SetPayload($Output)
		->Quit(0,'ヽ(~_~(・_・ )ゝ');

		return;
	}

}
