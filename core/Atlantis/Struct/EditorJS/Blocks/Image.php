<?php

namespace Atlantis\Struct\EditorJS\Blocks;

use
Atlantis;

class Image
extends Atlantis\Struct\EditorJS\Block {

	protected function
	OnReady(Array $Raw):
	Void {
		parent::OnReady($Raw);

		($this->Data)
		->ImageID('Atlantis\\Util\\Filters::TypeInt')
		->URL('Atlantis\\Util\\Filters::StrippedText')
		->Gallery('Atlantis\\Util\\Filters::TypeBool');

		return;
	}

	public function
	__ToString():
	String {

		$PrimaryClass = 'PostImage';
		$Image = NULL;
		$ImageURL = $this->Data->URL;
		$GalleryURL = $this->Data->URL;
		$UUID = Atlantis\Util::UUID(4,FALSE);

		if($this->Data->Gallery)
		$PrimaryClass .= ' PostImageGallery';

		if($this->Data->ImageID) {
			if($Image = Atlantis\Prototype\UploadImage::GetByID($this->Data->ImageID)) {
				$ImageURL = $Image->GetURL('lg');
				$GalleryURL = $Image->GetURL('image');
			}
		}

		return sprintf(
			'<div class="%s text-center mb-4" data-uuid="%s" data-image-url="%s"><img src="%s" alt="" title="" /></div>',
			$PrimaryClass,
			$UUID,
			$GalleryURL,
			$ImageURL
		);
	}

}
