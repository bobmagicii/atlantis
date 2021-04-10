<?php

namespace Atlantis\Prototype;

use Atlantis;
use Nether;

use Exception;

class BlogPost
extends Atlantis\Prototype {

	protected static
	$Table = 'BlogPosts';

	protected static
	$IDField = 'ID';

	protected static
	$PropertyMap = [
		'ID'            => 'ID:int',
		'BlogID'        => 'BlogID:int',
		'UserID'        => 'UserID:int',
		'TimeCreated'   => 'TimeCreated:int',
		'TimeUpdated'   => 'TimeUpdated:int',
		'Enabled'       => 'Enabled:int',
		'CountViews'    => 'CountViews:int',
		'CountComments' => 'CountComments:int',
		'UUID'          => 'UUID',
		'OptAdult'      => 'OptAdult:int',
		'OptComments'   => 'OptComments:int',
		'Title'         => 'Title',
		'Alias'         => 'Alias',
		'Content'       => 'Content',
		'ContentJSON'   => 'ContentJSON'
	];

	// database fields.

	public int $ID;
	public int $BlogID;
	public int $UserID;
	public int $TimeCreated;
	public int $TimeUpdated;
	public int $Enabled;
	public int $CountViews;
	public int $CountComments;
	public string $UUID;
	public string $Title;
	public string $Alias;
	public ?string $Content;
	public ?string $ContentJSON;
	public int $OptAdult;
	public int $OptComments;

	// extension fields.

	public ?Atlantis\Prototype\Blog $Blog;
	public ?Atlantis\Prototype\User $User;
	public ?string $URL;
	public Atlantis\Util\Date $DateCreated;
	public Atlantis\Util\Date $DateUpdated;

	protected ?Atlantis\Struct\EditorJS\Content $StructJSON;

	// flags and stuff

	public const
	EnableStateAny      = NULL,
	EnableStateNuked    = -1,
	EnableStateDraft    = 0,
	EnableStatePublic   = 1,
	EnableStateUnlisted = 2,
	EnableStateFriends  = 3;

	public const
	CommentsDisabled  = 0,
	CommentsPublic    = 1,
	CommentsEnabled   = 1,
	CommentsProtected = 2,
	CommentsMembers   = 2,
	CommentsPrivate   = 3,
	CommentsFriends   = 3;

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	public function
	OnReady(array $Raw):
	void {
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
	OnReady_GetBlog(array $Raw):
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
	OnReady_GetUser(array $Raw):
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
	OnReady_GetDates(array $Raw):
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

	public function
	GetURL():
	?Atlantis\Site\Endpoint {
	/*//
	@date 2017-03-02
	get the url to view this blog post.
	//*/

		return Atlantis\Site\Endpoint::Get('Atlantis.Blog.Post',[
			'BlogAlias' => $this->Blog->Alias,
			'PostAlias' => $this->Alias,
			'PostID'    => $this->ID
		]);
	}

	public function
	GetBlogUser(?Atlantis\Prototype\User $User):
	?Atlantis\Prototype\BlogUser {
	/*//
	@date 2020-07-04
	fetch the blog's BlogUser object for checking extended user permissions.
	//*/

		if(!$User)
		return NULL;

		return Atlantis\Prototype\BlogUser::GetByBlogUser(
			$this->Blog->ID,
			$User->ID
		);
	}

	public function
	GetTags($Opt=NULL):
	Atlantis\Struct\SearchResult {

		$Opt = new Nether\Object\Mapped($Opt,[
			'PostID' => $this->ID
		]);

		return Atlantis\Prototype\BlogPostTag::Find($Opt);
	}

	public function
	GetStyleClassList():
	array {
	/*//
	@date 2020-09-04
	//*/

		$Output = [];

		if($this->IsAdult())
		$Output[] = 'PostFlagAdult';

		if($this->IsDraft())
		$Output[] = 'PostFlagDraft';
		elseif($this->IsPublic())
		$Output[] = 'PostFlagPublic';
		elseif($this->IsFriendsOnly())
		$Output[] = 'PostFlagFriends';
		elseif($this->IsNuked())
		$Output[] = 'PostFlagNuled';

		return $Output;
	}

	public function
	GetStyleClassAttr():
	string {
	/*//
	@date 2020-09-04
	//*/

		return join(' ',$this->GetStyleClassList());
	}

	public function
	GetShortDesc():
	string {

		$Output = '';
		$Block = NULL;

		$Struct = $this->StructureFromJSON();
		foreach($Struct->Blocks as $Block)
		if($Block instanceof Atlantis\Struct\EditorJS\Blocks\Paragraph) {
			$Output = substr($Block->Data->Text,0,256);
			break;
		}

		return $Output;
	}

	public function
	BumpCountViews(int $Inc=1):
	static {

		$this->Update([
			'CountViews' => ($this->CountViews + 1)
		]);

		return $this;
	}

	public function
	UpdateCounts():
	static {
	/*//
	@date 2021-04-10
	//*/

		$this->Update([
			'CountComments' => $this->UpdateCountComments(FALSE)
		]);

		return $this;
	}

	public function
	UpdateCountComments(bool $Commit=TRUE):
	int {
	/*//
	@date 2021-04-10
	//*/

		$Comments = Atlantis\Prototype\BlogPostComment::Find([
			'PostID' => $this->ID,
			'Quick'  => TRUE
		]);

		if($Commit)
		$this->Update([
			'CountComments' => $Comments->Total
		]);

		return $Comments->Total;
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	public function
	IsAdult():
	bool {
	/*//
	@date 2020-06-18
	//*/

		return ($this->OptAdult !== Blog::AdultDisabled);
	}

	public function
	IsAdultForced():
	bool {
	/*//
	@date 2020-06-18
	//*/

		return ($this->OptAdult === Blog::AdultForced);
	}

	public function
	IsNuked():
	bool {
	/*//
	@date 2020-09-04
	//*/

		return ($this->Enabled === static::EnableStateNuked);
	}

	public function
	IsDraft():
	bool {
	/*//
	@date 2020-09-04
	//*/

		return ($this->Enabled === static::EnableStateDraft);
	}

	public function
	IsPublic():
	bool {
	/*//
	@date 2020-09-04
	//*/

		return ($this->Enabled === static::EnableStatePublic);
	}

	public function
	IsFriendsOnly():
	bool {
	/*//
	@date 2020-09-04
	//*/

		return ($this->Enabled === static::EnableStateFriends);
	}

	public function
	IsUserOwner(?Atlantis\Prototype\User $User):
	bool {
	/*//
	@date 2020-07-04
	//*/

		if(!$User)
		return FALSE;

		return ($this->User->ID === $User->ID);
	}

	public function
	IsCommentingAllowed(?Atlantis\Prototype\User $User=NULL):
	bool {
	/*//
	@date 2020-12-10
	//*/

		return match($this->OptComments) {
			static::CommentsDisabled  => FALSE,
			static::CommentsPublic    => TRUE,
			static::CommentsProtected => ($User instanceof Atlantis\Prototype\User),
			static::CommentsPrivate   => $this->User->IsFriendsWith($User),
			default => FALSE
		};
	}

	public function
	IsCommentingPublic():
	bool {
	/*//
	@date 2021-04-10
	//*/

		return ($this->OptComments === static::CommentsPublic);
	}

	public function
	IsCommentingProtected():
	bool {
	/*//
	@date 2021-04-10
	//*/

		return ($this->OptComments === static::CommentsProtected);
	}

	public function
	IsCommentingPrivate():
	bool {
	/*//
	@date 2021-04-10
	//*/

		return ($this->OptComments === static::CommentsPrivate);
	}

	public function
	IsCommentingDisabled():
	bool {
	/*//
	@date 2021-04-10
	//*/

		return ($this->OptComments === static::CommentsDisabled);
	}

	public function
	UpdateUploadImageUsage():
	void {
	/*//
	@date 2020-10-19
	//*/

		// @todo 2020-10-19 this

		// loop over the json struct
		// look for images from our upload system
		// build list of images
		// flush use list
		// insert new use list

		$Images = [];
		$Struct = $this->StructureFromJSON();
		$ImageID = 0;
		$Block = NULL;

		// find all the images from our upload system

		foreach($Struct->Blocks as $Block)
		if($Block instanceof Atlantis\Struct\EditorJS\Blocks\Image)
		if($Block->Data->ImageID)
		$Images[] = $Block->Data->ImageID;

		// clean out our old references.

		Atlantis\Prototype\BlogPostUploadImage::DropByPostID($this->ID);

		// insert new references

		$Images = array_unique($Images);

		foreach($Images as $ImageID)
		Atlantis\Prototype\BlogPostUploadImage::Insert([
			'PostID'  => $this->ID,
			'ImageID' => $ImageID
		]);

		return;
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	public function
	StructureFromJSON():
	Atlantis\Struct\EditorJS\Content {
	/*//
	@date 2020-10-19
	//*/

		if(!isset($this->StructJSON))
		$this->StructJSON = Atlantis\Struct\EditorJS\Content::FromString(
			$this->ContentJSON ?: 'null'
		);

		return $this->StructJSON;
	}

	public function
	RenderFromJSON():
	string {
	/*//
	@date 2020-10-09
	//*/

		$Output = '';
		$Block = NULL;
		$Content = $this->StructureFromJSON();

		foreach($Content->Blocks as $Block) {
			$Output .= (String)$Block;
		}

		return $Output;
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	static public function
	GetByAlias(string $BlogAlias, string $Alias):
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
	GenerateUniqueAlias(Blog $Blog, string $Title):
	string {

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
	ExtendQueryJoins($SQL, string $TableAlias='Main', string $FieldPrefix=''):
	void {
	/*//
	@date 2018-06-08
	//*/

		$SQL
		->Join("Blogs {$FieldPrefix}BL ON {$TableAlias}.BlogID={$FieldPrefix}BL.ID")
		->Join("Users {$FieldPrefix}PU ON {$TableAlias}.UserID={$FieldPrefix}PU.ID");

		Atlantis\Prototype\Blog::ExtendQueryJoins($SQL,"{$FieldPrefix}BL","{$FieldPrefix}B_");

		return;
	}

	static protected function
	ExtendQueryFields($SQL, string $TablePrefix='', string $FieldPrefix=''):
	void {
	/*//
	@date 2018-06-08
	//*/

		Atlantis\Prototype\User::ExtendMainFields($SQL,"{$FieldPrefix}PU","{$FieldPrefix}PU_");
		Atlantis\Prototype\Blog::ExtendMainFields($SQL,"{$FieldPrefix}BL","{$FieldPrefix}B_");
		Atlantis\Prototype\Blog::ExtendQueryFields($SQL,"{$FieldPrefix}BL","{$FieldPrefix}B_");

		return;
	}

	static protected function
	FindExtendOptions($Opt):
	array {
	/*//
	@date 2020-05-23
	//*/

		return [
			'Adult'     => 0,
			'Alias'     => NULL,
			'BlogID'    => NULL,
			'BlogAlias' => NULL,
			'Tags'      => NULL
		];
	}

	static protected function
	FindApplyFilters($Opt,$SQL):
	void {
	/*//
	@date 2018-06-08
	//*/

		if($Opt->Adult === FALSE)
		$Opt->Adult = 0;

		////////

		if(is_numeric($Opt->Adult))
		$SQL->Where('Main.OptAdult=:Adult');

		if($Opt->Alias !== NULL)
		$SQL->Where('Main.Alias LIKE :Alias');

		if($Opt->BlogID !== NULL)
		$SQL->Where('Main.BlogID=:BlogID');

		if($Opt->BlogAlias !== NULL)
		$SQL->Where('BL.Alias LIKE :BlogAlias');

		if(is_array($Opt->Tags) && count($Opt->Tags)) {
			$Opt->CountTags = count($Opt->Tags);

			$SQL
			->Fields('COUNT(*) PostTagNumAnd')
			->Join('BlogPostTags BPT ON BPT.PostID=Main.ID')
			->Where('BPT.TagID IN(:Tags)')
			->Group('Main.ID')
			->Having('PostTagNumAnd=:CountTags');
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

		if(!$Opt->Content && !$Opt->ContentJSON)
		throw new Exception('Content cannot be empty it a blog ffs');

		if(!$Opt->Alias)
		$Opt->Alias = Atlantis\Util\Filters::RouteSafeAlias($Opt->Title);

		return parent::Insert($Opt);
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

}
