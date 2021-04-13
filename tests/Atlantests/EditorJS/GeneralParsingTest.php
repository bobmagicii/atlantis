<?php

namespace Atlantests\EditorJS;

use Atlantis;
use PHPUnit;

use Atlantis\Struct\EditorJS;

class GeneralParsingTest
extends PHPUnit\Framework\TestCase {

	/** @test */
	public function
	TestInputValidator():
	void {
	/*//
	@date 2021-04-13
	this tests the low level validator we use to check that the basic
	structure of the input matches what we would have expected to come
	out of editorjs. the validator is built to silently disregard data
	that is fucked and always return a valid structure.
	//*/

		$Dataset = NULL;
		$Validator = NULL;
		$Array = NULL;
		$Iter = NULL;

		$Datasets = [
			'{ "version": "2.18.0", "time": 12345678, "blocks": [ {}, {}, {} ] }',
			'{ "vwerson": "two eighteen", "tyme": "now", "blorks": null }',
			[],
			(object)[]
		];

		foreach($Datasets as $Iter => $Dataset) {
			$Validator = new EditorJS\Validator($Dataset);
			$Array = $Validator->ToArray();

			// expect to have an array...
			$this->AssertIsArray($Array,"Dataset[{$Iter}]");

			// with three elements...
			$this->AssertCount(3,$Array,"Dataset[{$Iter}]");

			// named these things...
			$this->AssertArrayHasKey('version',$Array,"Dataset[{$Iter}]");
			$this->AssertArrayHasKey('time',$Array,"Dataset[{$Iter}]");
			$this->AssertArrayHasKey('blocks',$Array,"Dataset[{$Iter}]");

			// the block element should be an empty array...
			$this->AssertIsArray($Array['blocks'],"Dataset[{$Iter}]");
			$this->AssertCount(0,$Array['blocks'],"Dataset[{$Iter}]");

			// shitty input should not have made it to the final object.
			$this->AssertArrayNotHasKey('blorks',$Array,"Dataset[{$Iter}]");
		}

		return;
	}

	/** @test */
	public function
	TestInputValidatorStructureValid():
	void {
	/*//
	@date 2021-04-13
	//*/

		$Validator = NULL;
		$Struct = NULL;
		$Block = NULL;

		////////

		$Validator = new EditorJS\Validator('{ "version": "2.18.0", "time": 12345678, "blocks": [ { "type":"paragraph" }, { "type":"paragraph" }, { "type":"paragraph" } ] }');
		$Struct = $Validator->ToStruct();

		// expect to have an editorjs content object.
		$this->AssertTrue($Struct instanceof EditorJS\Content);

		// the version should be equal to or greater than 2.18.0
		$this->AssertTrue(version_compare($Struct->Version,'2.18.0') >= 0);

		// that has three blocks
		$this->AssertIsArray($Struct->Blocks);
		$this->AssertCount(3,$Struct->Blocks);

		foreach($Struct->Blocks as $Block) {
			// all the blocks should be editor js blocks.
			$this->AssertTrue($Block instanceof EditorJS\Block);

			// all of the blocks should be paragraph blocks.
			$this->AssertTrue($Block instanceof EditorJS\Blocks\Paragraph);
		}

		return;
	}

	/** @test */
	public function
	TestInputValidatorStructureInvalid():
	void {
	/*//
	@date 2021-04-13
	//*/

		$Validator = NULL;
		$Struct = NULL;
		$Block = NULL;

		////////

		$Validator = new EditorJS\Validator('{ "vwerson": "two eighteen", "tyme": "now", "blorks": [ {}, {}, {} ] }');
		$Struct = $Validator->ToStruct();

		// expect to have an editorjs content object.
		$this->AssertTrue($Struct instanceof EditorJS\Content);

		// that has zero blocks
		$this->AssertCount(0,$Struct->Blocks);

		return;
	}

}
