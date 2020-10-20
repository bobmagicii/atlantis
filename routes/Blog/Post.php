<?php

namespace Routes\Blog;
use \Atlantis as Atlantis;

class Post
extends Atlantis\Site\PublicWeb {

	public function
	Index(String $BlogAlias=NULL, String $PostAlias1=NULL, ?String $PostAlias2=NULL):
	Void {
	/*//
	@date 2020-05-24
	//*/

		// $BlogAlias/$PostAlias
		if($PostAlias2 === NULL && !ctype_digit($PostAlias1)) {
			$Post = Atlantis\Prototype\BlogPost::GetByAlias(
				$BlogAlias,
				$PostAlias1
			);
		}

		// $BlogAlias/$PostID/$PostAlias
		// $BlogAlias/$PostID
		else {
			$Post = Atlantis\Prototype\BlogPost::GetByID($PostAlias1);

			// but nuke it so you cant look at someone elses post.
			if($Post && $Post->Blog->Alias !== $BlogAlias)
			$Post = NULL;
		}

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
		$Hit = NULL;

		($Popular->Payload)
		->Remap(function($Val){ return $Val->Post; });

		////////

		if($Post->Enabled && !$Post->IsUserOwner($this->User)) {
			$Hit = Atlantis\Prototype\LogBlogPostTraffic::GetByHithashSince(
				$this->GetHitHash(),
				strtotime('-20 minutes')
			);

			if(!$Hit)
			$Post->BumpCountViews();

			Atlantis\Prototype\LogBlogPostTraffic::Upsert([
				'BlogID' => $Post->Blog->ID,
				'PostID' => $Post->ID,
				'UserID' => ($this->User)?($this->User->ID):NULL,
				'HitHash'=> $this->GetHitHash()
			]);
		}

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

		if($this->Post->Action === 'ignore-adult-safespace')
		return FALSE;

		return parent::ShouldAdultSafespace();
	}

}
