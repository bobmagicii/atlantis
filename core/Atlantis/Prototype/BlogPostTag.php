<?php

namespace Atlantis\Prototype;

use
\Atlantis as Atlantis,
\Nether   as Nether,
\Ramsey   as Ramsey;

use
\Exception as Exception;

class BlogPostTag
extends Atlantis\Prototype {

	protected static
	$Table = 'BlogPostTags';

	protected static
	$IDField = 'ID';

	protected static
	$PropertyMap = [
		'ID'     => 'ID:int',
		'BlogID' => 'BlogID:int',
		'TagID'  => 'TagID:int'
	];

	// database fields.

	public Int $ID;
	public Int $BlogID;
	public Int $TagID;

	// extension fields

	public Atlantis\Prototype\BlogTag $Tag;

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	public function
	OnReady(Array $Raw):
	Void {
	/*//
	prepare some data for this object.
	//*/

		if(array_key_exists('T_ID',$Raw))
		$this->Tag = new Atlantis\Prototype\BlogTag(
			Atlantis\Util::StripPrefixedQueryFields($Raw,'T_')
		);

		return;
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	static public function
	GetByBlogPost(Int $PostID):
	Atlantis\Struct\SearchResult {
	/*//
	@date 2020-09-29
	//*/

		$Result = static::Find([
			'PostID' => $PostID
		]);

		return $Result;
	}

	static public function
	GetByTag(Int $TagID):
	Atlantis\Struct\SearchResult {
	/*//
	@date 2020-09-29
	//*/

		$Result = static::Find([
			'TagID' => $TagID
		]);

		return $Result;
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	static protected function
	ExtendQueryJoins($SQL, String $TableAlias='Main', String $FieldPrefix=''):
	Void {
	/*//
	@date 2020-09-29
	//*/

		$SQL
		->Join('BlogTags Tag ON Tag.ID=Main.TagID');

		return;
	}

	static protected function
	ExtendQueryFields($SQL, String $TablePrefix='', String $FieldPrefix=''):
	Void {
	/*//
	@date 2020-09-29
	//*/

		Atlantis\Prototype\BlogTag::ExtendMainFields($SQL,'Tag','T_');

		return;
	}

	static protected function
	FindExtendOptions($Opt):
	Array {
	/*//
	@date 2020-05-23
	//*/

		return [
			'PostID'  => NULL,
			'TagID'   => NULL,
			'Enabled' => NULL
		];
	}

	static protected function
	FindApplyFilters($Opt,$SQL):
	Void {
	/*//
	@date 2020-09-29
	//*/

		if($Opt->PostID !== NULL)
		$SQL->Where('Main.PostID=:PostID');

		if($Opt->TagID !== NULL)
		$SQL->Where('Main.TagID=:TagID');

		return;
	}

	static protected function
	FindApplySorts($Opt,$SQL):
	Void {
	/*//
	@date 2020-09-29
	//*/

		switch($Opt->Sort) {
			case 'tag-az':
				$SQL->Sort('Tag.Title',$SQL::SortAsc);
			break;
			case 'tag-za':
				$SQL->Sort('Tag.Title',$SQL::SortDesc);
			break;
		}

		return;
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	static public function
	Insert($Opt):
	self {
	/*//
	@date 2020-09-29
	//*/

		$Opt = new Nether\Object\Mapped($Opt,[
			'BlogID' => 0,
			'TagID'  => 0
		]);

		if(!$Opt->BlogID)
		throw new Exception('Must have a BlogID');

		if(!$Opt->TagID)
		throw new Exception('Must have a TagID');

		return parent::Insert($Opt);
	}

}
