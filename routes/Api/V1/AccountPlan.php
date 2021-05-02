<?php

namespace Routes\Api\V1;
use Atlantis;

use Atlantis\Prototype\AccountPlan as Plan;

class AccountPlan
extends Atlantis\Site\PrivateAPI {

	static protected
	$MethodMap = [
		'entity' => 'Entity'
	];

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	protected function
	OnReady():
	void {
	/*//
	@date 2021-05-01
	//*/

		($this->Get)
		->ID(Atlantis\Util\Filters::TypeIntCallable());

		($this->Post)
		->ID(Atlantis\Util\Filters::TypeIntCallable())
		->Title(Atlantis\Util\Filters::StrippedTextCallable())
		->MaxBlogs(Atlantis\Util\Filters::TypeIntCallable())
		->MaxStorage(Atlantis\Util\Filters::TypeIntCallable())
		->Price(Atlantis\Util\Filters::StrippedTextCallable());

		return;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	#[Atlantis\Meta\Parameter('ID','int')]
	#[Atlantis\Meta\Error(1,'account plan not found')]
	final public function
	EntityDelete():
	void {
	/*//
	@date 2021-05-01
	//*/

		$Plan = Plan::GetByID($this->Get->ID);

		if(!$Plan)
		$this->Quit(1);

		$Plan->Drop();
		return;
	}

	#[Atlantis\Meta\Parameter('ID','int')]
	#[Atlantis\Meta\Error(1,'account plan not found')]
	final public function
	EntityGet():
	void {
	/*//
	@date 2021-05-01
	//*/

		$Plan = Plan::GetByID($this->Get->ID);

		if(!$Plan)
		$this->Quit(1);

		$this->SetPayload($Plan);
		return;
	}

	final public function
	EntityList():
	void {
	/*//
	@date 2021-05-01
	//*/

		$Plans = Plan::Find([]);

		$this->SetPayload(
			($Plans->Payload)
			->GetData()
		);

		return;
	}

	#[Atlantis\Meta\Parameter('ID','int')]
	#[Atlantis\Meta\Parameter('Title','?string')]
	#[Atlantis\Meta\Parameter('MaxBlogs','?int')]
	#[Atlantis\Meta\Parameter('MaxStorage','?int (bytes)')]
	#[Atlantis\Meta\Parameter('Price','?string (decimal)')]
	#[Atlantis\Meta\Error(1,'account plan not found')]
	final public function
	EntityPatch():
	void {
	/*//
	@date 2021-05-01
	//*/

		$Plan = Plan::GetByID($this->Get->ID);
		$Patch = [];
		$Key = NULL;

		$QuickKeys = [
			'Title',
			'MaxBlogs',
			'MaxStorage',
			'Price'
		];

		////////

		if(!$Plan)
		$this->Quit(1);

		////////

		foreach($QuickKeys as $Key)
		if($this->Post->Exists($Key))
		$Patch[$Key] = $this->Post->{$Key};

		if(!count($Patch))
		$this->Quit(0,'zzz');

		$Plan->Update($Patch);

		////////

		$this->SetPayload($Plan);
		return;
	}

	#[Atlantis\Meta\Parameter('Title','string')]
	#[Atlantis\Meta\Parameter('MaxBlogs','int')]
	#[Atlantis\Meta\Parameter('MaxStorage','int (bytes)')]
	#[Atlantis\Meta\Parameter('Price','string (decimal)')]
	#[Atlantis\Meta\Error(1,'insertion error')]
	final public function
	EntityPost():
	void {
	/*//
	@date 2021-05-01
	//*/

		$Plan = Plan::Insert([
			'Title'      => $this->Post->Title,
			'MaxBlogs'   => $this->Post->MaxBlogs,
			'MaxStorage' => $this->Post->MaxStorage,
			'Price'      => $this->Post->Price
		]);

		if(!$Plan)
		$this->Quit(1);

		$this->SetPayload($Plan);
		return;
	}

}
