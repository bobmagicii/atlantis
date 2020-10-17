<?php

namespace Atlantis\Prototype;

use
Atlantis,
Nether,
Ramsey;

use
Imagick,
Exception,
Throwable,
SplFileInfo,
JsonSerializable;

class UploadImage
extends Atlantis\Prototype
implements
	Atlantis\Packages\Upsertable,
	JsonSerializable {

	protected static
	$Table = 'UploadImages';

	protected static
	$IDField = 'ID';

	protected static
	$PropertyMap = [
		'ID'          => 'ID:int',
		'UserID'      => 'UserID:int',
		'TimeCreated' => 'TimeCreated:int',
		'TimeUpdated' => 'TimeUpdated:int',
		'Enabled'     => 'Enabled:int',
		'Mount'       => 'Mount',
		'UUID'        => 'UUID',
		'Format'      => 'Format',
		'Bytes'       => 'Bytes:int'
	];

	// database fields.

	public Int $ID;
	public Int $UserID;
	public Int $TimeCreated;
	public Int $TimeUpdated;
	public Int $Enabled;
	public String $UUID;

	// extension fields.

	public ?Atlantis\Prototype\User $User;
	public ?String $URL;
	public Atlantis\Util\Date $DateCreated;
	public Atlantis\Util\Date $DateUpdated;

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	public function
	JsonSerialize():
	Array {
	/*//
	@date 2020-06-01
	@implements JsonSerializable
	//*/

		return [
			'ID'   => $this->ID,
			'UUID' => $this->UUID,
			'URL'  => $this->URL,
			'Sources' => [
				'Main'      => $this->GetURL('image'),
				'Large'     => $this->GetURL('lg'),
				'Medium'    => $this->GetURL('md'),
				'Small'     => $this->GetURL('sm'),
				'Thumbnail' => $this->GetURL('th')
			]
		];
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	public function
	OnReady(Array $Raw):
	Void {
	/*//
	prepare some data for this object.
	//*/

		($this)
		->OnReady_GetUser($Raw)
		->OnReady_GetDates($Raw);

		$this->URL = $this->GetURL();

		return;
	}

	protected function
	OnReady_GetUser(Array $Raw):
	self {
	/*//
	prepare a blog object depending on if it was fetched with an inclusion
	query or not.
	//*/

		$this->User = NULL;

		if(array_key_exists('PU_ID',$Raw))
		$this->User = new Atlantis\Prototype\User(
			Atlantis\Util::StripPrefixedQueryFields(
				$Raw, 'PU_'
			),
			TRUE
		);

		return $this;
	}

	protected function
	OnReady_GetDates(Array $Raw):
	self {
	/*//
	prepare the date objects.
	//*/

		$this->DateCreated = new Atlantis\Util\Date("@{$Raw['TimeCreated']}");
		$this->DateUpdated = new Atlantis\Util\Date("@{$Raw['TimeUpdated']}");
		return $this;
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	static public function
	GenerateFilePath(String $Mount, String $OwnerUUID, String $UUID, String $Size, String $Ext):
	String {
	/*//
	@date 2020-09-22
	//*/

		// /upl/O-U-I-D/I-U-I-D/image.jpg

		return sprintf(
			'%s:///%s/%s/%s.%s',
			$Mount,
			$OwnerUUID,
			$UUID,
			$Size,
			$Ext
		);
	}

	static public function
	GenerateFileURL(String $Mount, String $OwnerUUID, String $UUID, String $Size, String $Ext):
	String {
	/*//
	@date 2020-09-22
	//*/

		$Systems = Nether\Option::Get('Atlantis.File.Filesystems');

		if(!array_key_exists($Mount,$Systems))
		return "-filesystem-{$Mount}-not-found-";

		return $Systems[$Mount]->GetURL(sprintf(
			'%s/%s/%s.%s',
			$OwnerUUID,
			$UUID,
			$Size,
			$Ext
		));
	}

	public function
	GetFilePath(String $Size='lg'):
	String {
	/*//
	@date 2020-09-22
	//*/

		return static::GenerateFilePath(
			$this->Mount,
			$this->User->UUID,
			$this->UUID,
			$Size,
			$this->Format
		);
	}

	public function
	GetURL(String $Size='lg', Bool $CacheBust=TRUE):
	String {
	/*//
	@date 2017-03-02
	get the url to view this blog post.
	//*/

		$URL = static::GenerateFileURL(
			$this->Mount,
			$this->User->UUID,
			$this->UUID,
			$Size,
			$this->Format
		);

		if($CacheBust)
		$URL .= sprintf('?t=%d',$this->TimeCreated);

		return $URL;
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	static protected function
	ExtendQueryJoins($SQL, String $TableAlias='Main', String $FieldPrefix=''):
	Void {
	/*//
	@date 2018-06-08
	//*/

		$SQL
		->Join(sprintf('Users %2$sPU ON %1$s.UserID=%2$sPU.ID',$TableAlias,$FieldPrefix));

		return;
	}

	static protected function
	ExtendQueryFields($SQL, String $TablePrefix='', String $FieldPrefix=''):
	Void {
	/*//
	@date 2018-06-08
	//*/

		$SQL
		->Fields(Atlantis\Util::BuildPrefixedQueryFields(
			Atlantis\Prototype\User::GetPropertyMap(),
			"{$FieldPrefix}PU", "{$FieldPrefix}PU_"
		));

		return;
	}

	static protected function
	FindExtendOptions($Opt):
	Array {
	/*//
	@date 2020-05-23
	//*/

		return [
		];
	}

	static protected function
	FindApplyFilters($Opt,$SQL):
	Void {
	/*//
	@date 2018-06-08
	//*/

		return;
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	static public function
	GetByID(Int $ID):
	self {
	/*//
	@date 2020-10-17
	@todo set parent to return static and delete this shit
	//*/

		return parent::GetByID($ID);
	}

	static public function
	Insert($Opt):
	self {

		$Opt = new Nether\Object\Mapped($Opt,[
			'UserID'      => 0,
			'UUID'        => NULL,
			'Format'      => NULL,
			'Bytes'       => 0,

			'TimeCreated' => time(),
			'TimeUpdated' => time(),
			'Enabled'     => 1
		]);

		if(!$Opt->UserID)
		throw new Exception('UserID cannot be empty.');

		if(!$Opt->UUID)
		throw new Exception('UUID cannot be empty.');

		if(!$Opt->Format)
		throw new Exception('Format cannot be empty.');

		return parent::Insert($Opt);
	}

	static public function
	Upsert($Opt=NULL,$Upt=NULL):
	self {

		$Opt = new Nether\Object\Mapped($Opt,[
			'UserID'      => 0,
			'Mount'       => NULL,
			'UUID'        => NULL,
			'Format'      => NULL,
			'Bytes'       => 0,
			'TimeCreated' => time(),
			'TimeUpdated' => time(),
			'Enabled'     => 1
		]);

		$Upt = new Nether\Object\Mapped($Upt,[
			'Mount'       => $Opt->Mount,
			'Format'      => $Opt->Format,
			'Bytes'       => $Opt->Bytes,
			'TimeCreated' => $Opt->TimeCreated,
			'TimeUpdated' => $Opt->TimeUpdated,
			'Enabled'     => 1
		]);

		if(!$Opt->UserID)
		throw new Exception('UserID cannot be empty.');

		if(!$Opt->Mount)
		throw new Exception('Mount cannot be empty.');

		if(!$Opt->UUID)
		throw new Exception('UUID cannot be empty.');

		if(!$Opt->Format)
		throw new Exception('Format cannot be empty.');

		return parent::Upsert($Opt,$Upt);
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	static public function
	HandlePostImage(Atlantis\Prototype\User $User, Atlantis\StorageManager $Storage, ?String $OverUUID=NULL):
	Nether\Object\Mapped {
	/*//
	loop over all the files sent via post and handling all the images that
	it found. returns an object containing Success and Error arrays.
	//*/

		$Mount = Nether\Option::Get('Atlantis.File.DefaultMount');
		$UUID = NULL;
		$Filepath = NULL;
		$Error = NULL;
		$Stored = NULL;
		$Upload = NULL;
		$Current = NULL;
		$Now = new Atlantis\Util\Date;
		$Timer = microtime(TRUE);

		////////

		$Output = new Nether\Object\Mapped([
			'Success'         => [],
			'Fail'            => [],
			'UserBytesImages' => 0
		]);

		if(!count($_FILES))
		return $Output;

		////////

		foreach($_FILES as $Current) {
			$UUID = Atlantis\Util::UUID(NULL,TRUE);

			if($OverUUID !== NULL)
			$UUID = $OverUUID;

			$Mime = mime_content_type($Current['tmp_name']);
			$Filepath = static::GenerateFilePath(
				$Mount,
				$User->UUID,
				$UUID,
				'image',
				'lol'
			);

			////////

			// make sure we have an image.

			if(strpos($Mime,'image/') !== 0) {
				$Output->Fail[] = [
					'Name'  => $Current['name'],
					'Error' => "did not seem to be an image: {$Mime}"
				];

				unlink($Current['tmp_name']);
				continue;
			}

			////////

			// try to push the image and scaled down versions into storage.

			try {
				$Stored = static::HandleWriteImageToStorage(
					$Storage,
					$Current['tmp_name'],
					dirname($Filepath)
				);

				/*
				// while each request is succeeding, their cdn is only clearning the cache every
				// other call and i have not figured out why.
				if($Storage->GetFilesystemConfig($Mount) instanceof Atlantis\FileSystem\DOSpace)
				$Storage->GetFilesystemConfig($Mount)
				->PurgeCDN(sprintf(
					'%s/*',
					str_replace("{$Mount}:///",'',dirname($Filepath))
				));
				*/
			}

			catch(Throwable $Error) {
				$Output->Fail[] = [
					'Name'  => $Current['name'],
					'Error' => $Error->GetMessage()
				];

				try {
					if($OverUUID === NULL)
					$Storage->DeleteDir(dirname($Filepath));

					unlink($Current['tmp_name']);
				}

				catch(Throwable $Error) { }

				continue;
			}

			////////

			// try to create the reference row in the db.

			try {
				$Upload = Atlantis\Prototype\UploadImage::Upsert([
					'UserID'      => $User->ID,
					'TimeCreated' => $Now->Format('U'),
					'Mount'       => $Mount,
					'UUID'        => $UUID,
					'Format'      => strtolower($Stored->Format),
					'Bytes'       => $Stored->Bytes
				]);
			}

			catch(Throwable $Error) { }

			if(!$Upload) {
				$Output->Fail[] = [
					'Name'  => $Current['name'],
					'Error' => 'error creating database entry: ' . $Error->GetMessage()
				];

				try {
					if($OverUUID === NULL)
					$Storage->DeleteDir(dirname($Filepath));

					unlink($Current['tmp_name']);
				}

				catch(Throwable $Error) { }

				continue;
			}

			$Output->Success[] = $Upload;
			unlink($Current['tmp_name']);
		}

		$Output->UserBytesImages = $User->QueryBytesImages();
		$Output->TimeUploading = $Stored->TimeUploading;
		$Output->TimeResizing = $Stored->TimeResizing;
		$Output->TimeTotal = microtime(TRUE) - $Timer;

		$User->Update([
			'BytesImages'   => $Output->UserBytesImages
		]);

		return $Output;
	}

	static public function
	HandleWriteImageToStorage(Atlantis\StorageManager $Storage, String $Source, String $DestDir):
	Nether\Object\Mapped {
	/*//
	@date 2020-09-23
	@todo 2020-09-23 add gif support
	@todo 2020-09-23 add phone photo rotation fixing
	handing pushing the image and its resizes into storage. reutrns an object containing
	the Format of the image and how many Bytes total all the sizes.
	//*/

		$Timer = microtime(TRUE);
		$Image = new Imagick($Source);
		$Image->StripImage();
		$Name = NULL;
		$Width = NULL;
		$Filename = NULL;
		$Saved = FALSE;

		$Output = new Nether\Object\Mapped([
			'Format'        => $Image->GetImageFormat(),
			'Bytes'         => 0,
			'TimeUploading' => 0,
			'TimeResizing'  => (microtime(TRUE) - $Timer)
		]);

		$Sizes = [
			'image' => 2048,
			'lg'    => 1200,
			'md'    => 800,
			'sm'    => 500,
			'th'    => 250
		];

		switch($Output->Format) {
			case 'PNG':
				$Image->SetCompressionQuality('95');
			break;
			case 'GIF':
				// gif handling probably needs to be done where the
				// resize process below is sharded out because if i
				// recall looping over every frame was required.
			break;
			default:
				$Image->SetImageFormat($Output->Format = 'JPG');
				$Image->SetCompressionQuality(95);
			break;
		}

		foreach($Sizes as $Name => $Width) {
			$Filename = sprintf('%s/%s.%s',$DestDir,$Name,strtolower($Output->Format));

			$Timer = microtime(TRUE);
			if(is_int($Width))
			if($Image->GetImageWidth() > $Width)
			$Image->ScaleImage($Width,$Width,TRUE);
			$Output->TimeResizing += microtime(TRUE) - $Timer;

			$Timer = microtime(TRUE);
			$Saved = $Storage->Put($Filename,$Image->GetImageBlob());
			$Output->TimeUploading += microtime(TRUE) - $Timer;
			$Output->Bytes += $Image->GetImageLength();

			if(!$Saved)
			throw new Exception('error writing to storage');
		}

		return $Output;
	}


}
