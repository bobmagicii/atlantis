<?php

namespace Atlantis\Blog;
use \Atlantis as Atlantis;
use \Nether   as Nether;

class User
extends Nether\Object {
/*//
this class defines the relationship between a blog and a site user. user levels
are expected to be keywords like 'admin' and 'writer'.
//*/

	static public
	$PropertyMap = [
		'blog_id'        => 'BlogID:int',
		'user_id'        => 'UserID:int',
		'bloguser_level' => 'Level'
	];

}
