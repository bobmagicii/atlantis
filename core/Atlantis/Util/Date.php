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

	const
	FormatYMD = 'Y-m-d',
	FormatYMD12T = 'Y-m-d g:ia',
	FormatYMD12TZ = 'Y-m-d g:ia T',
	FormatFancy = 'F jS g:ia';

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
	string {

		return $this->Format($this->DefaultFormat);
	}

	public function
	JsonSerialize():
	array {
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
	$DefaultFormat = self::FormatYMD;

	public function
	GetDefaultFormat():
	string {

		return $this->DefaultFormat;
	}

	public function
	SetDefaultFormat(string $Format):
	self {

		$this->DefaultFormat = $Format;
		return $this;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	public function
	YMD() {
	/*//
	//*/

		return $this->Format(static::FormatYMD);
	}

	public function
	YMD12T() {
	/*//
	//*/

		return $this->Format(static::FormatYMD12T);
	}

	public function
	YMD12TZ() {
	/*//
	//*/

		return $this->Format(static::FormatYMD12TZ);
	}

	public function
	Fancy() {
	/*//
	//*/

		return $this->Format(static::FormatFancy);
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	static public function
	GetTimeAgo($Time):
	string {

		$Now = new DateTime;
		$Diff = $Now->Diff(new DateTime(date('Y-m-d H:i',$Time)));

		return $Diff->Format('%a days');
	}

}
