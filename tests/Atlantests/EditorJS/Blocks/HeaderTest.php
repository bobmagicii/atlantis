<?php

namespace Atlantests\EditorJS\Blocks;

use Atlantis;
use PHPUnit;

use Atlantis\Struct\EditorJS;

class HeaderTest
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
				'{ "type": "header", "level": 1, "text": "captain picard" },'.
				'{ "type": "header", "level": 2, "text": " commander riker " },'.
				'{ "type": "header" }'.
				']}'
			)
		)->ToStruct();

		// expect a certain number of blocks...
		$this->AssertCount(3,$Struct->Blocks);

		// this block should contain...
		$this->AssertTrue($Struct->Blocks[0] instanceof EditorJS\Blocks\Header);
		$this->AssertTrue(str_contains((string)$Struct->Blocks[0],'captain picard'));
		$this->AssertTrue(str_starts_with((string)$Struct->Blocks[0],'<h1 '));
		$this->AssertTrue(str_ends_with((string)$Struct->Blocks[0],"</h1>\n"));

		// this block should contain...
		$this->AssertTrue($Struct->Blocks[1] instanceof EditorJS\Blocks\Header);
		$this->AssertTrue(str_contains((string)$Struct->Blocks[1],'commander riker'));
		$this->AssertTrue(str_starts_with((string)$Struct->Blocks[1],'<h2 '));
		$this->AssertTrue(str_ends_with((string)$Struct->Blocks[1],"</h2>\n"));

		// this block should contain...
		$this->AssertTrue($Struct->Blocks[2] instanceof EditorJS\Blocks\Header);
		$this->AssertEquals(NULL,$Struct->Blocks[2]->Data->Text);
		$this->AssertTrue(str_starts_with((string)$Struct->Blocks[2],'<h1 '));
		$this->AssertTrue(str_ends_with((string)$Struct->Blocks[2],"</h1>\n"));

		return;
	}

}
