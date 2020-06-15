<?php

namespace Atlantests\BlogPost;

use \Atlantis as Atlantis;
use \PHPUnit as PHPUnit;

class LocalAtlantisBlogPost
extends Atlantis\Prototype\BlogPost {

	static public function
	GetByAlias(String $BlogAlias, String $PostAlias):
	?self {

		if($BlogAlias === 'conflict' && $PostAlias === 'test-post')
		return new static([
			'Alias'             => $PostAlias,
			'TimeCreated'       => time(),
			'TimeUpdated'       => time(),
			'BL_ID'             => 1,
			'BL_Alias'          => $BlogAlias,
			'BL_TimeCreated'    => time(),
			'BL_TimeUpdated'    => time(),
			'BL_ImageHeaderURL' => '',
			'BL_ImageIconURL'   => ''
		]);

		return NULL;
	}

}

class UniqueAliasGenerationTest
extends PHPUnit\Framework\TestCase {

	/** @test */
	public function
	TestMicrotimeMode():
	Void {

		$Conflict = LocalAtlantisBlogPost::GetByAlias('conflict','test-post');

		$AliasConflict = LocalAtlantisBlogPost::GenerateUniqueAlias(
			$Conflict->Blog,
			'test-post'
		);

		$AliasHarmony = LocalAtlantisBlogPost::GenerateUniqueAlias(
			$Conflict->Blog,
			'yolo-swaggins'
		);

		$this->AssertMatchesRegularExpression(
			'/^test-post-[\d]{7,}$/',
			$AliasConflict,
			'Generate a unique post alias with a microtime slug'
		);

		$this->AssertSame(
			'yolo-swaggins',
			$AliasHarmony,
			'Allow alias as it was not found prior'
		);

		return;
	}

}
