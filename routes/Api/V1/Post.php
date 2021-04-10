<?php

namespace Routes\Api\V1;

use Atlantis;
use Nether;

use Atlantis\Prototype\BlogPostComment;

class Post
extends Atlantis\Site\PublicAPI {

	/**
	 * @input ?Int ID
	 * @input ?String BlogAlias
	 * @input ?String Alias
	 */

	final public function
	EntityGet():
	Void {

		$this->RequireUserSession();

		$Post = NULL;

		if($this->Get->ID)
		$Post = Atlantis\Prototype\BlogPost::GetByID((Int)$this->Get->ID);

		elseif($this->Get->Alias && $this->Get->BlogAlias)
		$Post = Atlantis\Prototype\BlogPost::GetByAlias(
			$this->Get->BlogAlias,
			$this->Get->Alias
		);

		if(!$Post) {
			// todo: write a blog post about how 404 makes no god damn
			// sense since you found and succesfully queried the api
			// and that its none of the transport protocol's god damn
			// business to need to know if the result set was empty.
			$this->Quit(1,'not found');
		}

		$this
		->SetPayload($Post);

		return;
	}

	/**
	 * @input Int BlogID
	 * @input String Title
	 * @input String Content
	 * @input Int OptAdult
	 * @Input Bool OptDraft
	 */

	final public function
	EntityPost():
	Void {
	/*//
	@require user
	@error 1 blog user not found
	@error 2 blog user does not have write priv
	@error 3 error inserting post
	@error 4 post needs a title
	@error 5 post needs content
	//*/

		$this->RequireUserSession();

		($this->Post)
		->BlogID('Atlantis\Util\Filters::TypeInt')
		->Title('Atlantis\Util\Filters::EncodedText')
		->ContentJSON('Atlantis\Util\Filters::ValidatorForEditorJS')
		->OptAdult('Atlantis\Util\Filters::NumberValidRange',[0,1,0])
		->OptDraft('Atlantis\Util\Filters::TypeBool');

		$BlogUser = NULL;
		$Title = $this->Post->Title;
		$ContentJSON = (String)$this->Post->ContentJSON ?: NULL;
		$Enabled = $this->Post->OptDraft ? 0 : 1;
		$OptAdult = NULL;
		$Tags = [];
		$TagID = NULL;
		$Alias = NULL;
		$Post = NULL;

		////////

		if(!$Title)
		$this->Quit(4,'post needs a title');

		if(!$ContentJSON)
		$this->Quit(5,'post needs content');

		////////

		// are they posting to a blog that exists and that
		// they have permissions for?

		$BlogUser = Atlantis\Prototype\BlogUser::GetByBlogUser(
			$this->Post->BlogID,
			$this->User->ID
		);

		if(!$BlogUser)
		$this->Quit(1,'blog user not found');

		////////

		// do they even have permissions to this blog?

		if(!$BlogUser->HasWritePriv())
		$this->Quit(2,'user does not have posting privileges to blog');

		////////

		$OptAdult = (
			$BlogUser->Blog->IsAdultForced()?
			(Atlantis\Prototype\Blog::AdultForced):($this->Post->OptAdult)
		);

		$Alias = Atlantis\Prototype\BlogPost::GenerateUniqueAlias(
			$BlogUser->Blog,
			$Title
		);

		if(is_array($this->Post->Tags))
		foreach($this->Post->Tags as $TagID)
		$Tags[] = (Int)$TagID;

		$Post = Atlantis\Prototype\BlogPost::Insert([
			'BlogID'      => $BlogUser->BlogID,
			'UserID'      => $BlogUser->UserID,
			'Enabled'     => $Enabled,
			'Title'       => $Title,
			'Alias'       => $Alias,
			'OptAdult'    => $OptAdult,
			'ContentJSON' => $ContentJSON
		]);

		if(!$Post)
		$this->Quit(3,'other error creating the post');

		////////

		if(count($Tags))
		foreach($Tags as $TagID)
		Atlantis\Prototype\BlogPostTag::Upsert([
			'PostID' => $Post->ID,
			'TagID'  => $TagID
		]);

		////////

		$this
		->SetLocation($Post->URL)
		->SetPayload($Post);

		return;
	}

	/**
	 * @input Int ID
	 * @input ?String Title
	 * @input ?String Content
	 * @input ?Int OptAdult
	 * @input ?Bool OptDraft
	 * @input ?Int AliasRegen
	 */

	final public function
	EntityPatch():
	Void {
	/*//
	@require user
	@error 1 post not found
	@error 2 user not allowed
	@error 3 post must have a title
	@error 4 post needs content
	//*/

		$this->RequireUserSession();

		($this->Post)
		->ID('Atlantis\Util\Filters::TypeInt')
		->Title('Atlantis\Util\Filters::EncodedText')
		->ContentJSON('Atlantis\Util\Filters::ValidatorForEditorJS')
		->OptAdult('Atlantis\Util\Filters::NumberValidRange',[0,1,0])
		->OptDraft('Atlantis\Util\Filters::TypeBool')
		->AliasRegen('Atlantis\Util\Filters::NumberValidRange',[0,1,0]);

		////////

		$BlogUser = NULL;
		$Post = NULL;
		$Dataset = [];
		$AliasRegen = FALSE;

		////////

		$Post = Atlantis\Prototype\BlogPost::GetByID($this->Post->ID);

		if(!$Post)
		$this->Quit(1,'post not found');

		$BlogUser = $Post->GetBlogUser($this->User);

		if(!$Post->IsUserOwner($this->User) && (!$BlogUser || !$BlogUser->HasEditPriv()))
		$this->Quit(2,'no editor permissions to blog');

		////////

		// update the post title.

		if($this->Post->Exists('Title')) {
			if(!strlen($this->Post->Title))
			$this->Quit(3,'post must have a title');

			$Dataset['Title'] = $this->Post->Title;

			if(strtolower($this->Post->Title) !== strtolower($Post->Title)) {
				$AliasRegen = TRUE;
			}
		}

		// update draft status.

		if($this->Post->Exists('OptDraft')) {
			if($this->Post->OptDraft)
			$Dataset['Enabled'] = $Post::EnableStateDraft;
			else
			$Dataset['Enabled'] = $Post::EnableStatePublic;

			if($Post->Enabled === $Post::EnableStateDraft)
			if($Dataset['Enabled'] == $Post::EnableStatePublic)
			$Dataset['TimeCreated'] = time();
		}

		// update the adult status if they are allowed to.

		if($this->Post->Exists('OptAdult')) {
			if($Post->IsAdultForced() || $Post->Blog->IsAdultForced())
			$Dataset['OptAdult'] = Atlantis\Prototype\Blog::AdultForced;
			else
			$Dataset['OptAdult'] = $this->Post->OptAdult;
		}

		// generate a new alias if asked.
		// only update it though if it ends up changing.

		if($this->Post->Exists('AliasRegen') || $AliasRegen) {
			if(($this->Post->AliasRegen || $AliasRegen) && array_key_exists('Title',$Dataset))
			$Dataset['Alias'] = Atlantis\Prototype\BlogPost::GenerateUniqueAlias(
				$Post->Blog,
				$Dataset['Title']
			);

			if($Dataset['Alias'] === $Post->Alias)
			unset($Dataset['Alias']);
		}

		// update content if we had some.

		if($this->Post->Exists('ContentJSON')) {
			if(!$this->Post->ContentJSON)
			$this->Quit(4,'should a blog post not have content');

			$Dataset['ContentJSON'] = (String)$this->Post->ContentJSON ?: NULL;
			$Dataset['Content'] = NULL; // actually cache the render here when done dicking around
		}

		////////

		if(!count($Dataset))
		$this->Quit(0,'zzz');

		$Post->Update($Dataset);

		////////

		if(array_key_exists('Enabled',$Dataset) && array_key_exists('TimeCreated',$Dataset)) {
			$Tags = $Post->GetTags();

			foreach($Tags->Payload as $Tag)
			$Tag->UpdateUsage();
		}

		if(array_key_exists('ContentJSON',$Dataset))
		$Post->UpdateUploadImageUsage();

		////////

		$this
		->SetLocation($Post->GetURL())
		->SetPayload($Post);

		return;
	}

	/**
	 * @input ?Int ID
	 */

	final public function
	EntityDelete():
	Void {
	/*//
	@require user
	@error 1 post not found
	@error 2 invalid user
	//*/

		$this->RequireUserSession();

		($this->Post)
		->ID('Atlantis\\Util\\Filters::TypeInt');

		$Post = NULL;
		$BlogUser = NULL;
		$Goto = NULL;

		////////

		$Post = Atlantis\Prototype\BlogPost::GetByID($this->Post->ID);

		if(!$Post)
		$this->Quit(1,'not found');

		////////

		$BlogUser = $Post->Blog->GetBlogUser($this->User);

		if(!$BlogUser || !$BlogUser->HasManagePriv())
		$this->Quit(2,'invalid user');

		////////

		$Goto = $Post->Blog->GetURL();
		$Post->Drop();

		////////

		$this->SetLocation($Goto);
		return;
	}

	/**
	 * @input Int ID
	 * @input Int TagID
	 */

	final public function
	EntityTagdelete():
	Void {
	/*//
	@require user
	@error 1 post not found
	@error 2 invalid user
	@error 3 tag not found
	//*/

		$this->RequireUserSession();

		$Post = Atlantis\Prototype\BlogPost::GetByID($this->Post->ID);
		if(!$Post) $this->Quit(1,'post not found');

		$BlogUser = $Post->GetBlogUser($this->User);
		if(!$Post->IsUserOwner($this->User) && (!$BlogUser || !$BlogUser->HasEditPriv()))
		$this->Quit(2,'no editor permissions to blog');

		////////

		$Tag = Atlantis\Prototype\BlogTag::GetByID($this->Post->TagID);
		if(!$Tag) $this->Quit(3,'tag not found');

		Atlantis\Prototype\BlogPostTag::DeleteByPostTag(
			$Post->ID,
			$Tag->ID
		);

		$Tag->UpdateUsage();
		return;
	}

	/**
	 * @input Int ID
	 * @input String TagTitle
	 */

	final public function
	EntityTagpost():
	Void {
	/*//
	@require user
	@error 1 post not found
	@error 2 invalid user
	//*/

		$this->RequireUserSession();

		($this->Post)
		->ID('Atlantis\\Util\\Filters::TypeInt')
		->TagTitle('Atlantis\\Util\\Filters::TrimmedText');

		$Post = Atlantis\Prototype\BlogPost::GetByID($this->Post->ID);
		if(!$Post) $this->Quit(1,'post not found');

		$BlogUser = $Post->GetBlogUser($this->User);
		if(!$Post->IsUserOwner($this->User) && (!$BlogUser || !$BlogUser->HasEditPriv()))
		$this->Quit(2,'no editor permissions to blog');

		////////

		$TagTitle = NULL;
		$PostTags = [];

		foreach(explode(',',$this->Post->TagTitle) as $TagTitle) {
			$TagTitle = Atlantis\Util\Filters::StrippedText($TagTitle);

			// find ane existing tag like the one we asked for.
			$Tag = Atlantis\Prototype\BlogTag::GetByBlogTitle(
				$Post->Blog->ID,
				$TagTitle
			);

			// create a new tag if we didn't have one yet.
			if(!$Tag)
			$Tag = Atlantis\Prototype\BlogTag::Upsert([
				'BlogID' => $Post->Blog->ID,
				'Title'  => $TagTitle
			]);

			// push the tag in.
			$PostTags[] = Atlantis\Prototype\BlogPostTag::Upsert([
				'PostID' => $Post->ID,
				'TagID'  => $Tag->ID
			]);

			$Tag->UpdateUsage();
		}

		$this->SetPayload(array_map(
			function(Atlantis\Prototype\BlogPostTag $Val) {
				return [
					'PostTagID' => $Val->ID,
					'PostID'    => $Val->PostID,
					'TagID'     => $Val->TagID,
					'TagTitle'  => $Val->Tag->Title
				];
			},
			$PostTags
		));

		return;
	}

	#[Atlantis\Meta\Info('Fetch a list of comments on a post.')]
	#[Atlantis\Meta\Parameter('ID','Int')]
	#[Atlantis\Meta\Parameter('Page','Int')]
	#[Atlantis\Meta\Error(1,'Post not found.')]
	final public function
	CommentList():
	Void {
	/*//
	@date 2021-04-10
	//*/

		($this->Post)
		->ID('Atlantis\\Util\\Filters::TypeInt')
		->Page('Atlantis\\Util\\Filters::PageNumber')
		->Limit('Atlantis\\Util\\Filters::NumberValidRange',[1,30,10]);

		$Comments = NULL;
		$Page = $this->Post->Page;
		$Limit = $this->Post->Limit;

		$Comments = Atlantis\Prototype\BlogPostComment::Find([
			'PostID' => $this->Post->ID,
			'Page'   => $Page,
			'Limit'  => $Limit,
			'Sort'   => 'newest'
		]);

		// make another pass over the comment so the front end can just
		// dump it without care.

		$Comments->Payload->Each(function(BlogPostComment $Val){
			$Val->Content = Atlantis\Util\Filters::StrippedText($Val->Content);
			return;
		});

		$this->SetPayload([
			'Count'     => $Comments->Count,
			'Total'     => $Comments->Total,
			'Page'      => $Comments->Page,
			'PageCount' => $Comments->GetPageCount(),
			'Limit'     => $Comments->Limit,
			'Comments'  => $Comments->Payload->GetData()
		]);

		return;
	}

	#[Atlantis\Meta\Info('Submit a new comment to the post.')]
	#[Atlantis\Meta\Parameter('ID','int')]
	#[Atlantis\Meta\Parameter('Name','string')]
	#[Atlantis\Meta\Parameter('Content','string')]
	#[Atlantis\Meta\Error(1,'post not found')]
	#[Atlantis\Meta\Error(2,'recaptcha not valid')]
	final public function
	CommentPost():
	void {
	/*//
	@date 2021-04-10
	//*/

		($this->Post)
		->ID(Atlantis\Util\Filters::TypeIntCallable())
		->Name(Atlantis\Util\Filters::StrippedTextCallable())
		->Content(Atlantis\Util\Filters::StrippedTextCallable());

		////////

		if(!Atlantis\Util::IsRecaptchaValid())
		$this->Quit(2);

		////////

		$BlogPost = Atlantis\Prototype\BlogPost::GetByID($this->Post->ID);

		if(!$BlogPost)
		$this->Quit(1);

		////////

		$Dataset = [
			'BlogID'  => $BlogPost->Blog->ID,
			'PostID'  => $BlogPost->ID,
			'UserID'  => ($this->User ? $this->User->ID : NULL),
			'Name'    => ($this->User ? $this->User->Alias : $this->Post->Name),
			'Content' => $this->Post->Content
		];

		$Comment = Atlantis\Prototype\BlogPostComment::Insert($Dataset);

		$this->SetPayload($Comment);

		return;
	}

}
