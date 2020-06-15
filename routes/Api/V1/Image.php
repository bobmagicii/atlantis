<?php

namespace Routes\Api\V1;

use
\Atlantis as Atlantis,
\Nether as Nether;

use
\Imagick as Imagick,
\Throwable as Throwable;

class Image
extends Atlantis\Site\ProtectedAPI {

	/**
	 * @input ?Int ID
	 * @input ?String UUID
	 */

	final public function
	EntityGet():
	Void {
	/*//
	@error 1 not found
	//*/

		$Upload = NULL;

		////////

		if($this->Get->ID)
		$Upload = Atlantis\Prototype\UploadImage::GetByID((Int)$this->Get->ID);
		elseif($this->Get->UUID)
		$Upload = Atlantis\Prototype\UploadImage::GetByUUID((Int)$this->Get->UUID);

		if(!$Upload)
		$this->Quit(1,'not found');

		////////

		$this->SetPayload($Upload);
		return;
	}

	/**
	 * @input String File
	 */

	final public function
	EntityPost():
	Void {
	/*//
	@error 1 no file found
	@error 2 imagick said it aint a image or something
	@error 3 failure to move to final directory
	@error 4 failure to create database row for file
	//*/

		$UUID = NULL;
		$File = NULL;
		$Filepath = NULL;
		$Image = NULL;
		$Error = NULL;
		$Format = NULL;
		$Upload = NULL;
		$Current = NULL;
		$Output = [];

		if(!count($_FILES))
		$this->Quit(1,'no File found');

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
				//var_dump($_FILES);
				$this->Quit(2,'error parsing file as image ');
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

			if(!file_exists($Filepath))
			$this->Quit(3,'error installing file');

			////////

			$Upload = Atlantis\Prototype\UploadImage::Insert([
				'UserID' => $this->User->ID,
				'UUID'   => $UUID,
				'Format' => $Format
			]);

			if(!$Upload)
			$this->Quit(4,'error creating db entry for file');

			$Output[] = $Upload;
		}

		////////

		$this
		->SetPayload($Output);

		return;
	}

	/**
	 * @input Int ID
	 * @input ?String Title
	 * @input ?String Alias
	 * @input ?File ImageHeader
	 * @input ?File ImageIcon
	 */

	final public function
	EntityPatch():
	Void {

		return;
	}

	/**
	 * @input Int ID
	 */

	final public function
	EntityDelete():
	Void {

		return;
	}

}
