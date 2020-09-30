<?php

namespace Routes\Api\V1;

use
\Atlantis as Atlantis,
\Nether as Nether,
\Routes as Routes;

use \Exception as Exception;

class Blog
extends Atlantis\Site\ProtectedAPI {

	/**
	 * @input ?Int ID
	 * @input ?String Alias
	 */

	final public function
	EntityGet():
	Void {

		$Blog = NULL;

		if($this->Get->ID)
		$Blog = Atlantis\Prototype\Blog::GetByID((Int)$this->Get->ID);

		elseif($this->Get->Alias)
		$Blog = Atlantis\Prototype\Blog::GetByAlias($this->Get->Alias);

		if(!$Blog) {
			// todo: write a blog post about how 404 makes no god damn
			// sense since you found and succesfully queried the api
			// and that its none of the transport protocol's god damn
			// business to need to know if the result set was empty.
			$this->Quit(1,'not found');
		}

		$this
		->SetPayload($Blog);

		return;
	}

	/**
	 * @input String Title
	 * @input String Alias
	 * @input Int OptAdult
	 */

	final public function
	EntityPost():
	Void {

		($this->Post)
		->Title('Atlantis\Util\Filters::EncodedText')
		->Alias('Atlantis\Util\Filters::RouteSafeAlias');

		$Blog = NULL;
		$BlogUser = NULL;
		$DB = Nether\Database::Get();
		$Title = $this->Post->Title;
		$Alias = $this->Post->Alias;

		if(!$Title)
		$this->Quit(1,'Blog must have a title.');

		if(!$Alias)
		$this->Quit(2,'Blog must have a link alias.');

		if($Blog = Atlantis\Prototype\Blog::GetByAlias($Alias))
		$this->Quit(3,'A blog with this URL already exists.');

		////////

		$DB->Begin();

		$Blog = Atlantis\Prototype\Blog::Insert([
			'Title'  => $Title,
			'Alias'  => $Alias,
			'UserID' => $this->User->ID
		]);

		if(!$Blog) {
			$DB->Rollback();
			$this->Quit(100,'There was problem creating the blog.');
		}

		////////

		$BlogUser = Atlantis\Prototype\BlogUser::Insert([
			'BlogID' => $Blog->ID,
			'UserID' => $this->User->ID,
			'Flags'  => Atlantis\Prototype\BlogUser::FlagOwner
		]);

		if(!$BlogUser) {
			$DB->Rollback();
			$this->Quit(101,'There was problem creating the blog ownership.');
		}

		$DB->Commit();

		$this
		->SetLocation($Blog->URL)
		->SetPayload($Blog);

		return;
	}

	/**
	 * @input Int ID
	 * @input ?String Title
	 * @input ?String Alias
	 * @input ?String Tagline
	 * @input ?Int OptAdult
	 * @input ?Bool RemoveImageHeader
	 * @input ?Bool RemoveImageIcon
	 */

	final public function
	EntityPatch():
	Void {
	/*//
	@error 1 blog not found
	@error 2 not a blog manaager
	@error 3 blog must have a title
	@error 4 blog is forced into adult mode so get rekt
	@error 5 blog must have an alias
	@error 6 blog alias already in use
	//*/

		$Dataset = [];
		$BlogUser = Atlantis\Prototype\BlogUser::GetByBlogUser($this->Post->ID,$this->User->ID);
		$Fields = new Nether\Input\Filter($this->Post->Fields ?: []);

		$Fields
		->Title('Atlantis\Util\Filters::TrimmedText')
		->Alias('Atlantis\Util\Filters::RouteSafeAlias')
		->Tagline('Atlantis\Util\Filters::TrimmedText')
		->OptAdult('Atlantis\Util\Filters::NumberValidRange',[0,2,0])
		->RemoveImageHeader('Atlantis\Util\Filters::NumberValidRange',[0,1,0])
		->RemoveImageIcon('Atlantis\Util\Filters::NumberValidRange',[0,1,0]);

		if(!$BlogUser)
		$this->Quit(1,'blog not found');

		if(!$BlogUser->HasManagePriv())
		$this->Quit(2,'not a blog manager');

		////////

		if($Fields->Exists('Title')) {
			if(!strlen($Fields->Title))
			$this->Quit(3,'blog must have a title');

			$Dataset['Title'] = $Fields->Title;
		}

		if($Fields->Exists('Alias') && $Fields->Alias !== $BlogUser->Blog->Alias) {
			if(!strlen($Fields->Alias))
			$this->Quit(5,'blog must have an alias');

			if(Atlantis\Prototype\Blog::GetByAlias($Fields->Alias))
			$this->Quit(6,'blog alias already in use');

			$Dataset['Alias'] = $Fields->Alias;
		}

		if($Fields->Exists('OptAdult')) {
			if($BlogUser->Blog->OptAdult === Atlantis\Prototype\Blog::AdultForced)
			$this->Quit(4,'this blog has been forced into adult mode');

			$Dataset['OptAdult'] = $Fields->OptAdult;
		}

		if($Fields->Exists('Tagline'))
		$Dataset['Tagline'] = $Fields->Tagline;

		if($Fields->Exists('RemoveImageHeader') && (Int)$Fields->RemoveImageHeader) {
			$Dataset['ImageHeaderID'] = NULL;
			$Dataset['ImageHeaderURL'] = NULL;
		}

		if($Fields->Exists('RemoveImageIcon') && (Int)$Fields->RemoveImageIcon) {
			$Dataset['ImageIconID'] = NULL;
			$Dataset['ImageIconURL'] = NULL;
		}

		////////

		if(!count($Dataset))
		$this->Quit(0,'zzz');

		($BlogUser->Blog)
		->Update($Dataset);

		if(array_key_exists('ImageIconURL',$Dataset) && $Dataset['ImageIconURL'] === NULL)
		$Dataset['ImageIconURL'] = Nether\Option::Get('Atlantis.Blog.DefaultImageIconURL');

		if(array_key_exists('ImageHeaderURL',$Dataset) && $Dataset['ImageHeaderURL'] === NULL)
		$Dataset['ImageHeaderURL'] = Nether\Option::Get('Atlantis.Blog.DefaultImageHeaderURL');

		$this
		->SetLocation($BlogUser->Blog->URL)
		->SetPayload($Dataset);

		return;
	}

	/**
	 * @input Int ID
	 * @input String TagTitle
	 */

	final public function
	EntityTagPost():
	Void {
	/*//
	@error 1 post not found
	@error 2 invalid user
	//*/

		($this->Post)
		->ID('Atlantis\\Util\\Filters::TypeInt')
		->TagTitle('Atlantis\\Util\\Filters::TrimmedText');

		$BlogUser = Atlantis\Prototype\BlogUser::GetByBlogUser($this->Post->ID,$this->User->ID);

		if(!$BlogUser)
		$this->Quit(1,'blog not found');

		if(!$BlogUser->HasManagePriv())
		$this->Quit(2,'not a blog manager');

		////////

		$TagTitle = NULL;
		$BlogTags = [];

		foreach(explode(',',$this->Post->TagTitle) as $TagTitle) {
			$TagTitle = Atlantis\Util\Filters::StrippedText($TagTitle);

			// find ane existing tag like the one we asked for.
			$Tag = Atlantis\Prototype\BlogTag::GetByBlogTitle(
				$BlogUser->Blog->ID,
				$TagTitle
			);

			// create a new tag if we didn't have one yet.
			if(!$Tag)
			$Tag = Atlantis\Prototype\BlogTag::Upsert([
				'BlogID' => $BlogUser->Blog->ID,
				'Title'  => $TagTitle
			]);

			$BlogTags[] = $Tag;
		}

		$this->SetPayload(array_map(
			function(Atlantis\Prototype\BlogTag $Val) {
				return [
					'BlogID'    => $Val->BlogID,
					'TagID'     => $Val->ID,
					'TagTitle'  => $Val->Title
				];
			},
			$BlogTags
		));

		return;
	}

	/**
	 * @input Int ID
	 * @input File Image
	 */

	final public function
	IconPost():
	Void {
	/*//
	@error 1 blog not found
	@error 2 not a blog manaager
	@error 3 no images uploaded
	@error 4 upload too large?
	//*/

		if(!$this->Post->ID) {
			// this is usually actually caused by file uploads being too large
			// so php did not even parse the request.
			$this->Quit(4,'upload may have been too large');
		}

		$Uploads = NULL;
		$BlogUser = Atlantis\Prototype\BlogUser::GetByBlogUser($this->Post->ID,$this->User->ID);

		if(!$BlogUser)
		$this->Quit(1,'blog not found');

		if(!$BlogUser->HasManagePriv())
		$this->Quit(2,'not a blog manager');

		////////

		$Uploads = Atlantis\Prototype\UploadImage::HandlePostImage(
			$this->User,
			$this->Storage,
			"-blog-icon-{$BlogUser->Blog->ID}"
		);

		if(!count($Uploads->Success))
		$this->Quit(3,'no images successfully uploaded.');

		////////

		$BlogUser->Blog->Update([
			'ImageIconID' => $Uploads->Success[0]->ID
		]);

		$this->SetPayload([
			'BlogID'   => $BlogUser->Blog->ID,
			'ImageID'  => $BlogUser->Blog->ImageIconID,
			'ImageURL' => $Uploads->Success[0]->GetURL('th')
		]);

		return;
	}

	/**
	 * @input Int ID
	 * @input File Image
	 */

	final public function
	HeaderPost():
	Void {
	/*//
	@error 1 blog not found
	@error 2 not a blog manaager
	@error 3 no images uploaded
	//*/

		$Uploads = NULL;
		$BlogUser = Atlantis\Prototype\BlogUser::GetByBlogUser($this->Post->ID,$this->User->ID);

		if(!$BlogUser)
		$this->Quit(1,'blog not found');

		if(!$BlogUser->HasManagePriv())
		$this->Quit(2,'not a blog manager');

		////////

		$Uploads = Atlantis\Prototype\UploadImage::HandlePostImage(
			$this->User,
			$this->Storage,
			"-blog-header-{$BlogUser->Blog->ID}"
		);

		if(!count($Uploads->Success)) {
			$this->SetPayload($Uploads->Fail);
			$this->Quit(3,'no images successfully uploaded.');
		}

		////////

		$BlogUser->Blog->Update([
			'ImageHeaderID' => $Uploads->Success[0]->ID
		]);

		$this->SetPayload([
			'BlogID'        => $BlogUser->Blog->ID,
			'ImageID'       => $BlogUser->Blog->ImageHeaderID,
			'ImageURL'      => $Uploads->Success[0]->GetURL('lg'),
			'TimeResizing'  => $Uploads->TimeResizing,
			'TimeUploading' => $Uploads->TimeUploading,
			'TimeProcess'   => $Uploads->TimeTotal,
			'TimeTotal'     => microtime(TRUE) - ProjectTime
		]);

		return;
	}

}
