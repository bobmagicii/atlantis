<?php

namespace Atlantis\Prototype;

use
\Atlantis as Atlantis,
\Nether   as Nether,
\Ramsey   as Ramsey;

use
\Exception as Exception;

class BlogUser
extends Atlantis\Prototype {

	const
	FlagOwner = 0b00000001;

	protected static
	$Table = 'BlogUsers';

	protected static
	$IDField = 'ID';

	protected static
	$PropertyMap = [
		'ID'          => 'ID:int',
		'BlogID'      => 'BlogID:int',
		'UserID'      => 'UserID:int',
		'Flags'       => 'Flags:int',
		'Enabled'     => 'Enabled:int',
		'TimeCreated' => 'TimeCreated:int',
		'TimeUpdated' => 'TimeUpdated:int',
		'UUID'        => 'UUID'
	];

	// database fields.

	public Int $BlogID;
	public Int $UserID;
	public Int $Flags;
	public Int $Enabled;
	public Int $TimeCreated;
	public Int $TimeUpdated;
	public String $UUID;

	// extension fields.

	public Atlantis\Util\Date $DateCreated;
	public Atlantis\Util\Date $DateUpdated;

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	public function
	OnReady(Array $Raw):
	Void {
	/*//
	prepare some data for this object.
	//*/

		($this)
		->OnReady_GetDates();

		return;
	}

	protected function
	OnReady_GetDates():
	self {
	/*//
	prepare the date objects.
	//*/

		$this->DateCreated = new Atlantis\Util\Date("@{$this->TimeCreated}");
		$this->DateUpdated = new Atlantis\Util\Date("@{$this->TimeUpdated}");
		return $this;
	}

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	static public function
	Create($Opt):
	self {

		$Opt = new Nether\Object\Mapped($Opt,[
			'BlogID'      => 0,
			'UserID'      => 0,
			'Flags'       => 0,
			'Enabled'     => 1,
			'TimeCreated' => time(),
			'TimeUpdated' => time(),
			'UUID'        => Ramsey\Uuid\Uuid::UUID4()->ToString()
		]);

		if(!$Opt->BlogID)
		throw new Exception('Must have a BlogID.');

		if(!$Opt->UserID)
		throw new Exception('Must have a UserID.');

		return parent::Create($Opt);
	}

}
