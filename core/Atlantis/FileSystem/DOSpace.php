<?php

namespace Atlantis\FileSystem;

use
Atlantis   as Atlantis,
Nether     as Nether,
League     as League,
Aws        as Aws,
GuzzleHttp as GuzzleHttp;

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
			'https://%s.%s.cdn.digitaloceanspaces.com/%s',
			$this->Bucket,
			$this->Region,
			$Path
		);
	}

	public function
	PurgeCDN(String $Path):
	Void {


		$ApiKey = Nether\Option::Get('DigitalOcean.API.Key');
		$Log = Nether\Stash::Get('Atlantis.Log.Application');

		$Client = new GuzzleHttp\Client([
			'base_uri' => 'https://api.digitalocean.com/v2/'
		]);

		$Headers = [
			'Content-Type'  => 'application/json',
			'Authorization' => sprintf('Bearer %s',$ApiKey)
		];

		$BodyDelete = [
			'files' => [ $Path ]
		];

		// get the endpoint id's that we are using.

		$Response = $Client->Get(
			'cdn/endpoints',
			[ 'headers' => $Headers ]
		);

		$Log->Info("DOSpace::PurgeCDN GET endpoints {$Response->GetStatusCode()}",$Response->GetHeaders());

		$JSON = $Response->GetBody();
		if(!$JSON) return;

		$Data = new Nether\Input\Filter(json_decode($JSON));
		if(!$Data->Endpoints) return;

		// execute order 66

		$Endpoint = NULL;
		foreach($Data->Endpoints as $Endpoint) {
			$Endpoint = new Nether\Input\Filter($Endpoint);

			if(!$Endpoint->ID)
			continue;

			$Response = $Client->Delete(
				"cdn/endpoints/{$Endpoint->ID}/cache",
				[ 'headers' => $Headers, 'body' => json_encode($BodyDelete) ]
			);

			$Log->Info("DOSpace::PurgeCDN DELETE {$Endpoint->ID} {$Path} {$Response->GetStatusCode()}",$Response->GetHeaders());
		}

		return;
	}

}
