<?php

namespace Atlantis\Prototype;
use Atlantis;
use Nether;

use Exception;
use JsonSerializable;

class BlogPostComment
extends Atlantis\Prototype
implements JsonSerializable {

	protected static
	$Table = 'BlogPostComments';

	protected static
	$IDField = 'ID';

	protected static
	$PropertyMap = [
		'ID'             => 'ID:int',
		'UUID'           => 'UUID',
		'BlogID'         => 'BlogID:int',
		'PostID'         => 'PostID:int',
		'UserID'         => 'UserID:int',
		'RemoteAddr'     => 'RemoteAddr:int',
		'TimeCreated'    => 'TimeCreated:int',
		'TimeUpdated'    => 'TimeUpdated:int',
		'Name'           => 'Name',
		'Content'        => 'Content'
	];

	// database fields.

	public int $ID;
	public string $UUID;
	public int $BlogID;
	public int $PostID;
	public int $UserID;
	public int $TimeCreated;
	public int $TimeUpdated;
	public ?string $Name;
	public string $Content;

	// extension fields.

	public ?Atlantis\Prototype\Blog $Blog;
	public ?Atlantis\Prototype\BlogPost $Post;
	public ?Atlantis\Prototype\User $User;
	public Atlantis\Util\Date $DateCreated;
	public Atlantis\Util\Date $DateUpdated;

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
		->OnReady_GetBlogPost($Raw)
		->OnReady_GetDates($Raw);

		$this->RemoteAddr = inet_ntop($this->RemoteAddr);

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

		if(array_key_exists('CU_ID',$Raw) && $Raw['CU_ID'])
		$this->User = new Atlantis\Prototype\User(
			Atlantis\Util::StripPrefixedQueryFields(
				$Raw, 'CU_'
			),
			TRUE
		);

		return $this;
	}

	protected function
	OnReady_GetBlogPost(array $Raw):
	self {
	/*//
	@date2021-04-10
	//*/

		$this->Post = NULL;

		if(array_key_exists('CP_ID',$Raw) && $Raw['CP_ID'])
		$this->Post = new Atlantis\Prototype\BlogPost(
			Atlantis\Util::StripPrefixedQueryFields(
				$Raw, 'CP_'
			)
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

	public function
	JsonSerialize():
	array {
	/*//
	@date 2020-06-01
	@implements JsonSerializable
	//*/

		return [
			'ID'              => $this->ID,
			'UUID'            => $this->UUID,
			'BlogID'          => $this->BlogID,
			'PostID'          => $this->PostID,
			'TimeCreated'     => $this->TimeCreated,
			'TimeUpdated'     => $this->TimeUpdated,
			'DateTimeCreated' => $this->DateCreated->Fancy(),
			'DateTimeUpdated' => $this->DateUpdated->Fancy(),
			'User'            => $this->User,
			'Name'            => ($this->User?$this->User->Alias:$this->Name),
			'Content'         => $this->Content
		];
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
		->Join("Blogs {$FieldPrefix}CB ON {$TableAlias}.BlogID={$FieldPrefix}CB.ID")
		->Join("BlogPosts {$FieldPrefix}CP ON {$TableAlias}.PostID={$FieldPrefix}CP.ID")
		->Join("Users {$FieldPrefix}CU ON {$TableAlias}.UserID={$FieldPrefix}CU.ID");

		Atlantis\Prototype\Blog::ExtendQueryJoins($SQL,"{$FieldPrefix}CB","{$FieldPrefix}CB_");
		Atlantis\Prototype\BlogPost::ExtendQueryJoins($SQL,"{$FieldPrefix}CP","{$FieldPrefix}CP_");
		Atlantis\Prototype\User::ExtendQueryJoins($SQL,"{$FieldPrefix}CU","{$FieldPrefix}CU_");

		return;
	}

	static protected function
	ExtendQueryFields($SQL, string $TablePrefix='', string $FieldPrefix=''):
	void {
	/*//
	@date 2018-06-08
	//*/

		Atlantis\Prototype\Blog::ExtendMainFields($SQL,"{$FieldPrefix}CB","{$FieldPrefix}CB_");
		Atlantis\Prototype\Blog::ExtendQueryFields($SQL,"{$FieldPrefix}CB","{$FieldPrefix}CB_");

		Atlantis\Prototype\BlogPost::ExtendMainFields($SQL,"{$FieldPrefix}CP","{$FieldPrefix}CP_");
		Atlantis\Prototype\BlogPost::ExtendQueryFields($SQL,"{$FieldPrefix}CP","{$FieldPrefix}CP_");

		Atlantis\Prototype\User::ExtendMainFields($SQL,"{$FieldPrefix}CU","{$FieldPrefix}CU_");
		Atlantis\Prototype\User::ExtendQueryFields($SQL,"{$FieldPrefix}CU","{$FieldPrefix}CU_");

		return;
	}

	static protected function
	FindExtendOptions($Opt):
	array {
	/*//
	@date 2020-05-23
	//*/

		return [
			'Enabled' => NULL,
			'BlogID'  => NULL,
			'PostID'  => NULL,
			'UserID'  => NULL
		];
	}

	static protected function
	FindApplyFilters($Opt,$SQL):
	void {
	/*//
	@date 2018-06-08
	//*/

		if($Opt->BlogID !== NULL)
		$SQL->Where('Main.BlogID=:BlogID');

		if($Opt->PostID !== NULL)
		$SQL->Where('Main.PostID=:PostID');

		if($Opt->UserID !== NULL)
		$SQL->Where('Main.UserID=:UserID');

		return;
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	static public function
	Insert($Opt):
	self {

		$Opt = new Nether\Object\Mapped($Opt,[
			'UUID'        => Atlantis\Util::UUID(),
			'BlogID'      => NULL,
			'PostID'      => NULL,
			'UserID'      => NULL,
			'RemoteAddr'  => NULL,
			'TimeCreated' => time(),
			'TimeUpdated' => time(),
			'Name'        => NULL,
			'Content'     => NULL
		]);

		if(!$Opt->BlogID)
		throw new Exception('Comment must have a Blog ID');

		if(!$Opt->PostID)
		throw new Exception('Comment must have a Post ID');

		if($Opt->RemoteAddr)
		$Opt->RemoteAddr = inet_pton($Opt->RemoteAddr);

		return parent::Insert($Opt);
	}

}
