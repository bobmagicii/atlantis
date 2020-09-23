<?php

namespace Atlantis\FileSystem;

use
Atlantis as Atlantis,
Nether as Nether,
League as League,
Aws as Aws;

class B2Bucket
extends AwsBucket {

	protected
	String $PubKey;

	protected
	String $PrivKey;

	protected
	String $Region;

	protected
	String $Bucket;

	////////////////
	////////////////

	public function
	__Construct($PubKey,$PrivKey,$Region,$Bucket,$ACL) {

		$this->PubKey = $PubKey;
		$this->PrivKey = $PrivKey;
		$this->Region = $Region;
		$this->Bucket = $Bucket;
		$this->ACL = $ACL;

		return;
	}

	public function
	GetAdapter() {

		$Client = Aws\S3\S3Client::factory([
			'region' => $this->Region,
			'endpoint' => "https://s3.{$this->Region}.backblazeb2.com",
			'version' => 'latest',
			'credentials' => [
				'key'    => $this->PubKey,
				'secret' => $this->PrivKey
			]
		]);

		return new League\Flysystem\AwsS3v3\AwsS3Adapter(
			$Client, $this->Bucket
		);
	}

	public function
	GetFileSystem() {

		return new League\Flysystem\Filesystem($this->GetAdapter(),[
			'visibility' => $this->ACL
		]);
	}

	public function
	GetURL(String $Path):
	String {

		return sprintf(
			'https://%s.s3.%s.backblazeb2.com/%s',
			$this->Bucket,
			$this->Region,
			$Path
		);
	}

}
