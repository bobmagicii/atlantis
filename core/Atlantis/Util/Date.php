<?php

namespace Atlantis\Util;

use
\Atlantis as Atlantis,
\Nether as Nether;

use
\DateTime as DateTime,
\DateTimeZone as DateTimeZone,
\JsonSerializable as JsonSerializable;
use DateTimeImmutable;

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
	@date 2021-04-11
	//*/

		return $this->Format(static::FormatYMD);
	}

	public function
	YMD12T() {
	/*//
	@date 2021-04-11
	//*/

		return $this->Format(static::FormatYMD12T);
	}

	public function
	YMD12TZ() {
	/*//
	@date 2021-04-11
	//*/

		return $this->Format(static::FormatYMD12TZ);
	}

	public function
	Fancy() {
	/*//
	@date 2021-04-11
	//*/

		return $this->Format(static::FormatFancy);
	}

	public function
	GetAgoShort(int $NowGap=60, string $Delim=' ', int $Slice=2) {
	/*//
	@date 2021-04-12
	//*/

		$Output = [];
		$Key = NULL;
		$Unit = NULL;

		$Now = new Atlantis\Util\Date();
		$Diff = $Now->Diff($this);
		$Breakdown = [
			'y' => 'yr',
			'm' => 'mo',
			'd' => 'd',
			'h' => 'h',
			'i' => 'm',
			's' => 's'
		];

		// determine if this is so recent that it could just be
		// presented as happening right now.

		if($NowGap > ($Now->GetTimestamp() - $this->GetTimestamp()))
		return 'now';

		// build build us a dataset

		foreach($Breakdown as $Key => $Unit)
		if($Diff->{$Key} || $Key === 's')
		$Output[$Key] = "{$Diff->{$Key}}{$Unit}";

		// then only take the most signifigant of the info since like
		// if we are measuring in years we often wont care about the
		// number of minutes or seconds.

		$Output = array_slice($Output,0,$Slice);

		// and combine it all into a string.

		return join($Delim,$Output);
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
