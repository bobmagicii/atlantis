<?php

namespace Atlantis\Site\Error;
use \Nether as Nether;

class Inline {

	protected
	String $Class = 'Error';

	public function
	GetClass():
	String {

		return $this->Class;
	}

	public function
	SetClass(String $Class):
	self {

		$this->Class = $Class;
		return $this;
	}

	////////////////
	////////////////

	protected
	$Error = 0;

	public function
	GetError():
	Int {

		return $this->Error;
	}

	public function
	SetError(Int $Error):
	self {

		$this->Error = $Error;
		return $this;
	}

	////////////////
	////////////////

	protected
	$Message = '';

	public function
	GetMessage():
	String {

		return $this->Message;
	}

	public function
	SetMessage(String $Msg):
	self {

		$this->Message = $Msg;
		return $this;
	}

	////////////////
	////////////////

	protected
	$Icon = '';

	public function
	GetIcon():
	String {

		return $this->Icon;
	}

	public function
	SetIcon(String $Icon):
	self {

		$this->Icon = $Icon;
		return $this;
	}

	////////////////
	////////////////

	public function
	__construct($Opt=NULL) {

		$Opt = new Nether\Object\Mapped($Opt,[
			'Class'   => 'Error',
			'Message' => '',
			'Error'   => 0,
			'Icon'    => ''
		]);

		$this->Class = $Opt->Class;
		$this->Error = $Opt->Error;
		$this->Message = $Opt->Message;
		$this->Icon = $Opt->Icon;
		return;
	}

}
