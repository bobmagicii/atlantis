<?php

namespace Atlantis\Prototype;

use Atlantis;
use Nether;

use Exception;
use Atlantis\Struct\EditorJS;

class BlogPost
extends Atlantis\Prototype {

	protected static
	$Table = 'BlogPosts';

	protected static
	$IDField = 'ID';

	protected static
	$PropertyMap = [
		'ID'              => 'ID:int',
		'BlogID'          => 'BlogID:int',
		'UserID'          => 'UserID:int',
		'ImageID'         => 'ImageID:int',
		'TimeCreated'     => 'TimeCreated:int',
		'TimeUpdated'     => 'TimeUpdated:int',
		'Enabled'         => 'Enabled:int',
		'CountViews'      => 'CountViews:int',
		'CountComments'   => 'CountComments:int',
		'CountImages'     => 'CountImages:int',
		'CountCodeBlocks' => 'CountCodeBlocks:int',
		'TimeToRead'      => 'TimeToRead:int',
		'UUID'            => 'UUID',
		'OptAdult'        => 'OptAdult:int',
		'OptComments'     => 'OptComments:int',
		'Title'           => 'Title',
		'Alias'           => 'Alias',
		'Content'         => 'Content',
		'ContentJSON'     => 'ContentJSON'
	];

	// database fields.

	public int $ID;
	public int $BlogID;
	public int $UserID;
	public ?int $ImageID;
	public int $TimeCreated;
	public int $TimeUpdated;
	public int $Enabled;
	public int $CountViews;
	public int $CountComments;
	public int $CountImages;
	public int $CountCodeBlocks;
	public int $TimeToRead;
	public string $UUID;
	public string $Title;
	public string $Alias;
	public ?string $Content;
	public ?string $ContentJSON;
	public int $OptAdult;
	public int $OptComments;

	// extension fields.

	public ?string $URL;
	public ?Atlantis\Prototype\Blog $Blog;
	public ?Atlantis\Prototype\User $User;
	public ?Atlantis\Prototype\UploadImage $Image;
	public Atlantis\Util\Date $DateCreated;
	public Atlantis\Util\Date $DateUpdated;
	public ?Nether\Object\Datastore $Tags;

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
		$this->Tags = NULL;

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
		$this->Image = NULL;

		if(array_key_exists('B_ID',$Raw) && $Raw['B_ID'])
		$this->Blog = new Atlantis\Prototype\Blog(
			Atlantis\Util::StripPrefixedQueryFields(
				$Raw, 'B_'
			)
		);

		if(array_key_exists('I_ID',$Raw) && $Raw['I_ID'])
		$this->Image = new Atlantis\Prototype\UploadImage(
			Atlantis\Util::StripPrefixedQueryFields(
				$Raw, 'I_'
			)
		);

		//Atlantis\Util::VarDump(array_keys($Raw)); die();

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
	GetEditURL():
	?Atlantis\Site\Endpoint {
	/*//
	@date 2021-04-17
	//*/

		return Atlantis\Site\Endpoint::Get(
			'Atlantis.Dashboard.Blog.Post.Edit',
			[ 'PostID'=> $this->ID ]
		);
	}

	public function
	GetDeleteURL():
	?Atlantis\Site\Endpoint {
	/*//
	@date 2021-04-17
	//*/

		return Atlantis\Site\Endpoint::Get(
			'Atlantis.Dashboard.Blog.Post.Delete',
			[ 'PostID'=> $this->ID ]
		);
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
	/*//
	@date 2020-09-29
	//*/

		$Opt = new Nether\Object\Mapped($Opt,[
			'PostID' => $this->ID,
			'Limit'  => 0
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
	GetShortDesc(int $Len=600):
	?string {
	/*//
	@date 2020-10-23
	//*/

		$Output = '';
		$Block = NULL;
		$Struct = $this->StructureFromJSON();

		foreach($Struct->Blocks as $Block)
		if($Block instanceof EditorJS\Blocks\Paragraph) {
			$Output = strip_tags($Block->Data->Text);
			break;
		}

		if($Output !== NULL && strlen($Output) > $Len) {
			$Output = substr($Output,0,$Len);
			$Output .= ' [...]';
		}

		return $Output;
	}

	public function
	GetMinutesToRead():
	int {
	/*//
	@date 2021-04-16
	//*/

		return round($this->TimeToRead / 60);
	}

	public function
	BumpCountViews(int $Inc=1):
	static {
	/*//
	@date 2020-10-03
	//*/

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
			'CountComments'   => $this->UpdateCountComments(FALSE),
			'CountImages'     => $this->UpdateCountImages(FALSE),
			'CountCodeBlocks' => $this->UpdateCountCodeBlocks(FALSE),
			'TimeToRead'      => $this->UpdateTimeToRead(FALSE)
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

	public function
	UpdateCountImages(bool $Commit=TRUE):
	int {
	/*//
	@date 2021-04-15
	//*/

		if(!$this->ContentJSON)
		return 0;

		$Struct = EditorJS\Content::FromString($this->ContentJSON);
		$Images = $Struct->Blocks->Filter(
			fn(EditorJS\Block $B)=>
			($B instanceof EditorJS\Blocks\Image)
		);

		if($Commit)
		$this->Update([
			'CountImages' => $Images->Count()
		]);

		return $Images->Count();
	}

	public function
	UpdateCountCodeBlocks(bool $Commit=TRUE):
	int {
	/*//
	@date 2021-04-15
	//*/

		if(!$this->ContentJSON)
		return 0;

		$Struct = EditorJS\Content::FromString($this->ContentJSON);
		$Blocks = $Struct->Blocks->Filter(
			fn(EditorJS\Block $B)=>
			($B instanceof EditorJS\Blocks\CodeMirror)
			&& ($B->Data->Mime !== "text/plain")
		);

		if($Commit)
		$this->Update([
			'CountCodeBlocks' => $Blocks->Count()
		]);

		return $Blocks->Count();
	}

	public function
	UpdateTimeToRead(bool $Commit=TRUE):
	int {
	/*//
	@date 2021-04-15
	//*/

		if(!$this->ContentJSON)
		return 0;

		$Struct = EditorJS\Content::FromString($this->ContentJSON);
		$Words = (
			($Struct->Blocks)
			->Accumulate(0,function(int $Carry, EditorJS\Block $B){
				if($B instanceof EditorJS\Blocks\Paragraph)
				$Carry += str_word_count($B->Data->Text);

				elseif($B instanceof EditorJS\Blocks\CodeMirror)
				$Carry += str_word_count($B->Data->Text);

				return $Carry;
			})
		);

		// the internet suggests 200 is a decent wpm for the average person.
		// i want to store it as estimated seconds to read though.

		$TimeToRead = ($Words / 200) * 60;

		if($Commit)
		$this->Update([ 'TimeToRead' => $TimeToRead ]);

		return $TimeToRead;
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
	BindTagsToResult($Output,$Opt):
	void {
	/*//
	@date 2021-04-11
	given a search result perform one single query to get the tags for all
	of them and then distribute the tags across the result objects.
	//*/

		if(!$Output->Payload->Count())
		return;

		// determine which posts we need to search for.

		$Which = $Output->Payload->Map(fn($Val)=> $Val->ID);

		// get all of those tags then.

		$Tags = Atlantis\Prototype\BlogPostTag::Find([
			'PostID'=>$Which->Value()
		]);

		// bind the relevant tags to each of the output objects.

		($Output->Payload)
		->Each(
			fn($Post)=>
			$Post->Tags = (
				($Tags->Payload)
				->Distill(fn($Tag)=> ($Tag->PostID === $Post->ID))
				->Remap((fn($Tag)=> $Tag->Tag))
			)
		);

		return;
	}

	static public function
	BindTagsToResultCallable():
	mixed {
	/*//
	@date 2021-04-11
	//*/

		return (static fn($Output,$Opt)=> static::BindTagsToResult($Output,$Opt));
	}

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
		->Join("Users {$FieldPrefix}PU ON {$TableAlias}.UserID={$FieldPrefix}PU.ID")
		->Join("UploadImages {$FieldPrefix}PI ON {$TableAlias}.ImageID={$FieldPrefix}PI.ID");

		Atlantis\Prototype\Blog::ExtendQueryJoins($SQL,"{$FieldPrefix}BL","{$FieldPrefix}B_");
		Atlantis\Prototype\UploadImage::ExtendQueryJoins($SQL,"{$FieldPrefix}PI","{$FieldPrefix}I_");

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
		Atlantis\Prototype\UploadImage::ExtendMainFields($SQL,"{$FieldPrefix}PI","{$FieldPrefix}I_");
		Atlantis\Prototype\UploadImage::ExtendQueryFields($SQL,"{$FieldPrefix}PI","{$FieldPrefix}I_");

		return;
	}

	static protected function
	FindExtendOptions($Opt):
	array {
	/*//
	@date 2020-05-23
	//*/

		return [
			'Adult'            => 0,
			'Alias'            => NULL,
			'BlogID'           => NULL,
			'BlogAlias'        => NULL,
			'Tags'             => NULL,
			'BindTagsToResult' => FALSE
		];
	}

	static protected function
	FindApplyFilters($Opt,$SQL):
	void {
	/*//
	@date 2018-06-08
	//*/

		if(!property_exists($Opt,'OutputFilter'))
		$Opt->OutputFilter = [];
		if(!is_array($Opt->OutputFilter))
		$Opt->OutputFilter = [ $Opt->OutputFilter ];

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

		if($Opt->BindTagsToResult)
		$Opt->OutputFilter[] = static::BindTagsToResultCallable();

		return;
	}

	static protected function
	FindApplySorts($Opt,$SQL):
	void {
	/*//
	@date 2021-04-17
	//*/

		switch($Opt->Sort) {
			case 'views-most':
				$SQL->Sort('Main.CountViews',$SQL::SortDesc);
			break;
			case 'views-least':
				$SQL->Sort('Main.CountViews',$SQL::SortAsc);
			break;
			case 'commented-most':
				$SQL->Sort('Main.CountComments',$SQL::SortDesc);
			break;
			case 'commented-least':
				$SQL->Sort('Main.CountComments',$SQL::SortAsc);
			break;
			case 'ttr-longest':
				$SQL->Sort('Main.TimeToRead',$SQL::SortDesc);
			break;
			case 'ttr-shortest':
				$SQL->Sort('Main.TimeToRead',$SQL::SortAsc);
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
			'ImageID'     => NULL,
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
