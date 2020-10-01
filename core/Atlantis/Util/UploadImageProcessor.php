<?php

namespace Atlantis\Util;

use Atlantis as Atlantis;
use Nether as Nether;

use Throwable as Throwable;
use Imagick as Imagick;

class UploadImageProcessor {

	static public function
	HandlePost(Atlantis\Prototype\User $User):
	Nether\Object\Mapped {
	/*//
	returns an object containing Success and Fail uploads.
	//*/

		$UUID = NULL;
		$File = NULL;
		$Filepath = NULL;
		$Image = NULL;
		$Error = NULL;
		$Format = NULL;
		$Upload = NULL;
		$Current = NULL;
		$Output = new Nether\Object\Mapped([
			'Success' => [],
			'Fail'    => []
		]);

		if(!count($_FILES))
		return $Output;

		foreach($_FILES as $Current) {
			$UUID = Atlantis\Util::UUID(NULL,TRUE);
			$File = new Nether\Object\Mapped($Current);

			try {
				$Image = new Imagick($File->tmp_name);
				$Format = $Image->GetImageFormat();

				// TODO: a specialized image handler class
				// TODO: gif support

				if($Format !== 'PNG') {
					$Image->SetImageFormat($Format = 'JPG');
					$Image->SetCompressionQuality(95);
				}
			}

			catch(Throwable $Error) {
				$Current['Error'] = $Error->GetMessage();
				$Output->Fail[] = $Current;
			}

			////////

			$Filepath = sprintf(
				'%s/%s/%s/%s.%s',
				ProjectRoot,
				'data/usr/img',
				str_replace('-',DIRECTORY_SEPARATOR,$UUID),
				'o',
				strtolower($Format)
			);

			////////

			Atlantis\Util::MkDir(dirname($Filepath));
			rename($File->tmp_name,$Filepath);
			Atlantis\Util::Chmod($Filepath);

			if(!file_exists($Filepath)) {
				$Current['Error'] = 'error installing file';
				$Output->Fail[] = $Current;
			}

			////////

			$Upload = Atlantis\Prototype\UploadImage::Insert([
				'UserID' => $User->ID,
				'UUID'   => $UUID,
				'Format' => $Format
			]);

			if(!$Upload) {
				$Current['Error'] = 'error creating db entry for file';
				$Output->Fail[] = $Current;
			}

			$Output->Success[] = $Upload;
		}

		return $Output;
	}

}
