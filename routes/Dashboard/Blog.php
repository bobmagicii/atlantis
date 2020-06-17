<?php

namespace Routes\Dashboard;

use \Atlantis as Atlantis;

class Blog
extends Atlantis\Site\ProtectedWeb {

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

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	public function
	Settings():
	Void {

		$Blog = Atlantis\Prototype\Blog::GetByID((Int)$this->Get->Blog);

		if(!$Blog)
		$this->Goto(Atlantis\Site\Endpoint::Get('Atlantis.Dashboard.Home'));

		if($this->HandleUpdateSettings($Blog))
		$this->Goto(Atlantis\Site\Endpoint::Get('Atlantis.Dashboard.Home'));

		$this
		->Set('Page.Title','Blog Settings')
		->Area('dashboard/blog/settings',[
			'Blog' => $Blog
		]);

		return;
	}

	protected function
	HandleUpdateSettings(Atlantis\Prototype\Blog $Blog):
	Bool {

		if($this->Post->Action !== 'update')
		return FALSE;

		$OptAdult = (Bool)(Int)$this->Post->OptAdult;

		// if the owner of the blog had no honor and we had to force
		// their blog into an adult state then we will not allow them
		// to turn it off.

		if($Blog->OptAdult === $Blog::AdultForced)
		$OptAdult = $Blog->OptAdult;

		($Blog)
		->Update([
			'OptAdult' => $OptAdult
		]);

		return TRUE;
	}

}
