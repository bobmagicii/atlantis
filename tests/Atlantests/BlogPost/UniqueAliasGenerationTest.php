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

		$Post = LocalAtlantisBlogPost::GetByAlias('conflict','test-post');
		$AliasNew = LocalAtlantisBlogPost::GenerateUniqueAlias(
			$Post->Blog,
			'test-post'
		);

		$this->AssertMatchesRegularExpression(
			'/^test-post-[\d]{7,}$/',
			$AliasNew,
			'Generate a unique post alias with a microtime slug'
		);

		return;
	}

}
