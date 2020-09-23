<?php

namespace Routes\Blog;
use \Atlantis as Atlantis;

use
\Atlantis\Prototype\Blog as Blog,
\Atlantis\Prototype\BlogPost as Post;

class Index
extends Atlantis\Site\PublicWeb {

	public function
	Index(String $BlogAlias):
	Void {
	/*//
	@date 2020-05-24
	//*/

		$Blog = Blog::GetByAlias($BlogAlias);
		$BlogUser = NULL;
		$Page = 1;
		$Limit = 10;
		$Opt = [
			'Adult'   => NULL,
			'Enabled' => Post::EnableStatePublic
		];

		// bail if no blog.

		if(!$Blog)
		$this->Area('error/not-found')->Quit(404);

		$BlogUser = $Blog->GetBlogUser($this->User);

		// allow editors to see draft posts.

		if($BlogUser)
		if($BlogUser->HasEditPriv())
		$Opt['Enabled'] = Post::EnableStateAny;

		////////

		$this
		->Set('Page.Title',$Blog->Title)
		->Area('blog/index',[
			'Blog'  => $Blog,
			'Posts' => $Blog->GetRecentPosts($Limit,$Page,$Opt)
		]);

		return;
	}

}
