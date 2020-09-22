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

		($this->Surface)
		->SetAutoRender(FALSE)
		->Stop();

		$ImageRoot = sprintf('%s/data/usr/img/%s',ProjectRoot,$Path);
		$Original = sprintf('%s/o.%s',$ImageRoot,$Ext);
		$Filepath = sprintf('%s/%s.%s',$ImageRoot,$Name,$Ext);

		if(!file_exists($Filepath)) {
			if($Name === 'o')
			$this->Quit(404);

			$this->ScaleImage($Original,$Name,$Ext);
		}

		////////

		$Cache = new Atlantis\Util\FileCacheHandler([
			'File' => $Filepath
		]);

		$Cache->Send();
		return;
	}

	protected function
	ScaleImage(String $Original, String $Name, String $Ext):
	Void {
	/*//
	@date 2020-09-22
	//*/

		$Output = sprintf('%s/%s.%s',dirname($Original),$Name,$Ext);
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
		$Image->ResizeImage($Size,$Size,Imagick::FILTER_CATROM,1.0,TRUE);

		// @todo 2020-09-22 handle rotation bullshit from phone photos

		if(preg_match('/^jpe?g$/i',$Ext)) {
			$Image->SetImageFormat('jpeg');
			$Image->SetImageCompression(Imagick::COMPRESSION_JPEG);
			$Image->SetImageCompressionQuality(92);
		}

		$Image->WriteImage($Output);
		$Image->Destroy();

		return;
	}

}
