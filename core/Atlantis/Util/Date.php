<?php

namespace Atlantis\Util;

use
\Atlantis as Atlantis,
\Nether as Nether;

use
\DateTime as DateTime,
\DateTimeZone as DateTimeZone,
\JsonSerializable as JsonSerializable;

class Date
extends DateTime
implements JsonSerializable {

	public function
	__Construct(...$Args) {
		parent::__Construct(...$Args);

		$this->SetTimezone(new DateTimeZone(
			Nether\Option::Get('Atlantis.Date.DefaultTimeZone')
			?? 'America/Chicago'
		));

		return;
	}

	public function
	__ToString():
	String {

		return $this->Format($this->DefaultFormat);
	}

	public function
	JsonSerialize():
	Array {
	/*//
	@date 2020-06-05
	@implements JsonSerializable
	//*/

		return [
			'Timestamp' => (Int)$this->Format('U'),
			'DateTime'  => $this->Format('Y-m-d H:i:s O'),
			'Diff'      => (new Date)->Diff($this)->Format('%a days')
		];
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	protected
	$DefaultFormat = 'Y-m-d';

	public function
	GetDefaultFormat():
	String {

		return $this->DefaultFormat;
	}

	public function
	SetDefaultFormat(String $Format):
	self {

		$this->DefaultFormat = $Format;
		return $this;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	static public function
	GetTimeAgo($Time):
	String {

		$Now = new DateTime;
		$Diff = $Now->Diff(new DateTime(date('Y-m-d H:i',$Time)));

		return $Diff->Format('%a days');
	}

}
