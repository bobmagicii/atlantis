<?php

namespace Routes;

use
\Atlantis as Atlantis,
\Nether as Nether;

use
\Nether\Avenue\Router as Router,
\Nether\Avenue\RouteHandler as Handler;

class Page
extends Atlantis\Site\PublicWeb
implements Nether\Avenue\Interfaces\RouteAcceptance {

	protected static
	?String $Filename = NULL;

	public static function
	WillHandleRequest(Router $Router, Handler $Handler):
	Bool {
	/*//
	@date 2020-05-27
	@implements Nether\Avenue\Interfaces\RouteAcceptance
	//*/

		$Path = trim($Router->GetPath());
		$Parts = explode('/',$Path);
		$Part = NULL;

		foreach($Parts as &$Part)
		$Part = Atlantis\Util\Filters::RouteSafeAlias($Part);

		////////

		$Path = join('/',$Parts);

		$Filename = sprintf(
			'%s/data/pages/%s.phtml',
			ProjectRoot,
			$Path
		);

		if(file_exists($Filename) && is_readable($Filename)) {
			static::$Filename = $Filename;
			return TRUE;
		}

		////////

		return FALSE;
	}

	public function
	Index(String $Path):
	Void {
	/*//
	@date 2020-05-27
	//*/

		(function(
			String $File,
			Atlantis\Site\PublicWeb $Route,
			Nether\Avenue\Router $Router,
			Nether\Surface $Surface,
			?Atlantis\Prototype\User $User
		){
			require($File);
			return;
		})(
			static::$Filename,
			$this,
			$this->Router,
			$this->Surface,
			$this->User
		);

		return;
	}

}
