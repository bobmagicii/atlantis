<?php

namespace Routes\Blog;
use Atlantis;

use Atlantis\Prototype\Blog;
use Atlantis\Prototype\BlogPost;

class Index
extends Atlantis\Site\PublicWeb {

	protected function
	OnReady():
	void {
	/*//
	@date 2021-04-17
	//*/

		($this->Get)
		->Page(Atlantis\Util\Filters::PageNumberCallable());

		return;
	}

	public function
	Index(string $BlogAlias):
	void {
	/*//
	@date 2020-05-24
	//*/

		$Blog = Blog::GetByAlias($BlogAlias);
		$BlogUser = NULL;
		$Page = $this->Get->Page;
		$Limit = 6;
		$QueryTags = NULL;
		$RecentPostFilters = [
			'Adult'            => NULL,
			'Enabled'          => BlogPost::EnableStatePublic,
			'Tags'             => NULL,
			'BindTagsToResult' => TRUE
		];

		$Area = match(strtolower($this->Get->Format)) {
			'rss'   => 'blog/index-rss',
			default => 'blog/index'
		};

		// bail if no blog.

		if(!$Blog)
		$this->Area('error/not-found')->Quit(404);

		$BlogUser = $Blog->GetBlogUser($this->User);

		// allow editors to see draft posts.

		if($BlogUser)
		if($BlogUser->HasEditPriv())
		$RecentPostFilters['Enabled'] = BlogPost::EnableStateAny;

		// filter by tags if needed.

		if($this->Get->Tags) {
			$QueryTags = $this->GetTagList();

			$RecentPostFilters['Tags'] = array_map(
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

		if($Area === 'blog/index' )
		if(!$Blog->IsUserOwner($this->User)) {
			$Hit = Atlantis\Prototype\LogBlogPostTraffic::GetByHithashSince(
				$this->GetHitHash(),
				strtotime('-20 minutes')
			);

			//if(!$Hit)
			//$Blog->BumpCountViews();

			Atlantis\Prototype\LogBlogPostTraffic::Upsert([
				'BlogID' => $Blog->ID,
				'PostID' => NULL,
				'UserID' => ($this->User)?($this->User->ID):NULL,
				'HitHash'=> $this->GetHitHash()
			]);
		}

		////////

		$this
		->Set('Page.Title',$Blog->Title)
		->Set('Page.Desc',$Blog->Tagline)
		->Set('Page.Keywords',$Keywords)
		->Set('Page.Authour',$Blog->User->Alias)
		->Set('Page.FeedURL',"{$Blog->URL}?format=rss")
		->Area($Area,[
			'Blog'          => $Blog,
			'BlogUser'      => $BlogUser,
			'Posts'         => $Blog->GetRecentPosts($Limit,$Page,$RecentPostFilters),
			'Tags'          => $Tags,
			'PopularPosts'  => $PopularPosts,
			'QueryTags'     => $QueryTags,
			'Bloggers'      => $Bloggers
		]);

		return;
	}

	protected function
	GetTagList():
	array {
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
