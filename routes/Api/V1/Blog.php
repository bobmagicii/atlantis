<?php

namespace Routes\Api\V1;

use \Atlantis as Atlantis;

class Blog
extends Atlantis\Site\ProtectedAPI {

	/**
	 * @input ?Int ID
	 * @input ?String Alias
	 */

	final public function
	EntityGet():
	Void {

		$Blog = NULL;

		if($this->Get->ID)
		$Blog = Atlantis\Prototype\Blog::GetByID((Int)$this->Get->ID);

		elseif($this->Get->Alias)
		$Blog = Atlantis\Prototype\Blog::GetByAlias($this->Get->Alias);

		if(!$Blog)
		$this->Quit(1,'not found');

		$this
		->SetPayload($Blog);

		return;
	}

	/**
	 * @input String Title
	 * @input ?String Alias
	 */

	final public function
	EntityPost():
	Void {

		return;
	}

	/**
	 * @input Int ID
	 * @input ?String Title
	 * @input ?String Alias
	 * @input ?File ImageHeader
	 * @input ?File ImageIcon
	 */

	final public function
	EntityPatch():
	Void {

		return;
	}

	/**
	 * @input Int ID
	 */

	final public function
	EntityDelete():
	Void {

		return;
	}

}
