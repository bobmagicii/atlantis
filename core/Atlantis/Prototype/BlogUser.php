<?php

namespace Atlantis\Prototype;

use
\Atlantis as Atlantis,
\Nether   as Nether,
\Ramsey   as Ramsey;

use
\Exception as Exception;

class BlogUser
extends Atlantis\Prototype {

	const
	FlagOwner  = 0b00000001,
	FlagWriter = 0b00000010,
	FlagManage = 0b00000100,
	FlagEditor = 0b00001000;

	protected static
	$Table = 'BlogUsers';

	protected static
	$IDField = 'ID';

	protected static
	$PropertyMap = [
		'ID'          => 'ID:int',
		'BlogID'      => 'BlogID:int',
		'UserID'      => 'UserID:int',
		'Flags'       => 'Flags:int',
		'Enabled'     => 'Enabled:int',
		'TimeCreated' => 'TimeCreated:int',
		'TimeUpdated' => 'TimeUpdated:int',
		'UUID'        => 'UUID'
	];

	// database fields.

	public Int $ID;
	public Int $BlogID;
	public ?Atlantis\Prototype\Blog $Blog;
	public Int $UserID;
	public Int $Flags;
	public Int $Enabled;
	public Int $TimeCreated;
	public Int $TimeUpdated;
	public String $UUID;

	// extension fields.

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
		->OnReady_GetBlog($Raw)
		->OnReady_GetUser($Raw)
		->OnReady_GetDates($Raw);

		return;
	}

	protected function
	OnReady_GetBlog(Array $Raw):
	self {
	/*//
	prepare a blog object depending on if it was fetched with an inclusion
	query or not.
	//*/

		$this->Blog = NULL;

		if(array_key_exists('B_ID',$Raw))
		$this->Blog = new Atlantis\Prototype\Blog(
			Atlantis\Util::StripPrefixedQueryFields(
				$Raw, 'B_'
			)
		);

		return $this;
	}

	protected function
	OnReady_GetUser(Array $Raw):
	self {
	/*//
	prepare a blog object depending on if it was fetched with an inclusion
	query or not.
	//*/

		$this->User = NULL;

		if(array_key_exists('U_ID',$Raw))
		$this->User = new Atlantis\User(
			Atlantis\Util::StripPrefixedQueryFields(
				$Raw, 'U_'
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

		$this->DateCreated = new Atlantis\Util\Date("@{$this->TimeCreated}");
		$this->DateUpdated = new Atlantis\Util\Date("@{$this->TimeUpdated}");
		return $this;
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	public function
	HasFlagsAny(Int $Flags):
	Bool {

		return Atlantis\Util::BitwiseAndAny($this->Flags,$Flags);
	}

	public function
	HasFlagsAll(Int $Flags):
	Bool {

		return Atlantis\Util::BitwiseAndAll($this->Flags,$Flags);
	}

	public function
	HasOwnerPriv():
	Bool {

		return $this->HasFlagsAll(static::FlagOwner);
	}

	public function
	HasManagePriv():
	Bool {

		return $this->HasFlagsAny(static::FlagOwner|static::FlagManage);
	}

	public function
	HasWritePriv():
	Bool {

		return $this->HasFlagsAny(static::FlagOwner|static::FlagWriter);
	}

	public function
	HasEditPriv():
	Bool {

		return $this->HasFlagsAny(static::FlagOwner|static::FlagEditor);
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	static public function
	GetByBlogUser(Int $BlogID, Int $UserID):
	?self {
	/*//
	@date 2020-06-05
	//*/

		$Result = static::Find([
			'BlogID' => $BlogID,
			'UserID' => $UserID,
			'Limit'  => 1
		]);

		if(!$Result->Total)
		return NULL;

		return $Result->Payload->Current();
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	static protected function
	ExtendQueryJoins($SQL):
	Void {
	/*//
	@date 2018-06-08
	//*/

		$SQL
		->Join('Blogs Bl ON Main.BlogID=Bl.ID')
		->Join('Users Us ON Main.UserID=Us.ID');

		Atlantis\Prototype\Blog::ExtendQueryJoins($SQL,'Bl');
		Atlantis\Prototype\Blog::ExtendQueryFields($SQL,'B_');

		return;
	}

	static protected function
	ExtendQueryFields($SQL):
	Void {
	/*//
	@date 2018-06-08
	//*/

		$SQL
		->Fields(Atlantis\Util::BuildPrefixedQueryFields(
			Atlantis\Prototype\Blog::GetPropertyMap(),
			'Bl', 'B_'
		))
		->Fields(Atlantis\Util::BuildPrefixedQueryFields(
			Atlantis\User::GetPropertyMap(),
			'Us', 'U_'
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
			'Alias'  => NULL,
			'BlogID' => NULL
		];
	}

	static protected function
	FindApplyFilters($Opt,$SQL):
	Void {
	/*//
	@date 2018-06-08
	//*/

		if($Opt->BlogID !== NULL)
		$SQL->Where('Main.BlogID = :BlogID');

		if($Opt->Alias !== NULL)
		$SQL->Where('Main.Alias LIKE :Alias');

		return;
	}

	static protected function
	FindApplySorts($Opt,$SQL):
	Void {
	/*//
	@date 2018-06-08
	//*/

		switch($Opt->Sort) {
			case 'blog-title-az':
				$SQL->Sort('Bl.Title',$SQL::SortAsc);
			break;
			case 'blog-title-za':
				$SQL->Sort('Bl.Title',$SQL::SortDesc);
			break;
		}

		return;
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	static public function
	Insert($Opt):
	self {

		$Opt = new Nether\Object\Mapped($Opt,[
			'BlogID'      => 0,
			'UserID'      => 0,
			'Flags'       => 0,
			'Enabled'     => 1,
			'TimeCreated' => time(),
			'TimeUpdated' => time(),
			'UUID'        => Atlantis\Util::UUID()
		]);

		if(!$Opt->BlogID)
		throw new Exception('Must have a BlogID.');

		if(!$Opt->UserID)
		throw new Exception('Must have a UserID.');

		return parent::Insert($Opt);
	}

}
