<?php

namespace Atlantis\FileSystem;

use
Atlantis as Atlantis,
Nether as Nether,
League as League,
Aws as Aws;

class DOSpace
extends AwsBucket {

	public function
	GetAdapter() {

		$this->Client = Aws\S3\S3Client::factory([
			'region' => $this->Region,
			'endpoint' => "https://{$this->Region}.digitaloceanspaces.com",
			'version' => 'latest',
			'credentials' => [
				'key'    => $this->PubKey,
				'secret' => $this->PrivKey
			]
		]);

		return new League\Flysystem\AwsS3v3\AwsS3Adapter(
			$this->Client, $this->Bucket
		);
	}

	public function
	GetURL(String $Path):
	String {

		return sprintf(
			'https://%s.%s.digitaloceanspaces.com/%s',
			$this->Bucket,
			$this->Region,
			$Path
		);
	}

}
