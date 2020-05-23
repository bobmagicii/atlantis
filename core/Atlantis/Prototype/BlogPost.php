<?php

namespace Atlantis\Prototype;

use
\Atlantis as Atlantis,
\Nether   as Nether,
\Ramsey   as Ramsey;

use
\Exception as Exception;

class BlogPost
extends Atlantis\Prototype {

	protected static
	$Table = 'BlogPosts';

	protected static
	$IDField = 'ID';

	protected static
	$PropertyMap = [
		'ID'          => 'ID:int',
		'BlogID'      => 'BlogID:int',
		'UserID'      => 'UserID:int',
		'TimeCreated' => 'TimeCreated:int',
		'TimeUpdated' => 'TimeUpdated:int',
		'Enabled'     => 'Enabled:int',
		'UUID'        => 'UUID',
		'Title'       => 'Title',
		'Alias'       => 'Alias',
		'Content'     => 'Content'
	];

	// database fields.

	public Int $ID;
	public Int $BlogID;
	public Int $UserID;
	public Int $TimeCreated;
	public Int $TimeUpdated;
	public Int $Enabled;
	public String $UUID;
	public String $Title;
	public String $Alias;
	public String $Content;

	// extension fields.

	public ?Atlantis\Prototype\Blog $Blog;
	public ?Atlantis\User $User;
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
	GetURL():
	String {
	/*//
	@date 2017-03-02
	get the url to view this blog post.
	//*/

		return sprintf(
			'%s/%s',
			trim($this->Blog->GetURL(),'/'),
			$this->Alias
		);
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
			'Alias'     => NULL,
			'BlogID'    => NULL,
			'BlogAlias' => NULL
		];
	}

	static protected function
	FindApplyFilters($Opt,$SQL):
	Void {
	/*//
	@date 2018-06-08
	//*/

		if($Opt->Alias !== NULL)
		$SQL->Where('Main.Alias=:Alias');

		if($Opt->BlogID !== NULL)
		$SQL->Where('Main.BlogID=:BlogID');

		if($Opt->BlogAlias !== NULL)
		$SQL->Where('Bl.Alias=:BlogAlias');

		return;
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	static public function
	Create($Opt):
	self {

		$Opt = new Nether\Object\Mapped($Opt,[
			'BlogID'      => 0,
			'UserID'      => 0,
			'TimeCreated' => time(),
			'TimeUpdated' => time(),
			'Title'       => NULL,
			'Alias'       => NULL,
			'Content'     => NULL,
			'UUID'        => Ramsey\Uuid\Uuid::UUID4()->ToString()
		]);

		if(!$Opt->BlogID)
		throw new Exception('BlogID cannot be empty.');

		if(!$Opt->UserID)
		throw new Exception('UserID cannot be empty.');

		if(!$Opt->Title)
		throw new Exception('Title cannot be empty.');

		if(!$Opt->Content)
		throw new Exception('Content cannot be empty it a blog ffs');

		if(!$Opt->Alias)
		$Opt->Alias = Atlantis\Util\Filters::RouteSafeAlias($Opt->Title);

		return parent::Create($Opt);
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

}
