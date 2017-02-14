<?php

namespace Atlantis\Blog;
use \Atlantis as Atlantis;
use \Nether   as Nether;

class Post
extends Nether\Object {

	public static
	$PropertyMap = [
		'post_id'      => 'ID:int',
		'user_id'      => 'OwnerID:int',
		'post_ptime'   => 'TimePosted:int',
		'post_utime'   => 'TimeUpdated:int',
		'post_draft'   => 'Draft:bool',
		'post_title'   => 'Title',
		'post_content' => 'Content'
	];

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	protected
	$ID = 0;

	public function
	GetID():
	Int {

		return $this->ID;
	}

	////////////////
	////////////////

	protected
	$OwnerID = 0;

	public function
	GetOwnerID():
	Int {

		return $this->OwnerID;
	}

	////////////////
	////////////////

	protected
	$TimePosted = 0;

	public function
	GetTimePosted():
	Int {

		return $this->TimePosted;
	}

	public functoin
	GetDatePosted():
	String {

		return date('Y-m-d',$this->TimePosted);
	}

	////////////////
	////////////////

	protected
	$TimeUpdated = 0;

	public function
	GetTimeUpdated():
	Int {

		return $this->TimeUpdated;
	}

	public function
	GetDateUpdated():
	String {

		return date('Y-m-d',$this->TimeUpdated);
	}

	////////////////
	////////////////

	protected
	$Draft = FALSE;

	public function
	IsDraft():
	Bool {

		return $this->Draft;
	}

	////////////////
	////////////////

	protected
	$Title = '';

	public function
	GetTitle():
	String {

		return $this->Title;
	}

	////////////////
	////////////////

	protected
	$Content = '';

	public function
	GetContent():
	String {

		return $this->Content;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

}

