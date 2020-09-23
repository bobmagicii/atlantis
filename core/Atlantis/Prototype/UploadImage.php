<?php

namespace Atlantis\Prototype;

use
\Atlantis as Atlantis,
\Nether   as Nether,
\Ramsey   as Ramsey;

use
Imagick     as Imagick,
Exception   as Exception,
Throwable   as Throwable,
SplFileInfo as SplFileInfo;

class UploadImage
extends Atlantis\Prototype {

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
		'UUID'        => 'UUID',
		'Format'      => 'Format'
	];

	// database fields.

	public Int $ID;
	public Int $UserID;
	public Int $TimeCreated;
	public Int $TimeUpdated;
	public Int $Enabled;
	public String $UUID;

	// extension fields.

	public ?Atlantis\User $User;
	public ?String $URL;
	public Atlantis\Util\Date $DateCreated;
	public Atlantis\Util\Date $DateUpdated;

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
		$this->User = new Atlantis\User(
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
	GenerateFilePath(String $OwnerUUID, String $UUID, String $Size, String $Ext):
	String {
	/*//
	@date 2020-09-22
	//*/

		// /upl/O-U-I-D/I-U-I-D/image.jpg

		return sprintf(
			'upl:///%s/%s/%s.%s',
			$OwnerUUID,
			$UUID,
			$Size,
			$Ext
		);
	}

	static public function
	GenerateFileURL(String $OwnerUUID, String $UUID, String $Size, String $Ext):
	String {
	/*//
	@date 2020-09-22
	//*/

		$Filesystem = Nether\Option::Get('Atlantis.File.Filesystems')['upl'];

		return $Filesystem->GetURL(sprintf(
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
			$this->User->UUID,
			$this->UUID,
			$Size,
			$this->Format
		);
	}

	public function
	GetURL(String $Size='lg'):
	String {
	/*//
	@date 2017-03-02
	get the url to view this blog post.
	//*/

		return static::GenerateFileURL(
			$this->User->UUID,
			$this->UUID,
			$Size,
			$this->Format
		);
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
			Atlantis\User::GetPropertyMap(),
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
	Insert($Opt):
	self {

		$Opt = new Nether\Object\Mapped($Opt,[
			'UserID'      => 0,
			'UUID'        => NULL,
			'Format'      => NULL,

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

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	static public function
	HandlePost(Atlantis\User $User, Atlantis\StorageManager $Storage):
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
		$Now = new Atlantis\Util\Date;

		////////

		$Output = new Nether\Object\Mapped([
			'Success' => [],
			'Fail'    => []
		]);

		if(!count($_FILES))
		return $Output;

		////////

		foreach($_FILES as $Current) {
			$UUID = Atlantis\Util::UUID(NULL,TRUE);
			$Mime = mime_content_type($Current['tmp_name']);
			$Filepath = static::GenerateFilePath($User->UUID,$UUID,'image',strtolower($Format));

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

			try {
				$Format = static::HandleWriteImageToStorage(
					$Storage,
					$Current['tmp_name'],
					dirname($Filepath)
				);
			}

			catch(Throwable $Error) {
				$Output->Fail[] = [
					'Name'  => $Current['name'],
					'Error' => $Error->GetMessage()
				];

				try {
					$Storage->DeleteDir(dirname($Filepath));
					unlink($Current['tmp_name']);
				}

				catch(Throwable $Error) { }

				continue;
			}

			////////

			try {
				$Upload = Atlantis\Prototype\UploadImage::Insert([
					'UserID'      => $User->ID,
					'TimeCreated' => $Now->Format('U'),
					'UUID'        => $UUID,
					'Format'      => strtolower($Format)
				]);
			}

			catch(Throwable $Err) { }

			if(!$Upload) {
				$Output->Fail[] = [
					'Name'  => $Current['name'],
					'Error' => 'error creating database entry'
				];

				try {
					$Storage->DeleteDir(dirname($Filepath));
					unlink($Current['tmp_name']);
				}

				catch(Throwable $Error) { }

				continue;
			}

			$Output->Success[] = $Upload;
			unlink($Current['tmp_name']);
		}

		return $Output;
	}

	static public function
	HandleWriteImageToStorage(Atlantis\StorageManager $Storage, String $Source, String $DestDir):
	String {
	/*//
	@date 2020-09-23
	@todo 2020-09-23 add gif support
	@todo 2020-09-23 add phone photo rotation fixing
	//*/

		$Image = new Imagick($Source);
		$Format = $Image->GetImageFormat();
		$Name = NULL;
		$Width = NULL;
		$Filename = NULL;
		$Saved = FALSE;

		$Sizes = [
			'image' => 2048,
			'lg'    => 1200,
			'md'    => 800,
			'sm'    => 500,
			'th'    => 250
		];

		if($Format === 'PNG') {
			$Image->SetCompressionQuality('95');
		}

		elseif($Format === 'GIF') {
			// ...
		}

		else {
			$Image->SetImageFormat($Format = 'JPG');
			$Image->SetCompressionQuality(95);
		}

		$Image->StripImage();

		foreach($Sizes as $Name => $Width) {
			$Filename = sprintf('%s/%s.%s',$DestDir,$Name,strtolower($Format));

			if(is_int($Width))
			if($Image->GetImageWidth() > $Width)
			$Image->ScaleImage($Width,$Width,TRUE);

			$Saved = $Storage->Write($Filename,$Image->GetImageBlob());

			if(!$Saved)
			throw new Exception('error writing to storage');

			$Storage->SetVisibility($Filename,'public');
		}

		return $Format;
	}


}
