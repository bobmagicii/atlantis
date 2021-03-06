<?php

namespace Atlantis;
use \Atlantis as Atlantis;
use \Nether   as Nether;

class Element {

	protected
	$Area = NULL;

	protected
	$Surface = NULL;

	use
	Atlantis\Properties\ClassListStore,
	Atlantis\Properties\FeedURL;

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	public function
	__Construct() {

		$this->Surface = Nether\Stash::Get('Surface');

		// give widgets an ability to do something right after
		// they are initialized. all arguments passed to the
		// constructor are passed to the event method.
		$this->OnConstruct(...func_get_args());

		return;
	}

	public function
	__ToString():
	String {

		return $this->Render();
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	public function
	Render():
	String {

		// give widgets an ability to do something right before
		// they render, and optionally refuse rendering if they
		// feel there is nothing to contribute.
		if($this->OnRender() === FALSE)
		return '';

		if(!$this->Area)
		return '';

		Nether\Ki::Queue(
			'surface-render-scope',
			function(Array &$Scope):
			Void { $Scope['Element'] = $this; return; },
			FALSE
		);

		return $this->Surface->GetArea($this->Area);
	}

	public function
	SetArea(String $Area) {

		$this->Area = $Area;
		return $this;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	protected function
	OnConstruct():
	Void {

		return;
	}

	protected function
	OnRender():
	?Bool {

		return NULL;
	}

}
