<?php

namespace Routes\Dashboard;

use
Atlantis\Site\ProtectedWeb,
Atlantis\Prototype\Blog,
Atlantis\Prototype\BlogUser,
Atlantis\Prototype\BlogPostUploadImage;

class Account
extends ProtectedWeb {

	public function
	Index():
	void {

		$this
		->Set('Page.Title','Account Dashboard')
		->Area('dashboard/account/index');

		return;
	}

	public function
	Settings():
	void {

		$this
		->Set('Page.Title','Account Settings')
		->Area('dashboard/account/settings');

		return;
	}

	public function
	Auth():
	void {

		$this
		->Set('Page.Title','Manage Third-Party Auth')
		->Area('dashboard/account/auth');

		return;
	}

	public function
	Password():
	void {

		$this
		->Set('Page.Title','Change Password')
		->Area('dashboard/account/password');

		return;
	}

	public function
	Images():
	void {

		($this->Get)
		->Blog('Atlantis\\Util\\Filters::TypeInt');

		$Blog = NULL;
		$Blogs = NULL;
		$TotalUsage = 0.0;
		$BlogUsage = 0.0;
		$TotalUsagePercent = NULL;
		$BlogUsagePercent = 0.0;
		$TotalSpace = 1024 * 1024 * 1024; // @todo make this real from the account

		////////

		$Blogs = (
			(BlogUser::Find([ 'UserID' => $this->User->ID ])->Payload)
			->Filter(function(BlogUser $Val){ return $Val->HasManagePriv(); })
			->Remap(function(BlogUser $Val){ return $Val->Blog; })
		);

		////////

		$TotalUsage = $this->User->BytesImages;
		$TotalUsagePercent = ($TotalUsage / $TotalSpace ) * 100;

		if($this->Get->Blog) {
			$Blog = Blog::GetByID($this->Get->Blog);
			$BlogUsage = BlogPostUploadImage::GetBytesByBlogID($Blog->ID);
			$BlogUsagePercent = ($BlogUsage / $TotalSpace) * 100;
			$TotalUsagePercent = $TotalUsagePercent - $BlogUsagePercent;
		}

		////////

		$this
		->Set('Page.Title','Manage Images')
		->Area('dashboard/account/images',[
			'Blog'              => $Blog,
			'Blogs'             => $Blogs,
			'TotalUsage'        => $TotalUsage,
			'BlogUsage'         => $BlogUsage,
			'TotalUsagePercent' => $TotalUsagePercent,
			'BlogUsagePercent'  => $BlogUsagePercent,
			'TotalSpace'        => $TotalSpace
		]);

		return;
	}

}
