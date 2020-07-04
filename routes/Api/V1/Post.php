<?php

namespace Routes\Api\V1;

use
\Atlantis as Atlantis,
\Nether as Nether;

class Post
extends Atlantis\Site\ProtectedAPI {

	/**
	 * @input ?Int ID
	 * @input ?String BlogAlias
	 * @input ?String Alias
	 */

	final public function
	EntityGet():
	Void {

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
	 */

	final public function
	EntityPost():
	Void {
	/*//
	@error 1 blog user not found
	@error 2 blog user does not have write priv
	@error 3 error inserting post
	@error 4 post needs a title
	@error 5 post needs content
	//*/

		($this->Post)
		->BlogID('Atlantis\Util\Filters::TypeInt')
		->Title('Atlantis\Util\Filters::EncodedText')
		->Content('Atlantis\Util\Filters::TrimmedText')
		->OptAdult('Atlantis\Util\Filters::NumberValidRange',[0,1,0]);

		$BlogUser = NULL;
		$Title = $this->Post->Title;
		$Content = $this->Post->Content;
		$OptAdult = NULL;
		$Alias = NULL;
		$AliasTest = NULL;
		$AliasIter = NULL;
		$Existing = NULL;
		$Post = NULL;

		////////

		if(!$Title)
		$this->Quit(4,'post needs a title');

		if(!$Content)
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

		$Post = Atlantis\Prototype\BlogPost::Insert([
			'BlogID'   => $BlogUser->BlogID,
			'UserID'   => $BlogUser->UserID,
			'Title'    => $Title,
			'Alias'    => $Alias,
			'OptAdult' => $OptAdult,
			'Content'  => $Content
		]);

		if(!$Post)
		$this->Quit(3,'other error creating the post');

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
	 * @input ?Int AliasRegen
	 */

	final public function
	EntityPatch():
	Void {
	/*//
	@error 1 post not found
	@error 2 user not allowed
	@error 3 post must have a title
	@error 4 post needs content
	//*/

		($this->Post)
		->ID('Atlantis\Util\Filters::TypeInt')
		->Title('Atlantis\Util\Filters::EncodedText')
		->Content('Atlantis\Util\Filters::TrimmedText')
		->OptAdult('Atlantis\Util\Filters::NumberValidRange',[0,1,0])
		->AliasRegen('Atlantis\Util\Filters::NumberValidRange',[0,1,0]);

		////////

		$BlogUser = NULL;
		$Post = NULL;
		$Dataset = [];

		////////

		$Post = Atlantis\Prototype\BlogPost::GetByID($this->Post->ID);

		if(!$Post)
		$this->Quit(1,'post not found');

		$BlogUser = Atlantis\Prototype\BlogUser::GetByBlogUser(
			$Post->Blog->ID,
			$this->User->ID
		);

		if(!$BlogUser || !$BlogUser->HasWritePriv())
		$this->Quit(2,'no writer permissions to blog');

		////////

		// update the post title.

		if($this->Post->Exists('Title')) {
			if(!strlen($this->Post->Title))
			$this->Quit(3,'post must have a title');

			$Dataset['Title'] = $this->Post->Title;
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

		if($this->Post->Exists('AliasRegen')) {
			if($this->Post->AliasRegen && array_key_exists('Title',$Dataset))
			$Dataset['Alias'] = Atlantis\Prototype\BlogPost::GenerateUniqueAlias(
				$Post->Blog,
				$Dataset['Title']
			);

			if($Dataset['Alias'] === $Post->Alias)
			unset($Dataset['Alias']);
		}

		// update content if we had some.

		if($this->Post->Exists('Content')) {
			if(!$this->Post->Content)
			$this->Quit(4,'should a blog post not have content');

			$Dataset['Content'] = $this->Post->Content;
		}

		////////

		if(!count($Dataset))
		$this->Quit(0,'zzz');

		$Post->Update($Dataset);

		$this
		->SetLocation($Post->GetURL())
		->SetPayload($Post);

		return;
	}

}
