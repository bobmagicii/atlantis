<?php

namespace Routes\Blog;
use \Atlantis as Atlantis;

class Index
extends Atlantis\Site\PublicWeb {

	public function
	Index(String $BlogAlias):
	Void {
	/*//
	@date 2020-05-24
	//*/

		$Blog = Atlantis\Prototype\Blog::GetByAlias($BlogAlias);
		$Page = 1;
		$Limit = 10;

		if(!$Blog)
		$this->Area('error/not-found')->Quit(404);

		////////

		$this
		->Set('Page.Title',$Blog->Title)
		->Area('blog/index',[
			'Blog'  => $Blog,
			'Posts' => $Blog->GetRecentPosts($Limit,$Page)
		]);

		return;
	}

}
