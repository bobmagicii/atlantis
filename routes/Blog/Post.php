<?php

namespace Routes\Blog;
use \Atlantis as Atlantis;

class Post
extends Atlantis\Site\PublicWeb {

	public function
	Index(String $BlogAlias, String $PostAlias):
	Void {
	/*//
	@date 2020-05-24
	//*/

		$Post = Atlantis\Prototype\BlogPost::GetByAlias(
			$BlogAlias,
			$PostAlias
		);

		if(!$Post)
		$this->Area('error/not-found')->Quit(404);

		////////

		$BlogUser = $Post->GetBlogUser($this->User);

		$UserCanEdit = (
			$Post->IsUserOwner($this->User)
			|| ($BlogUser && $BlogUser->HasEditPriv())
		);

		$UserCanDelete = (
			$Post->IsUserOwner($this->User)
			|| ($BlogUser && $BlogUser->HasManagePriv())
		);

		if($Post->Enabled === $Post::EnableStateDraft) {
			if(!$UserCanEdit)
			$this->Area('error/not-found')->Quit(404);
		}

		////////

		$Recent = $Post->Blog->GetRecentPosts(5,1);
		$Popular = $Post->Blog->GetPopularPosts(5,1);
		$Tags = $Post->GetTags();

		($Popular->Payload)
		->Remap(function($Val){ return $Val->Post; });

		////////

		if($Post->Enabled && !$Post->IsUserOwner($this->User))
		Atlantis\Prototype\LogBlogPostTraffic::Upsert([
			'BlogID' => $Post->Blog->ID,
			'PostID' => $Post->ID,
			'UserID' => ($this->User)?($this->User->ID):NULL,
			'HitHash'=> $this->GetHitHash()
		]);

		////////

		$this
		->Set('Page.Title',sprintf(
			'%s - %s',
			$Post->Title,
			$Post->Blog->Title
		))
		->Set('Social.Image',$Post->Blog->GetImageIconURL('sm'))
		->Set('Social.Authour',$Post->User->Alias)
		->Area('blog/post',[
			'Blog'          => $Post->Blog,
			'Post'          => $Post,
			'Tags'          => $Tags,
			'BlogUser'      => $BlogUser,
			'UserCanEdit'   => $UserCanEdit,
			'UserCanDelete' => $UserCanDelete,
			'RecentPosts'   => $Recent,
			'PopularPosts'  => $Popular
		]);

		return;
	}

	public function
	ShouldAdultSafespace():
	Bool {
	/*//
	@date 2020-06-18
	@override Atlantis\Site\PublicWeb
	//*/

		if($this->User)
		if($this->Post->Action === 'ignore-adult-safespace')
		return FALSE;

		return parent::ShouldAdultSafespace();
	}

}
