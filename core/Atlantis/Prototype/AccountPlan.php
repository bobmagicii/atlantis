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
		'Price'      => 'Price:float'
	];

}
