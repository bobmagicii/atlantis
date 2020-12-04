<?php

namespace Atlantis\Site;

use Atlantis;
use Nether;

use ReflectionMethod;
use Exception;

class PublicAPI
extends PublicWeb {
/*//
@date 2020-05-22
//*/

	const
	ErrMethodNotFound = -100,
	ErrForbidden = -101;

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

		if($ErrNum !== 0 && $Message === 'OK') {
			$Attrib = NULL;
			$Message = 'Err';
			$Reflect = new ReflectionMethod(
				static::class,
				(new Exception)->GetTrace()[1]['function']
			);

			foreach($Reflect->GetAttributes('Atlantis\\Meta\\Error') as $Attrib) {
				$Meta = $Attrib->NewInstance();

				if($Meta->Code === $ErrNum) {
					$Message = $Meta->Message;
					break;
				}
			}
		}

		($this->Surface)
		->Set('Error',$ErrNum)
		->Set('Message',$Message);

		exit($ErrNum);
		return;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	protected function
	RequireUserSession():
	Void {
	/*//
	@date 2020-06-01
	provide a method to force a user session being required.
	//*/

		if($this->User)
		return;

		($this)
		->SetLocation(Atlantis\Site\Endpoint::Get('Atlantis.Login'))
		->Quit(
			static::ErrForbidden,
			'This endpoint requires a user session.'
		);

		return;
	}


	protected function
	RequireAdminSession():
	Void {
	/*//
	@date 2020-06-01
	provide a method to force a user session being required.
	//*/

		if($this->User && $this->User->IsAdmin())
		return;

		($this)
		->SetLocation(Atlantis\Site\Endpoint::Get('Atlantis.Login'))
		->Quit(
			static::ErrForbidden,
			'This endpoint requires an admin session.'
		);

		return;
	}

	protected function
	SetMessage(String $Input):
	self {
	/*//
	@date 2020-10-20
	//*/

		($this->Surface)
		->Set('Message',$Input);

		return $this;
	}

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

	public function
	HelpGet():
	Void {
	/*//
	@date 2020-12-03
	//*/


		$List = get_class_methods(static::class);
		$Output = [];

		$Method = NULL;
		$Verb = NULL;
		$Match = NULL;
		$Reflect = NULL;
		$Vars = NULL;

		foreach($List as $Method) {
			$Reflect = new ReflectionMethod(static::class,$Method);

			if(!$Reflect->IsFinal())
			continue;

			if(!preg_match('/(.+?)([A-Z][a-z]+)$/',$Method,$Match))
			continue;

			$Match[1] = strtolower(preg_replace('/[A-Z]/','-$0',$Match[1]));
			$Match[1] = sprintf('%s/%s',dirname($this->Router->GetPath()),trim($Match[1],'-'));
			$Verb = strtoupper($Match[2]);
			$Output[$Match[1]][$Verb] = NULL;
			$Vars = [ 'Info' => NULL, 'Args' => [], 'Errors' => [] ];

			$Attribs = $Reflect->GetAttributes();
			foreach($Attribs as $Attrib) {
				$Meta = $Attrib->NewInstance();

				if($Meta instanceof Atlantis\Meta\Parameter)
				$Vars['Args'][$Meta->Name] = $Meta->Type;

				elseif($Meta instanceof Atlantis\Meta\Error)
				$Vars['Errors'][$Meta->Code] = $Meta->Message;

				elseif($Meta instanceof Atlantis\Meta\Info)
				$Vars['Info'] = $Meta->Message;
			}

			ksort($Vars['Errors']);
			$Output[$Match[1]][$Verb] = count($Vars) ? $Vars : NULL;
		}

		ksort($Output);

		$this
		->SetPayload($Output)
		->Quit(0,'ヽ(~_~(・_・ )ゝ');

		return;
	}

	public function
	HelpOldGet():
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
		$Errors = NULL;
		$Info = NULL;
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
				$Vars = [
					'Info'       => NULL,
					'Args'       => [],
					'Errors' => []
				];

				preg_match_all('/\@input ([^\h]+) ([^\h]+)$/ms',$Doc,$Inputs);
				preg_match_all('/\@info (.+?)$/ms',$Doc,$Info);
				preg_match_all('/\@error ([\d]+) (.+?)$/ms',$Doc,$Errors);

				if(array_key_exists(0,$Info[1]))
				$Vars['Info'] = $Info[1][0];

				foreach($Inputs[0] as $Key => $Val)
				$Vars['Args'][$Inputs[2][$Key]] = $Inputs[1][$Key];

				foreach($Errors[0] as $Key => $Val)
				$Vars['Errors'][$Errors[1][$Key]] = $Errors[2][$Key];


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
