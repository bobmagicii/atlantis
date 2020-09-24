<?php

define('ProjectAutoloadOnly',TRUE);
require(sprintf('%s/conf/start.php',dirname(__FILE__,3)));

$Storage = new Atlantis\StorageManager;
$Systems = Nether\Option::Get('Atlantis.File.Filesystems');
$TestFiles = [ '200MB.zip','512MB.zip' ];

$TimeStart = NULL;
$Time = NULL;
$Bucket = NULL;
$Conf = NULL;
$File = NULL;
$Path = NULL;
$Stream = NULL;
$Error = NULL;
$Saved = FALSE;
$URL1 = NULL;
$URL2 = NULL;

foreach($Systems as $Bucket => $Conf) {
	foreach($TestFiles as $File) {
		printf('Uploading %s to %s... ',$File,$Bucket);
		$Path = sprintf('%s://%s',$Bucket,$File);
		$Stream = fopen($File,'r');
		$TimeStart = microtime(TRUE);

		$Saved = FALSE;
		try { $Saved = $Storage->Put($Path,$Stream); }
		catch(Throwable $Error) { }

		$Time = microtime(TRUE) - $TimeStart;
		fclose($Stream);

		$URL1 = $Conf->GetURL($File);
		$URL2 = $Conf->GetSignedURL($File,'+1 Hours');

		if($Saved)
		echo
		"{$Time}s", PHP_EOL,
		$URL1, PHP_EOL,
		$URL2, PHP_EOL, PHP_EOL;

		else
		echo 'failed', PHP_EOL;

		sleep(40);
	}
}

