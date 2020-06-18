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

}
