<?php

namespace Atlantis\Struct;

use
Atlantis,
Nether;

use
JsonSerializable;

class SearchResult
implements JsonSerializable {

	public
	String $Title = '';

	public
	Int $Page = 1;

	public
	Int $Count = 0;

	public
	Int $Total = 0;

	public
	Int $Limit = 0;

	public
	Atlantis\Datastore $Payload;

	public function
	__Construct(?Array $Input=NULL) {

		if(is_array($Input) || $Input === NULL)
		$this->Payload = new Atlantis\Datastore($Input);

		return;
	}

	public function
	JsonSerialize():
	Array {
		return [
			'Title'     => $this->Title,
			'Page'      => $this->Page,
			'PageCount' => $this->GetPageCount(),
			'Count'     => $this->Count,
			'Total'     => $this->Total,
			'Limit'     => $this->Limit,
			'Payload'   => $this->Payload->GetData()
		];
	}

	public function
	GetPageCount():
	Int {

		if($this->Limit)
		return ceil($this->Total / $this->Limit);

		return 1;
	}

	public static function
	FromArray(Array $Input,$Opt=NULL):
	?self {

		$Output = new static;

		$Output->Payload = new Atlantis\Datastore($Input);
		$Output->Count = count($Input);
		$Output->Total = $Output->Count;

		if($Opt) {
			$Opt = new Nether\Object\Mapped($Opt,[
				'Page'  => 1,
				'Limit' => 0,
				'Total' => NULL
			]);

			$Output->Page = $Opt->Page;
			$Output->Limit = $Opt->Limit;

			if($Opt->Total)
			$Output->Total = $Opt->Total;
		}

		return $Output;
	}

}
