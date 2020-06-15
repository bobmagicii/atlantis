<?php

namespace Routes;

use
\Atlantis as Atlantis,
\Nether as Nether;

use
\Nether\Avenue\Router as Router,
\Nether\Avenue\RouteHandler as Handler;

class Media
extends Atlantis\Site\PublicWeb {

	public function
	Image(String $Path, String $Name):
	Void {
	/*//
	@date 2020-05-27
	//*/

		$Type = NULL;
		$MaxAge = 86400;
		$ModifiedTime = NULL;
		$Expires = NULL;
		$Modified = NULL;
		$LastModified = NULL;
		$IfModifiedSince = NULL;

		////////

		($this->Surface)
		->SetAutoRender(FALSE)
		->Stop();

		$Filepath = sprintf(
			'%s/data/usr/img/%s/%s',
			ProjectRoot,
			$Path,
			$Name
		);

		if(!file_exists($Filepath))
		$this->Quit(404);

		////////

		$ModifiedTime = filemtime($Filepath);
		$LastModified = new Atlantis\Util\Date("@{$ModifiedTime}");

		if(array_key_exists('HTTP_IF_MODIFIED_SINCE',$_SERVER)) {
			$IfModifiedSince = new Atlantis\Util\Date($_SERVER['HTTP_IF_MODIFIED_SINCE']);

			if($IfModifiedSince >= $LastModified)
			$this->Quit(304);
		}

		////////

		$Type = mime_content_type($Filepath);
		$Expires = gmdate('D, d M Y H:i:s T',strtotime('+1 Day'));
		$Modified = gmdate('D, d M Y H:i:s T',$ModifiedTime);

		header('Pragma: cache');
		header(sprintf('Expires: %s',$Expires));
		header(sprintf('Last-Modified: %s',$Modified));
		header(sprintf('Cache-Control: max-age=%s',$MaxAge));
		header(sprintf('Content-Type: %s',$Type));
		readfile($Filepath);

		return;
	}

}