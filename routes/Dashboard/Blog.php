<?php

namespace Routes\Dashboard;

use \Atlantis as Atlantis;

class Blog
extends Atlantis\Site\ProtectedWeb {

	protected function
	OnReady():
	Void {

		($this->Get)
		->Post('Atlantis\Util\Filters::TypeInt')
		->Blog('Atlantis\Util\Filters::TypeInt');

		($this->Post)
		->Blog('Atlantis\Util\Filters::TypeInt')
		->OptAdult('Atlantis\Util\Filters::NumberValidRange',[0,2,0]);

		return;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	public function
	Create():
	Void {

		$this
		->Set('Page.Title','New Blog')
		->Area('dashboard/blog/create');

		return;
	}

	public function
	Post():
	Void {

		$Access = Atlantis\Prototype\BlogUser::Find([
			'UserID' => $this->User->ID
		]);

		$Blogs = $Access->Payload->Map(function($Val){
			return $Val->Blog;
		});

		$this
		->Set('Page.Title','New Post')
		->Area('dashboard/blog/post',[
			'Blogs' => $Blogs
		]);

		return;
	}

	public function
	PostEdit():
	Void {

		$Post = Atlantis\Prototype\BlogPost::GetByID($this->Get->Post);

		if(!$Post)
		$this->Goto(Atlantis\Site\Endpoint::Get('Atlantis.Dashboard.Home'));

		if(!$Post->IsUserOwner($this->User)) {
			$BlogUser = $Post->GetBlogUser($this->User);

			if(!$BlogUser || !$BlogUser->HasEditPriv())
			$this->Goto(Atlantis\Site\Endpoint::Get('Atlantis.Dashboard.Home'));
		}

		////////

		$this
		->Set('Page.Title','Edit Post')
		->Area('dashboard/blog/post-edit',[
			'Blog' => $Post->Blog,
			'Post' => $Post
		]);

		return;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	public function
	Settings():
	Void {

		$BlogUser = Atlantis\Prototype\BlogUser::GetByBlogUser(
			$this->Get->Blog,
			$this->User->ID
		);

		if(!$BlogUser)
		$this->Goto(Atlantis\Site\Endpoint::Get('Atlantis.Dashboard.Home'));

		if(!$BlogUser->HasManagePriv())
		$this->Goto(Atlantis\Site\Endpoint::Get('Atlantis.Dashboard.Home'));

		if($this->HandleUpdateSettings($BlogUser->Blog))
		$this->Goto(Atlantis\Site\Endpoint::Get('Atlantis.Dashboard.Home'));

		$this
		->Set('Page.Title','Blog Settings')
		->Area('dashboard/blog/settings',[
			'BlogUser' => $BlogUser,
			'Blog'     => $BlogUser->Blog
		]);

		return;
	}

	protected function
	HandleUpdateSettings(Atlantis\Prototype\Blog $Blog):
	Bool {

		if($this->Post->Action !== 'update')
		return FALSE;

		// if the owner of the blog had no honor and we had to force
		// their blog into an adult state then we will not allow them
		// to turn it off.

		$OptAdult = (
			($Blog->OptAdult === $Blog::AdultForced)?
			($Blog::AdultForced):($this->Post->OptAdult)
		);

		($Blog)
		->Update([
			'OptAdult' => $OptAdult
		]);

		return TRUE;
	}

}
