<?php

namespace Atlantis\Prototype;

use
Atlantis,
Nether;

class BlogDomain
extends Atlantis\Prototype {

	static protected
	$Table = 'BlogDomains';

	static protected
	$PropertyMap = [
		'ID' => 'ID:int',
		'BlogID' => 'BlogID:int',
		'Type' => 'Type:int',
		'Domain' => 'Domain'
	];

	const
	TypeRedirect   = 1,
	TypeMasquerade = 2;

	public
	Int $ID;

	public
	Int $BlogID;

	public
	Int $Type;

	public
	String $Domain;

	public
	Atlantis\Prototype\Blog $Blog;

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	protected function
	OnReady(Array $Raw):
	Void {

		if(array_key_exists('B_ID',$Raw))
		$this->Blog = new Atlantis\Prototype\Blog(
			Atlantis\Util::StripPrefixedQueryFields($Raw,'B_')
		);

		return;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	static public function
	GetByDomain(String $Domain):
	?self {
	/*//
	@date 2020-10-04
	//*/

		$SQL = (Nether\Database::Get()->NewVerse())
		->Select(sprintf('%s Main',static::$Table))
		->Fields('Main.*')
		->Where('Main.Domain LIKE :Domain')
		->Limit(1);

		static::ExtendQueryJoins($SQL);
		static::ExtendQueryFields($SQL);

		$Result = $SQL->Query([
			':Domain' => $Domain
		]);

		if(!$Result->GetCount())
		return NULL;

		return (new static($Result->Next()));
	}

	static protected function
	ExtendQueryJoins($SQL, String $TableAlias='Main', String $FieldPrefix=''):
	Void {
	/*//
	@date 2020-09-29
	//*/

		$SQL
		->Join('Blogs B ON B.ID=Main.BlogID');

		Atlantis\Prototype\Blog::ExtendQueryJoins($SQL,'B','B_');

		return;
	}

	static protected function
	ExtendQueryFields($SQL, String $TablePrefix='', String $FieldPrefix=''):
	Void {
	/*//
	@date 2020-09-29
	//*/

		Atlantis\Prototype\Blog::ExtendMainFields($SQL,'B','B_');
		Atlantis\Prototype\Blog::ExtendQueryFields($SQL,'B','B_');

		return;
	}

	static protected function
	FindExtendOptions($Opt):
	Array {
	/*//
	@date 2020-05-23
	//*/

		return [
			'BlogID'  => NULL,
			'Domain'  => NULL,
			'Enabled' => NULL
		];
	}

	static protected function
	FindApplyFilters($Opt,$SQL):
	Void {
	/*//
	@date 2020-09-29
	//*/

		if($Opt->BlogID !== NULL)
		$SQL->Where('Post.BlogID=:BlogID');

		if($Opt->Domain !== NULL)
		$SQL->Where('Main.Domain LIKE :Domain');

		return;
	}

}