<?php

namespace Routes\Api\V1;

use
\Atlantis as Atlantis,
\Nether as Nether,
\Routes as Routes;

use \Exception as Exception;

class Blog
extends Atlantis\Site\ProtectedAPI {

	#[Atlantis\Meta\Info('Fetch the public info about a blog. Use either the Blog ID or the Blog Alias.')]
	#[Atlantis\Meta\Parameter('ID','?Int')]
	#[Atlantis\Meta\Parameter('Alias','?String')]
	#[Atlantis\Meta\Error(1,'Blog Not Found')]
	final public function
	EntityGet():
	Void {

		////////

		$Blog = NULL;

		if($this->Get->ID)
		$Blog = Atlantis\Prototype\Blog::GetByID((Int)$this->Get->ID);

		elseif($this->Get->Alias)
		$Blog = Atlantis\Prototype\Blog::GetByAlias($this->Get->Alias);

		////////

		if(!$Blog)
		$this->Quit(1);

		$this
		->SetPayload($Blog);

		return;
	}

	#[Atlantis\Meta\Info('Create a new blog.')]
	#[Atlantis\Meta\Parameter('Title','String')]
	#[Atlantis\Meta\Parameter('Alias','String')]
	#[Atlantis\Meta\Error(1,'Blog must have a title.')]
	#[Atlantis\Meta\Error(2,'Blog must have an alias.')]
	#[Atlantis\Meta\Error(3,'A blog with this URL already exists.')]
	#[Atlantis\Meta\Error(100,'Database shit itself inserting blog.')]
	#[Atlantis\Meta\Error(101,'Database shit itself inserting blog ownership.')]
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
		$this->Quit(1);

		if(!$Alias)
		$this->Quit(2);

		if($Blog = Atlantis\Prototype\Blog::GetByAlias($Alias))
		$this->Quit(3);

		////////

		$DB->Begin();

		$Blog = Atlantis\Prototype\Blog::Insert([
			'Title'  => $Title,
			'Alias'  => $Alias,
			'UserID' => $this->User->ID
		]);

		if(!$Blog) {
			$DB->Rollback();
			$this->Quit(100);
		}

		////////

		$BlogUser = Atlantis\Prototype\BlogUser::Insert([
			'BlogID' => $Blog->ID,
			'UserID' => $this->User->ID,
			'Flags'  => Atlantis\Prototype\BlogUser::FlagOwner
		]);

		if(!$BlogUser) {
			$DB->Rollback();
			$this->Quit(101);
		}

		$DB->Commit();

		$this
		->SetLocation($Blog->URL)
		->SetPayload($Blog);

		return;
	}

	#[Atlantis\Meta\Info('Update a blog.')]
	#[Atlantis\Meta\Parameter('ID','Int')]
	#[Atlantis\Meta\Parameter('Title','?String')]
	#[Atlantis\Meta\Parameter('Alias','?String')]
	#[Atlantis\Meta\Parameter('Tagline','?String')]
	#[Atlantis\Meta\Parameter('Details','?String')]
	#[Atlantis\Meta\Parameter('OptAdult','?Int')]
	#[Atlantis\Meta\Parameter('RemoveImageHeader','?Int')]
	#[Atlantis\Meta\Parameter('RemoveImageIcon','?Int')]
	#[Atlantis\Meta\Error(1,'Blog not found.')]
	#[Atlantis\Meta\Error(2,'Permission Denied')]
	#[Atlantis\Meta\Error(3,'Blog must have a Title.')]
	#[Atlantis\Meta\Error(4,'Blog is forced into Adult Mode so get rekt')]
	#[Atlantis\Meta\Error(5,'Blog must have an Alias.')]
	#[Atlantis\Meta\Error(6,'Blog Alias is already in use.')]
	final public function
	EntityPatch():
	Void {

		$Dataset = [];
		$BlogUser = Atlantis\Prototype\BlogUser::GetByBlogUser($this->Post->ID,$this->User->ID);
		$Fields = new Nether\Input\Filter($this->Post->Fields ?: []);

		$Fields
		->Title('Atlantis\Util\Filters::EncodedText')
		->Alias('Atlantis\Util\Filters::RouteSafeAlias')
		->Tagline('Atlantis\Util\Filters::EncodedText')
		->Detalis('Atlantis\Util\Filters::EncodedText')
		->OptAdult('Atlantis\Util\Filters::NumberValidRange',[0,2,0])
		->RemoveImageHeader('Atlantis\Util\Filters::NumberValidRange',[0,1,0])
		->RemoveImageIcon('Atlantis\Util\Filters::NumberValidRange',[0,1,0]);

		if(!$BlogUser)
		$this->Quit(1);

		if(!$BlogUser->HasManagePriv())
		$this->Quit(2);

		////////

		if($Fields->Exists('Title')) {
			if(!strlen($Fields->Title))
			$this->Quit(3);

			$Dataset['Title'] = $Fields->Title;
		}

		if($Fields->Exists('Alias') && $Fields->Alias !== $BlogUser->Blog->Alias) {
			if(!strlen($Fields->Alias))
			$this->Quit(5);

			if(Atlantis\Prototype\Blog::GetByAlias($Fields->Alias))
			$this->Quit(6);

			$Dataset['Alias'] = $Fields->Alias;
		}

		if($Fields->Exists('OptAdult')) {
			if($BlogUser->Blog->OptAdult === Atlantis\Prototype\Blog::AdultForced)
			$this->Quit(4);

			$Dataset['OptAdult'] = $Fields->OptAdult;
		}

		if($Fields->Exists('Tagline'))
		$Dataset['Tagline'] = $Fields->Tagline;

		if($Fields->Exists('Details'))
		$Dataset['Details'] = $Fields->Details;

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

	#[Atlantis\Meta\Info('Get a Blog Tag. Use either the TagID or a BlogID/TagTitle combo.')]
	#[Atlantis\Meta\Parameter('TagID','?Int')]
	#[Atlantis\Meta\Parameter('BlogID','?Int')]
	#[Atlantis\Meta\Parameter('TagTitle','?String')]
	#[Atlantis\Meta\Error(1,'Tag not found.')]
	final public function
	TagGet():
	Void {
	/*//
	@date 2020-09-30
	//*/

		($this->Post)
		->TagID('Atlantis\\Util\\Filters::TypeInt')
		->BlogID('Atlantis\\Util\\Filters::TypeInt')
		->TagTitle('Atlantis\\Util\\Filters::TrimmedText');

		$Tag = NULL;

		////////

		if($this->Get->Exists('TagID'))
		$Tag = Atlantis\Prototype\BlogTag::GetByID($this->Get->TagID);
		else
		$Tag = Atlantis\Prototype\BlogTag::GetByBlogTitle(
			$this->Get->BlogID,
			$this->Get->TagTitle
		);

		////////

		if(!$Tag)
		$this->Quit(1);

		$this->SetPayload($Tag);
		return;
	}

	#[Atlantis\Meta\Info('Update a tag.')]
	#[Atlantis\Meta\Parameter('TagID','Int')]
	#[Atlantis\Meta\Parameter('TagTitle','?String')]
	#[Atlantis\Meta\Error(1,'Tag not found.')]
	#[Atlantis\Meta\Error(2,'Permission denied.')]
	#[Atlantis\Meta\Error(3,'Tag already exists.')]
	final public function
	TagPatch():
	Void {
	/*//
	@date 2020-09-30
	//*/

		($this->Post)
		->TagID('Atlantis\\Util\\Filters::TypeInt')
		->TagTitle('Atlantis\\Util\\Filters::StrippedText');

		////////

		$Tag = Atlantis\Prototype\BlogTag::GetByID($this->Post->TagID);
		$Alias = Atlantis\Util\Filters::RouteSafeAlias($this->Post->TagTitle);

		if(!$Tag)
		$this->Quit(1,'tag not found');

		$BlogUser = Atlantis\Prototype\BlogUser::GetByBlogUser(
			$Tag->BlogID,
			$this->User->ID
		);

		if(!$BlogUser || !$BlogUser->HasManagePriv())
		$this->Quit(2,'invalid user');

		$Old = Atlantis\Prototype\BlogTag::GetByBlogAlias(
			$Tag->BlogID,
			$Alias
		);

		if($Old && $Old->ID !== $Tag->ID)
		$this->Quit(3,'tag already exists');

		////////

		$Tag->Update([
			'Title' => $this->Post->TagTitle,
			'Alias' => $Alias
		]);

		$this->SetPayload($Tag);
		return;
	}

	#[Atlantis\Meta\Info('Create a new tag in this blog.')]
	#[Atlantis\Meta\Parameter('ID','Int')]
	#[Atlantis\Meta\Parameter('TagTitle','?String')]
	#[Atlantis\Meta\Error(1,'Blog not found.')]
	#[Atlantis\Meta\Error(2,'Permission denied.')]
	#[Atlantis\Meta\Error(3,'Tag already exists.')]
	final public function
	TagPost():
	Void {
	/*//
	@date 2020-09-30
	//*/

		($this->Post)
		->ID('Atlantis\\Util\\Filters::TypeInt')
		->TagTitle('Atlantis\\Util\\Filters::TrimmedText');

		$BlogUser = Atlantis\Prototype\BlogUser::GetByBlogUser($this->Post->ID,$this->User->ID);

		if(!$BlogUser)
		$this->Quit(1);

		if(!$BlogUser->HasManagePriv())
		$this->Quit(2);

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

	#[Atlantis\Meta\Info('Delete a tag from this blog.')]
	#[Atlantis\Meta\Parameter('TagID','Int')]
	#[Atlantis\Meta\Error(1,'Tag not found.')]
	#[Atlantis\Meta\Error(2,'Permission denied.')]
	final public function
	TagDelete():
	Void {
	/*//
	@date 2020-09-30
	//*/

		($this->Post)
		->TagID('Atlantis\\Util\\Filters::TypeInt');

		////////

		$Tag = Atlantis\Prototype\BlogTag::GetByID($this->Post->TagID);

		if(!$Tag)
		$this->Quit(1,'tag not found');

		$BlogUser = Atlantis\Prototype\BlogUser::GetByBlogUser(
			$Tag->BlogID,
			$this->User->ID
		);

		if(!$BlogUser || !$BlogUser->HasManagePriv())
		$this->Quit(2,'invalid user');

		////////

		$Tag->Drop();
		return;
	}

	#[Atlantis\Meta\Info('Upload an image to use as a Blog Icon.')]
	#[Atlantis\Meta\Parameter('ID','Int')]
	#[Atlantis\Meta\Parameter('Image','File')]
	#[Atlantis\Meta\Error(1,'Blog not found.')]
	#[Atlantis\Meta\Error(2,'Permission denied.')]
	#[Atlantis\Meta\Error(3,'No Image was uploaded.')]
	#[Atlantis\Meta\Error(4,'Uploaded Image was too heavy.')]
	final public function
	IconPost():
	Void {
	/*//
	@date 2020-09-21
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

	#[Atlantis\Meta\Info('Upload an image to use as a Blog Header Image.')]
	#[Atlantis\Meta\Parameter('ID','Int')]
	#[Atlantis\Meta\Parameter('Image','File')]
	#[Atlantis\Meta\Error(1,'Blog not found.')]
	#[Atlantis\Meta\Error(2,'Permission denied.')]
	#[Atlantis\Meta\Error(3,'No Image was uploaded.')]
	#[Atlantis\Meta\Error(4,'Uploaded Image was too heavy.')]
	final public function
	HeaderPost():
	Void {
	/*//
	@date 2020-09-21
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
