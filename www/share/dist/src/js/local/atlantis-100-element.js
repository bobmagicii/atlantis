'use strict';

if(typeof Atlantis.Element === 'undefined')
Atlantis.Element = { };

Atlantis.Element.Base = class {

	constructor(ClassList) {
	/*//
	@date 2020-10-21
	//*/

		this.ClassList = null;

		if(ClassList instanceof Array)
		this.ClassList = ClassList;

		this.OnConstruct();
		return;
	}

	OnConstruct() {
	/*//
	@date 2020-10-21
	@return self
	//*/

		return this;
	}

	Compile() {
	/*//
	@date 2020-10-21
	@return jQuery
	this method should be overloaded to construct your structure.
	//*/

		return null;
	}

	Get() {
	/*//
	@date 2020-10-21
	@return jQuery
	//*/

		return this.Compile();
	}

};