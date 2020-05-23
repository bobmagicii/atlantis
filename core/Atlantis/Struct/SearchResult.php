<?php

namespace Atlantis\Struct;

use
\Nether as Nether;

class SearchResult {

	public
	$Page = 1;

	public
	$Count = 0;

	public
	$Total = 0;

	public
	$Limit = 0;

	public
	$Payload = [];

	public
	$Title = '';

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

		$Output->Payload = $Input;
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
