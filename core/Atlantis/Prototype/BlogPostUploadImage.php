<?php

namespace Atlantis\Prototype;

use
Atlantis,
Nether,
Ramsey;

use
Exception,
Throwable,
SplFileInfo;

class BlogPostUploadImage
extends Atlantis\Prototype
implements Atlantis\Packages\Upsertable {

	protected static
	$Table = 'BlogPostUploadImages';

	protected static
	$IDField = 'ID';

	protected static
	$PropertyMap = [
		'ID'      => 'ID:int',
		'PostID'  => 'PostID:int',
		'ImageID' => 'ImageID:int'
	];

	// database fields.

	public Int $ID;
	public Int $PostID;
	public Int $ImageID;

	public Atlantis\Prototype\BlogPost $Post;
	public Atlantis\Prototype\UploadImage $Image;

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	public function
	OnReady(Array $Raw):
	Void {
	/*//
	prepare some data for this object.
	//*/

		if(array_key_exists('BP_ID',$Raw))
		$this->Post = new Atlantis\Prototype\BlogPost(
			Atlantis\Util::StripPrefixedQueryFields($Raw,'BP_')
		);

		if(array_key_exists('UI_ID',$Raw))
		$this->Image = new Atlantis\Prototype\UploadImage(
			Atlantis\Util::StripPrefixedQueryFields($Raw,'UI_')
		);

		return;
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
		->Join("BlogPosts {$FieldPrefix}BP ON {$TableAlias}.PostID={$FieldPrefix}BP.ID")
		->Join("UploadImages {$FieldPrefix}UI ON {$TableAlias}.ImageID={$FieldPrefix}UI.ID");

		Atlantis\Prototype\BlogPost::ExtendQueryJoins($SQL,"{$FieldPrefix}BP","{$FieldPrefix}BP_");
		Atlantis\Prototype\UploadImage::ExtendQueryJoins($SQL,"{$FieldPrefix}UI","{$FieldPrefix}UI_");

		return;
	}

	static protected function
	ExtendQueryFields($SQL, String $TablePrefix='', String $FieldPrefix=''):
	Void {
	/*//
	@date 2018-06-08
	//*/

		Atlantis\Prototype\BlogPost::ExtendMainFields($SQL,"{$FieldPrefix}BP","{$FieldPrefix}BP_");
		Atlantis\Prototype\BlogPost::ExtendQueryFields($SQL,"{$FieldPrefix}BP","{$FieldPrefix}BP_");

		Atlantis\Prototype\UploadImage::ExtendMainFields($SQL,"{$FieldPrefix}UI","{$FieldPrefix}UI_");
		Atlantis\Prototype\UploadImage::ExtendQueryFields($SQL,"{$FieldPrefix}UI","{$FieldPrefix}UI_");

		return;
	}

	static protected function
	FindExtendOptions($Opt):
	Array {
	/*//
	@date 2020-05-23
	//*/

		return [
			'PostID'  => NULL,
			'ImageID' => NULL,
			'Enabled' => NULL
		];
	}

	static protected function
	FindApplyFilters($Opt,$SQL):
	Void {
	/*//
	@date 2018-06-08
	//*/

		if($Opt->PostID !== NULL)
		$SQL->Where('Main.PostID=:PostID');

		if($Opt->ImageID !== NULL)
		$SQL->Where('Main.ImageID=:ImageID');

		return;
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	static public function
	DropByPostID(Int $PostID):
	Void {

		$SQL = Nether\Database::Get()->NewVerse();

		$Result = $SQL
		->Delete(sprintf('%s',static::$Table))
		->Where('PostID=:PostID')
		->Query([ ':PostID'=>$PostID ]);

		return;
	}

	static public function
	GetBytesByBlogID(Int $BlogID):
	Int {

		$SQL = Nether\Database::Get()->NewVerse();
		$Blog = Atlantis\Prototype\Blog::GetByID($BlogID);
		$Where = [];

		$SQL
		->Select('UploadImages UI')
		->Join('BlogPostUploadImages PI ON PI.ImageID=UI.ID')
		->Join('BlogPosts BP ON BP.ID=PI.PostID')
		->Join('Blogs BL ON BL.ID=BP.BlogID')
		->Fields('SUM(UI.Bytes) AS TotalBytes');

		$Where[] = 'BL.ID=:BlogID';

		if($Blog->ImageHeaderID)
		$Where[] = 'UI.ID=:ImageHeaderID';

		if($Blog->ImageIconID)
		$Where[] = 'UI.ID=:ImageIconID';

		$SQL->Where($Where,$SQL::WhereOr);

		$Result = $SQL->Query([
			':BlogID'        => $BlogID,
			':ImageHeaderID' => $Blog->ImageHeaderID,
			':ImageIconID'   => $Blog->ImageIconID
		]);

		$Bytes = (Int)($Result->Next()->TotalBytes);

		return $Bytes;
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	static public function
	Insert($Opt):
	self {

		$Opt = new Nether\Object\Mapped($Opt,[
			'PostID'  => NULL,
			'ImageID' => NULL
		]);

		if(!$Opt->PostID)
		throw new Exception('PostID cannot be empty.');

		if(!$Opt->ImageID)
		throw new Exception('ImageID cannot be empty.');

		return parent::Insert($Opt);
	}

	static public function
	Upsert($Opt=NULL,$Upt=NULL):
	self {

		$Opt = new Nether\Object\Mapped($Opt,[
			'PostID'  => NULL,
			'ImageID' => NULL
		]);

		$Upt = new Nether\Object\Mapped($Opt,[
			'PostID'  => $Opt->PostID,
			'ImageID' => $Opt->ImageID
		]);

		if(!$Opt->PostID)
		throw new Exception('PostID cannot be empty.');

		if(!$Opt->ImageID)
		throw new Exception('ImageID cannot be empty.');

		return parent::Upsert($Opt,$Upt);
	}

}
