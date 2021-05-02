<?php

namespace Atlantis\Prototype;
use Atlantis;
use Nether;

class AccountPlan
extends Atlantis\Prototype {

	static protected
	$Table = 'AccountPlans';

	static protected
	$PropertyMap = [
		'ID'         => 'ID:int',
		'Title'      => 'Title',
		'MaxBlogs'   => 'MaxBlogs:int',
		'MaxStorage' => 'MaxStorage:int',
		'Price'      => 'Price'
	];

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	public int $ID;
	public string $Title;
	public int $MaxBlogs;
	public int $MaxStorage;
	public string $Price;

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	static protected function
	FindExtendOptions($Opt):
	array {
	/*//
	@date 2021-05-01
	//*/

		return [
			'Enabled' => NULL
		];
	}

}
