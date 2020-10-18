'use strict';

Atlantis.Element.ImageGallery = class {

	constructor(Opt) {

		this.Container = null;
		this.Items = null;

		NUI.Util.MergeProperties(Opt,this);

		if(this.Container instanceof HTMLElement)
		this.Container = jQuery(this);

		if(typeof this.Container === 'string')
		this.Container = jQuery(this);

		if(!(this.Container instanceof jQuery))
		throw "Container is not a valid object.";

		return;
	}

};
