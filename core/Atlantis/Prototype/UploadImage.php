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

	// specialized query AddonFieds.

	public ?Bool $UsedBlogPosts = NULL;
	public ?Bool $UsedBlogs = NULL;
	public ?Bool $UsedUser = NULL;

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	public function
	JsonSerialize():
	array {
	/*//
	@date 2020-06-01
	@implements JsonSerializable
	//*/

		return [
			'ID'            => $this->ID,
			'UUID'          => $this->UUID,
			'Bytes'         => $this->Bytes,
			'BytesReadable' => Atlantis\Util::BytesReadable($this->Bytes),
			'URL'           => $this->URL,

			'UsedBlogPosts' => $this->UsedBlogPosts,
			'UsedBlogs'     => $this->UsedBlogs,
			'UsedUser'      => $this->UsedUser,

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
	OnReady(array $Raw):
	void {
	/*//
	prepare some data for this object.
	//*/

		($this)
		->OnReady_GetUser($Raw)
		->OnReady_GetDates($Raw)
		->OnReady_AddonFields($Raw);

		$this->URL = $this->GetURL();

		return;
	}

	protected function
	OnReady_GetUser(array $Raw):
	self {
	/*//
	prepare a blog object depending on if it was fetched with an inclusion
	query or not.
	//*/

		$this->User = NULL;

		if(array_key_exists('PU_ID',$Raw) && $Raw['PU_ID'])
		$this->User = Atlantis\Prototype\User::BuildObjectResult($Raw,'PU_');

		return $this;
	}

	protected function
	OnReady_GetDates(array $Raw):
	self {
	/*//
	prepare the date objects.
	//*/

		$this->DateCreated = new Atlantis\Util\Date("@{$Raw['TimeCreated']}");
		$this->DateUpdated = new Atlantis\Util\Date("@{$Raw['TimeUpdated']}");
		return $this;
	}

	protected function
	OnReady_AddonFields(array $Raw):
	self {
	/*//
	@date 2020-10-21
	//*/

		// this field exists if a query was performed using the
		// CheckBlogPosts or UsedBlogPosts option on Find. it is
		// just the ID of whatever the first post it found was to
		// determine if it is used at all for anything.

		if(array_key_exists('CheckBlogPosts',$Raw)) {
			if($Raw['CheckBlogPosts'])
			$this->UsedBlogPosts = TRUE;
			else
			$this->UsedBlogPosts = FALSE;
		}

		if(array_key_exists('CheckBlogs',$Raw)) {
			if($Raw['CheckBlogs'])
			$this->UsedBlogs = TRUE;
			else
			$this->UsedBlogs = FALSE;
		}

		if(array_key_exists('CheckUser',$Raw)) {
			if($Raw['CheckUser'])
			$this->UsedUser = TRUE;
			else
			$this->UsedUser = FALSE;
		}

		return $this;
	}

	public function
	Drop():
	void {

		$Storage = new Atlantis\StorageManager;
		$Path = dirname($this->GetFilePath());
		$Result = FALSE;
		$Log = Nether\Stash::Get('Atlantis.Log.Application');

		try {
			$Result = $Storage->DeleteDir($Path);

			if($Result)
			parent::Drop();

			elseif($Log)
			$Log->AddRecord(
				Atlantis\Logger::ERROR,
				'error when attempting to delete image from storage',
				[ 'ImageID' => $this->ID, 'Message' => 'Storage::DeleteDir returned false' ]
			);
		}

		catch(Throwable $Error) {
			if($Log)
			$Log->AddRecord(
				Atlantis\Logger::ERROR,
				'exception when attempting to delete image from storage',
				[ 'ImageID' => $this->ID, 'Error' => $Error->GetCode(), 'Message' => $Error->GetMessage() ]
			);
		}

		return;
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	static public function
	GenerateFilePath(string $Mount, string $OwnerUUID, string $UUID, string $Size, string $Ext):
	string {
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
	GenerateFileURL(string $Mount, string $OwnerUUID, string $UUID, string $Size, string $Ext):
	string {
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
	GetFilePath(string $Size='lg'):
	string {
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
	GetURL(string $Size='lg', bool $CacheBust=TRUE):
	string {
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
		$URL .= sprintf('?t=%d',$this->TimeUpdated);

		return $URL;
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	static protected function
	ExtendQueryJoins($SQL, string $TableAlias='Main', string $FieldPrefix=''):
	void {
	/*//
	@date 2018-06-08
	//*/

		$SQL
		->Join("Users {$FieldPrefix}PU ON {$TableAlias}.UserID={$FieldPrefix}PU.ID");

		return;
	}

	static protected function
	ExtendQueryFields($SQL, string $TablePrefix='', string $FieldPrefix=''):
	void {
	/*//
	@date 2018-06-08
	//*/

		Atlantis\Prototype\User::ExtendMainFields($SQL,"{$FieldPrefix}PU","{$FieldPrefix}PU_");

		return;
	}

	static protected function
	FindExtendOptions($Opt):
	array {
	/*//
	@date 2020-05-23
	//*/

		return [
			'CheckUser'      => FALSE,
			'UsedUser'       => FALSE,
			'CheckBlogPosts' => FALSE,
			'UsedBlogPosts'  => FALSE,
			'CheckBlogs'     => FALSE,
			'UsedBlogs'      => FALSE
		];
	}

	static protected function
	FindApplyFilters($Opt,$SQL):
	void {
	/*//
	@date 2018-06-08
	//*/

		if($Opt->UsedBlogs)
		$Opt->CheckBlogs = $Opt->UsedBlogs;

		if($Opt->UsedBlogPosts)
		$Opt->CheckBlogPosts = $Opt->UsedBlogPosts;

		if($Opt->UsedUser)
		$Opt->CheckUser = $Opt->UsedUser;

		////////

		if($Opt->CheckBlogs) {
			$SQL
			->Fields('BLUI.ID AS CheckBlogs')
			->Join(sprintf(
				'Blogs BLUI ON BLUI.ID=(%s)',
				($SQL->GetDatabase()->NewVerse())
				->Select('Blogs BLUII')
				->Fields('BLUII.ID')
				->Where('(BLUII.ImageHeaderID=Main.ID OR BLUII.ImageIconID=Main.ID)')
				->Limit(1)
			));
		}

		if($Opt->CheckBlogPosts) {
			$SQL
			->Fields('BPUI.ID AS CheckBlogPosts')
			->Join(sprintf(
				'BlogPostUploadImages BPUI ON BPUI.ID=(%s)',
				($SQL->GetDatabase()->NewVerse())
				->Select('BlogPostUploadImages BPUII')
				->Fields('BPUII.ID')
				->Where('BPUII.ImageID=Main.ID')
				->Limit(1)
			));
		}

		if($Opt->CheckUser) {
			$SQL
			->Fields('USUI.ID AS CheckUser')
			->Join(sprintf(
				'Users USUI ON USUI.ID=(%s)',
				($SQL->GetDatabase()->NewVerse())
				->Select('Users USUII')
				->Fields('USUII.ID')
				->Where('USUII.ID=:CheckUser')
				->Where('(USUII.ImageHeaderID=Main.ID OR USUII.ImageIconID=Main.ID)')
				->Limit(1)
			));
		}

		if($Opt->UsedBlogs) {
			if($Opt->CheckBlogPosts)
			$SQL
			->Fields('BP.BlogID AS BlogID')
			->Join('BlogPosts BP ON BP.ID=BPUI.PostID')
			->Having('(BlogID=:UsedBlogs OR CheckBlogs=:UsedBlogs)');
			else
			$SQL
			->Having('CheckBlogs=:UsedBlogs');
		}

		return;
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

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
	HandlePostImage(Atlantis\Prototype\User $User, Atlantis\StorageManager $Storage, ?string $OverUUID=NULL):
	Nether\Object\Mapped {
	/*//
	loop over all the files sent via post and handling all the images that
	it found. returns an object containing Success and Error arrays.
	//*/

		$Mount = Nether\Option::Get('Atlantis.File.DefaultMount');
		$DatabaseMethod = 'Insert';
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

			if($OverUUID !== NULL) {
				$UUID = $OverUUID;
				$DatabaseMethod = 'Upsert';
			}

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

				$Upload = Atlantis\Prototype\UploadImage::{$DatabaseMethod}([
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
	HandleWriteImageToStorage(Atlantis\StorageManager $Storage, string $Source, string $DestDir):
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
