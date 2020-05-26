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

		$Recent = $Post->Blog->GetRecentPosts(5,1);

		////////

		$this
		->Set('Page.Title',sprintf(
			'%s - %s',
			$Post->Title,
			$Post->Blog->Title
		))
		->Area('blog/post',[
			'Blog'        => $Post->Blog,
			'Post'        => $Post,
			'RecentPosts' => $Recent
		]);

		return;
	}

}
