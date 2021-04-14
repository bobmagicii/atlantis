<?php

namespace Atlantests\EditorJS\Blocks;

use Atlantis;
use PHPUnit;

use Atlantis\Struct\EditorJS;

class CodeMirrorTest
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
				'{ "type": "code-mirror", "Title": "picard", "Mime": "captain", "Text": "Engage." },'.
				'{ "type": "code-mirror", "Title": "riker", "Mime": "commander" },'.
				'{ "type": "code-mirror" }'.
				']}'
			)
		)->ToStruct();

		// expect a certain number of blocks...
		$this->AssertCount(3,$Struct->Blocks);

		// this block should contain...
		$this->AssertTrue($Struct->Blocks[0] instanceof EditorJS\Blocks\CodeMirror);
		$this->AssertTrue(str_starts_with((string)$Struct->Blocks[0],'<pre '));
		$this->AssertTrue(str_ends_with((string)$Struct->Blocks[0],"</pre>"));
		$this->AssertTrue(str_contains((string)$Struct->Blocks[0],'data-mime="captain"'));
		$this->AssertTrue(str_contains((string)$Struct->Blocks[0],'data-title="picard"'));
		$this->AssertEquals('Engage.',$Struct->Blocks[0]->Data->Text);

		// this block should contain...
		$this->AssertTrue($Struct->Blocks[1] instanceof EditorJS\Blocks\CodeMirror);
		$this->AssertTrue(str_starts_with((string)$Struct->Blocks[1],'<pre '));
		$this->AssertTrue(str_ends_with((string)$Struct->Blocks[1],"</pre>"));
		$this->AssertTrue(str_contains((string)$Struct->Blocks[1],'data-mime="commander"'));
		$this->AssertTrue(str_contains((string)$Struct->Blocks[1],'data-title="riker"'));
		$this->AssertEquals('',$Struct->Blocks[1]->Data->Text);

		// this block should contain...
		$this->AssertTrue($Struct->Blocks[2] instanceof EditorJS\Blocks\CodeMirror);
		$this->AssertTrue(str_starts_with((string)$Struct->Blocks[2],'<pre '));
		$this->AssertTrue(str_ends_with((string)$Struct->Blocks[2],"</pre>"));
		$this->AssertTrue(str_contains((string)$Struct->Blocks[2],'data-mime=""'));
		$this->AssertTrue(str_contains((string)$Struct->Blocks[2],'data-title=""'));
		$this->AssertEquals('',$Struct->Blocks[2]->Data->Text);

		return;
	}

}
