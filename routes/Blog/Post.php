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

		$Recent = $Post->Blog->GetRecentPosts(5,1);
		$Popular = $Post->Blog->GetPopularPosts(5,1);

		($Popular->Payload)
		->Remap(function($Val){ return $Val->Post; });

		////////

		Atlantis\Prototype\LogBlogPostTraffic::Upsert([
			'BlogID' => $Post->Blog->ID,
			'PostID' => $Post->ID,
			'UserID' => ($this->User)?($this->User->ID):NULL,
			'HitHash'=> $this->GetHitHash()
		]);

		$this
		->Set('Page.Title',sprintf(
			'%s - %s',
			$Post->Title,
			$Post->Blog->Title
		))
		->Area('blog/post',[
			'Blog'         => $Post->Blog,
			'Post'         => $Post,
			'RecentPosts'  => $Recent,
			'PopularPosts' => $Popular
		]);

		return;
	}

}
