<?php

namespace Atlantis\Util;

use
\Atlantis as Atlantis,
\Nether as Nether;

use
\DateTime as DateTime,
\DateTimeZone as DateTimeZone;

class Date
extends DateTime {

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
