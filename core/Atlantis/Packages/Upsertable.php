<?php

namespace Atlantis\Packages;
use \Atlantis as Atlantis;

interface Upsertable {

	public function
	IsUpdated():
	Bool;

	public function
	SetUpdated(Bool $Input):
	self;

}
