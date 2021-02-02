<?php

namespace Local\Prototype;

use Local;
use Atlantis;
use Nether;

class LogVideoPlayer
extends Atlantis\Prototype {

	static protected
	$Table = 'LogVideoPlayer';

	static protected
	$PropertyMap = [
		'ID'        => 'ID:int',
		'UserID'    => 'UserID:int',
		'TimeAdded' => 'TimeAdded:int',
		'URL'       => 'URL'
	];

	////////////////////////////////
	////////////////////////////////

	public int
	$ID;

	public int
	$UserID;

	public int
	$TimeAdded;

	public string
	$URL;

	public Atlantis\Util\Date
	$DateAdded;

	////////////////////////////////
	////////////////////////////////

	protected function
	__Ready(Array $Raw):
	Void {

		$this->DateAdded = new Atlantis\Util\Date("@{$this->TimeAdded}");

		return;
	}

	////////////////////////////////
	////////////////////////////////

}
