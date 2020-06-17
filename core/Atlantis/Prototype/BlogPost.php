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
		'OptAdult'    => 'OptAdult:int',
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
	public Int $OptAdult;

	// extension fields.

	public ?Atlantis\Prototype\Blog $Blog;
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
		->OnReady_GetBlog($Raw)
		->OnReady_GetUser($Raw)
		->OnReady_GetDates($Raw);

		$this->URL = $this->GetURL();

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

		if(array_key_exists('BL_ID',$Raw))
		$this->Blog = new Atlantis\Prototype\Blog(
			Atlantis\Util::StripPrefixedQueryFields(
				$Raw, 'BL_'
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

		$this->DateCreated = new Atlantis\Util\Date("@{$this->TimeCreated}");
		$this->DateUpdated = new Atlantis\Util\Date("@{$this->TimeUpdated}");
		return $this;
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	public function
	GetURL():
	?Atlantis\Site\Endpoint {
	/*//
	@date 2017-03-02
	get the url to view this blog post.
	//*/

		return Atlantis\Site\Endpoint::Get('Atlantis.Blog.Post',[
			'BlogAlias' => $this->Blog->Alias,
			'PostAlias' => $this->Alias
		]);
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	static public function
	GetByAlias(String $BlogAlias, String $Alias):
	?self {

		$SQL = Nether\Database::Get()->NewVerse();
		$Result = NULL;

		////////

		$SQL
		->Select(sprintf('%s Main',static::$Table))
		->Fields('Main.*')
		->Where('BL.Alias LIKE :BlogAlias')
		->Where('Main.Alias LIKE :Alias')
		->Limit(1);

		static::ExtendQueryJoins($SQL);
		static::ExtendQueryFields($SQL);

		$Result = $SQL->Query([
			':BlogAlias' => $BlogAlias,
			':Alias'     => $Alias
		]);

		////////

		if(!$Result->IsOK())
		throw new Atlantis\Error\DatabaseQueryError($Result);

		if($Result->GetCount() !== 1)
		return NULL;

		return new static($Result->Next());
	}

	static public function
	GenerateUniqueAlias(Blog $Blog, String $Title):
	String {

		$Alias = Atlantis\Util\Filters::RouteSafeAlias($Title);
		$AliasTest = $Alias;
		$Existing = NULL;
		$Iter = 1;
		$Next = NULL;

		do {

			$Existing = static::GetByAlias(
				$Blog->Alias,
				$AliasTest
			);

			if($Existing) {
				$Next = str_replace('.','',(String)microtime(TRUE));
				$AliasTest = sprintf('%s-%s',$Alias,$Next);
			}

			$Iter++;
		} while($Existing);

		return $AliasTest;
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
		->Join('Blogs BL ON Main.BlogID=BL.ID')
		->Join('Users BU ON BL.UserID=BU.ID')
		->Join('Users PU ON Main.UserID=PU.ID');

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
			'BL', 'BL_'
		))
		->Fields(Atlantis\Util::BuildPrefixedQueryFields(
			Atlantis\User::GetPropertyMap(),
			'BU', 'BL_BU_'
		))
		->Fields(Atlantis\Util::BuildPrefixedQueryFields(
			Atlantis\User::GetPropertyMap(),
			'PU', 'PU_'
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
			'Adult'     => 0,
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

		if($Opt->Adult !== NULL)
		$SQL->Where('Main.OptAdult=:Adult');

		if($Opt->Alias !== NULL)
		$SQL->Where('Main.Alias LIKE :Alias');

		if($Opt->BlogID !== NULL)
		$SQL->Where('Main.BlogID=:BlogID');

		if($Opt->BlogAlias !== NULL)
		$SQL->Where('BL.Alias LIKE :BlogAlias');

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
			'Title'       => NULL,
			'Alias'       => NULL,
			'Content'     => NULL,
			'OptAdult'    => 0,

			'TimeCreated' => time(),
			'TimeUpdated' => time(),
			'Enabled'     => 1,
			'UUID'        => Atlantis\Util::UUID()
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

		return parent::Insert($Opt);
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

}
