<?php

namespace Atlantis\Element;

use Atlantis;
use Nether;

use Atlantis\Struct\SearchResult;
use Atlantis\Site\Router;

class Pager
extends Atlantis\Element {

	protected
	$Area = 'element/pager';

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	public int
	$Page = 1;

	public int
	$PageCount = 1;

	public ?string
	$NextURL = NULL;

	public string
	$NextIcon = 'fas fa-fw fa-caret-right';

	public ?string
	$PrevURL = NULL;

	public string
	$PrevIcon = 'fas fa-fw fa-caret-left';

	public bool
	$HR = TRUE;

	static public function
	FromResult(SearchResult $Result, Router $Router=NULL):
	static {

		$Pager = new static;
		$Pager->Page = $Result->Page;
		$Pager->PageCount = $Result->GetPageCount();

		if($Router instanceof Router) {
			$Pager->NextURL = $Router->QueryCooker(['page'=>($Pager->Page+1)]);
			$Pager->PrevURL = $Router->QueryCooker(['page'=>($Pager->Page-1)]);
		}

		return $Pager;
	}

}
