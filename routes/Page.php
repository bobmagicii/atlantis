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

		// load a surface template that literally just loads the page.
		// this will give our pages then access to all the features of
		// the public route that we bound to the surface renderer.

		$this->Area('page/loader',[
			'Filename' => static::$Filename
		]);

		return;
	}

}
