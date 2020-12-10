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
		$QueryTags = NULL;
		$Users = NULL;
		$Opt = [
			'Adult'   => NULL,
			'Enabled' => Post::EnableStatePublic,
			'Tags'    => NULL
		];

		// bail if no blog.

		if(!$Blog)
		$this->Area('error/not-found')->Quit(404);

		$BlogUser = $Blog->GetBlogUser($this->User);

		// allow editors to see draft posts.

		if($BlogUser)
		if($BlogUser->HasEditPriv())
		$Opt['Enabled'] = Post::EnableStateAny;

		// filter by tags if needed.

		if($this->Get->Tags) {
			$QueryTags = $this->GetTagList();

			$Opt['Tags'] = array_map(
				function($Tag){ return $Tag->ID; },
				$QueryTags
			);
		}

		// get popular posts.

		$PopularPosts = $Blog->GetPopularPosts(5,1);
		$PopularPosts->Payload->Remap(function($Val){ return $Val->Post; });

		// get blogs tags.

		$Tags = $Blog->GetTags();
		$Keywords = join(',',$Tags->Payload->Map(function($Val){ return $Val->Title; })->GetData());

		// get blog users.

		$Bloggers = Atlantis\Prototype\BlogUser::Find([
			'BlogID' => $Blog->ID
		]);

		////////

		$this
		->Set('Page.Title',$Blog->Title)
		->Set('Page.Desc',$Blog->Tagline)
		->Set('Page.Keywords',$Keywords)
		->Set('Page.Authour',$Blog->User->Alias)
		->Area('blog/index',[
			'Blog'          => $Blog,
			'BlogUser'      => $BlogUser,
			'Posts'         => $Blog->GetRecentPosts($Limit,$Page,$Opt),
			'Tags'          => $Tags,
			'PopularPosts'  => $PopularPosts,
			'QueryTags'     => $QueryTags,
			'Bloggers'      => $Bloggers
		]);

		return;
	}

	protected function
	GetTagList():
	Array {
	/*//
	@date 2020-09-29
	//*/

		$Input = explode('/',$this->Get->Tags);
		$Output = [];
		$Key = NULL;
		$Val = NULL;
		$Tag = NULL;

		// get the slash delimited list of tag aliases and build a clean
		// list of them.

		foreach($Input as $Key => $Val)
		$Input[$Key] = Atlantis\Util\Filters::RouteSafeAlias(trim($Val));

		// find those tags and build a list of their id.

		$Result = Atlantis\Prototype\BlogTag::Find([
			'Alias' => $Input
		]);

		foreach($Result->Payload as $Tag)
		$Output[] = $Tag;

		return $Output;
	}

}
