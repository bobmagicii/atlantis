<?php

namespace Atlantis\Element;
use \Atlantis as Atlantis;
use \Nether   as Nether;

class PostListing
extends Atlantis\Element {

	protected
	$Area = 'element/post-listing';

	use
	Atlantis\Properties\Title,
	Atlantis\Properties\Subtitle,
	Atlantis\Properties\ItemListStore;

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	protected bool
	$ShowSourceBlog = TRUE;

	public function
	ShowSourceBlog():
	bool {
	/*//
	@date 2021-04-09
	//*/

		return $this->ShowSourceBlog;
	}

	public function
	SetShowSourceBlog(bool $Val):
	static {
	/*//
	@date 2021-04-09
	//*/

		$this->ShowSourceBlog = $Val;
		return $this;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	const
	PostImageHide    = 0,
	PostImageShow    = 1,
	PostImagePreview = 2;

	protected int
	$ShowPostImage = 1;

	public function
	ShowPostImage():
	int {
	/*//
	@date 2021-04-09
	//*/

		return $this->ShowPostImage;
	}

	public function
	SetShowPostImage(int $Val):
	static {
	/*//
	@date 2021-04-09
	//*/

		$this->ShowPostImage = $Val;
		return $this;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	protected bool
	$ShowPostPreview = TRUE;

	public function
	ShowPostPreview():
	bool {
	/*//
	@date 2021-04-17
	//*/

		return $this->ShowPostPreview;
	}

	public function
	SetShowPostPreview(bool $Val):
	static {
	/*//
	@date 2021-04-17``
	//*/

		$this->ShowPostPreview = $Val;
		return $this;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	protected bool
	$ShowEditorControls = FALSE;

	public function
	ShowEditorControls():
	bool {
	/*//
	@date 2021-04-17
	//*/

		return $this->ShowEditorControls;
	}

	public function
	SetShowEditorControls(bool $Val):
	static {
	/*//
	@date 2021-04-17``
	//*/

		$this->ShowEditorControls = $Val;
		return $this;
	}

}
