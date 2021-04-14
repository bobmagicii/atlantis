<?php

namespace Atlantests\EditorJS\Blocks;

use Atlantis;
use PHPUnit;

use Atlantis\Struct\EditorJS;

class HrTest
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
				'{ "type": "hr", "mode": "empty" },'.
				'{ "type": "hr", "mode": "asdf" },'.
				'{ "type": "hr" }'.
				']}'
			)
		)->ToStruct();

		// expect a certain number of blocks...
		$this->AssertCount(3,$Struct->Blocks);

		// this block should contain...
		$this->AssertTrue($Struct->Blocks[0] instanceof EditorJS\Blocks\Hr);
		$this->AssertEquals('empty',$Struct->Blocks[0]->Data->Mode);
		$this->AssertTrue(str_starts_with((string)$Struct->Blocks[0],'<div '));
		$this->AssertTrue(str_ends_with((string)$Struct->Blocks[0],"</div>"));

		// this block should contain...
		$this->AssertTrue($Struct->Blocks[1] instanceof EditorJS\Blocks\Hr);
		$this->AssertEquals('<hr />',(string)$Struct->Blocks[1]);

		$this->AssertTrue($Struct->Blocks[2] instanceof EditorJS\Blocks\Hr);
		$this->AssertEquals('<hr />',(string)$Struct->Blocks[2]);

		return;
	}

}
