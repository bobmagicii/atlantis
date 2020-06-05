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
}
