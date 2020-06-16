<?php

namespace Atlantis\Util;

use \DateTimeImmutable as DateTimeImmutable;
use \Nether as Nether;

use \Exception as Exception;

class FileCacheHandler {
/*//
given a static file in your project we will inspect it and the headers sent to this
request to decide if we should convince the browser they don't need to redownload it.
//*/

	private
	String $File;

	private
	Int $MaxAge = 86400;

	public function
	__Construct(Array $Opt=NULL) {

		$Opt = new Nether\Object\Mapped($Opt,[
			'File'        => NULL,
			'ContentType' => NULL
		]);

		if(!$Opt->File)
		throw new Exception('no File specified');

		if(!file_exists($Opt->File))
		throw new Exception('the File does not exist');

		if(!is_readable($Opt->File))
		throw new Exception('the File is not readable');

		if(!$Opt->ContentType)
		$Opt->ContentType = mime_content_type($Opt->File);

		$this->File = $Opt->File;
		$this->ContentType = $Opt->ContentType;
		$this->Time = filemtime($Opt->File);
		$this->Hash = md5_file($Opt->File);
		return;
	}

	public function
	Send():
	Bool {

		$Format = 'D, d M Y H:i:s T';
		$Send = TRUE;
		$DateLocal = NULL;
		$DateRemote = NULL;

		////////

		if(array_key_exists('HTTP_IF_NONE_MATCH',$_SERVER)) {
			if($_SERVER['HTTP_IF_NONE_MATCH'] === $this->Hash) {
				http_response_code(304);
				header('X-Cache-Test: ETag');
				return FALSE;
			}
		}

		elseif(array_key_exists('HTTP_IF_MODIFIED_SINCE',$_SERVER)) {
			$DateRemote = new DateTimeImmutable($_SERVER['HTTP_IF_NONE_MATCH']);
			$DateLocal = new DateTimeImmutable("@{$this->Time}");

			if($DateRemote >= $DateLocal) {
				http_response_code(304);
				header('X-Cache-Test: Last-Modified');
				return FALSE;
			}
		}

		////////

		header('Pragma: cache');
		header(sprintf('Cache-Control: max-age=%s',$this->MaxAge));
		header(sprintf('Content-Type: %s',$this->ContentType));
		header(sprintf('Last-Modified: %s',gmdate($Format,$this->Time)));
		header(sprintf('Expires: %s',gmdate($Format,$this->Time)));
		header(sprintf('ETag: %s',$this->Hash));
		readfile($this->File);
		return TRUE;
	}

}
