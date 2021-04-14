<?php

namespace Atlantests\EditorJS\Blocks;

use Atlantis;
use PHPUnit;

use Atlantis\Struct\EditorJS;

class ImageTest
extends PHPUnit\Framework\TestCase {

	/** @test */
	public function
	TestThisBlockMyDude():
	void {
	/*//
	@date 2021-04-13
	//*/

		$Struct = (
			new EditorJS\Validator(
				'{ "version": "2.18.0", "time": 123456789, "blocks": ['.
				'{ "type": "image", "ImageID": 0, "URL": "captain-picard.jpg", "Gallery": false, "PrimaryImage": true },'.
				'{ "type": "image", "ImageID": 0, "URL": "commander-riker.jpg", "Gallery": true, "PrimaryImage": false },'.
				'{ "type": "image" }'.
				']}'
			)
		)->ToStruct();

		// expect a certain number of blocks...
		$this->AssertCount(3,$Struct->Blocks);

		// this block should contain...
		$this->AssertTrue($Struct->Blocks[0] instanceof EditorJS\Blocks\Image);
		$this->AssertTrue(str_contains((string)$Struct->Blocks[0],'src="captain-picard.jpg"'));
		$this->AssertTrue(str_starts_with((string)$Struct->Blocks[0],'<div '));
		$this->AssertTrue(str_ends_with((string)$Struct->Blocks[0],"</div>"));
		$this->AssertIsBool($Struct->Blocks[0]->Data->Gallery);
		$this->assertFalse($Struct->Blocks[0]->Data->Gallery);
		$this->assertTrue($Struct->Blocks[0]->Data->PrimaryImage);

		// this block should contain...
		$this->AssertTrue($Struct->Blocks[1] instanceof EditorJS\Blocks\Image);
		$this->AssertTrue(str_contains((string)$Struct->Blocks[1],'src="commander-riker.jpg"'));
		$this->AssertTrue(str_starts_with((string)$Struct->Blocks[1],'<div '));
		$this->AssertTrue(str_ends_with((string)$Struct->Blocks[1],"</div>"));
		$this->assertTrue($Struct->Blocks[1]->Data->Gallery);
		$this->assertFalse($Struct->Blocks[1]->Data->PrimaryImage);

		// this block should contain...
		$this->AssertTrue($Struct->Blocks[2] instanceof EditorJS\Blocks\Image);
		$this->AssertEquals(NULL,$Struct->Blocks[2]->Data->Text);
		$this->AssertTrue(str_starts_with((string)$Struct->Blocks[2],'<div '));
		$this->AssertTrue(str_ends_with((string)$Struct->Blocks[2],"</div>"));
		$this->assertFalse($Struct->Blocks[2]->Data->Gallery);
		$this->assertFalse($Struct->Blocks[2]->Data->PrimaryImage);

		return;
	}

}
