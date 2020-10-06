<?php

namespace Atlantis\Prototype;

use
Atlantis,
Nether;

use
Exception;

class InviteRequest
extends Atlantis\Prototype {

	static protected
	$Table = 'InviteRequests';

	static protected
	$PropertyMap = [
		'ID'          => 'ID:int',
		'Enabled'     => 'Enabled:int',
		'TimeCreated' => 'TimeCreated:int',
		'UserID'      => 'UserID:int',
		'UUID'        => 'UUID',
		'Email'       => 'Email'
	];

	static public function
	GetByEmail(String $Email):
	?self {
	/*//
	@date 2017-02-10
	return the specified user looking up by email address.
	//*/

		$SQL = Nether\Database::Get()->NewVerse();

		$SQL
		->Select(sprintf('%s Main',static::$Table))
		->Fields('Main.*')
		->Where('Main.Email LIKE :Email')
		->Limit(1);

		static::ExtendQueryJoins($SQL);
		static::ExtendQueryFields($SQL);

		$Result = $SQL->Query([
			':Email' => $Email
		]);

		// user not found
		if(!$Result->GetCount())
		return NULL;

		// get user.
		return (new static($Result->Next()));
	}

	static public function
	Insert($Opt):
	self {

		$Opt = new Nether\Object\Mapped($Opt,[
			'Email'       => NULL,
			'UUID'        => Atlantis\Util::UUID(),
			'TimeCreated' => time()
		]);

		if(!$Opt->Email)
		throw new Exception('email cannot be empty');

		return parent::Insert($Opt);
	}

}
