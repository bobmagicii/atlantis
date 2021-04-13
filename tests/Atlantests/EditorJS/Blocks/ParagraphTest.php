<?php

namespace Atlantests\EditorJS\Blocks;

use Atlantis;
use PHPUnit;

use Atlantis\Struct\EditorJS;

class ParagraphTest
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
				'{ "type": "paragraph", "text": "captain picard" },'.
				'{ "type": "paragraph", "text": " commander riker " },'.
				'{ "type": "paragraph" }'.
				']}'
			)
		)->ToStruct();

		// expect a certain number of blocks...
		$this->AssertCount(3,$Struct->Blocks);

		// this block should contain...
		$this->AssertTrue($Struct->Blocks[0] instanceof EditorJS\Blocks\Paragraph);
		$this->AssertEquals('captain picard',$Struct->Blocks[0]->Data->Text);
		$this->AssertTrue(str_contains((string)$Struct->Blocks[0],'captain picard'));
		$this->AssertTrue(str_starts_with((string)$Struct->Blocks[0],'<div '));
		$this->AssertTrue(str_ends_with((string)$Struct->Blocks[0],"</div>\n"));

		// this block should contain...
		$this->AssertTrue($Struct->Blocks[1] instanceof EditorJS\Blocks\Paragraph);
		$this->AssertEquals('commander riker',$Struct->Blocks[1]->Data->Text);
		$this->AssertTrue(str_contains((string)$Struct->Blocks[1],'commander riker'));
		$this->AssertTrue(str_starts_with((string)$Struct->Blocks[1],'<div '));
		$this->AssertTrue(str_ends_with((string)$Struct->Blocks[1],"</div>\n"));

		// this block should contain...
		$this->AssertTrue($Struct->Blocks[2] instanceof EditorJS\Blocks\Paragraph);
		$this->AssertEquals(NULL,$Struct->Blocks[2]->Data->Text);

		return;
	}

}
