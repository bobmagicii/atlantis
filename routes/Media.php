<?php

namespace Routes;

use
\Atlantis as Atlantis,
Nether as Nether;

use
Nether\Avenue\Router as Router,
Nether\Avenue\RouteHandler as Handler,
Imagick as Imagick;

class Media
extends Atlantis\Site\PublicWeb {

	public function
	Image(String $Path, String $Name, String $Ext):
	Void {
	/*//
	@date 2020-05-27
	we are intentionally trying to avoid hitting the database here
	as much as that would make this code a lot cleaner.
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

		$Original = sprintf(
			'%s/data/usr/img/%s/o.%s',
			ProjectRoot,
			$Path,
			$Ext
		);

		$Filepath = sprintf(
			'%s/data/usr/img/%s/%s.%s',
			ProjectRoot,
			$Path,
			$Name,
			$Ext
		);

		if(!file_exists($Filepath)) {
			if($Name === 'o')
			$this->Quit(404);

			$Size = 69;

			switch($Name) {
				case 'th': {
					$Size = 300;
					break;
				}
				case 'sm': {
					$Size = 500;
					break;
				}
				case 'md': {
					$Size = 800;
					break;
				}
				default: {
					$Size = 1200;
					$Name = 'lg';
					break;
				}
			}

			$Image = new Imagick($Original);

			if($Ext === 'jpg') {
				$Image->SetImageFormat('jpeg');
				$Image->SetImageCompression(Imagick::COMPRESSION_JPEG);
				$Image->SetImageCompressionQuality(92);
			}

			$Image->ResizeImage($Size,$Size,Imagick::FILTER_CATROM,1.0,TRUE);
			$Image->WriteImage(sprintf('%s/%s.%s',dirname($Original),$Name,$Ext));
			$Image->Destroy();
		}

		////////

		$Cache = new Atlantis\Util\FileCacheHandler([
			'File' => $Filepath
		]);

		$Cache->Send();
		return;

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
