import ElementBase from '/share/atlantis/element/base.js';

class Row
extends ElementBase {

	OnConstruct() {

		this.Items = new Array;

		return this;
	}

	Append(Item) {
		this.Items.push(Item);
		return this;
	}

	Prepend(Item) {
		this.Items.unshift(Item);
		return this;
	}

	Compile() {

		let Output = (
			jQuery('<div />')
			.addClass('row')
		);

		jQuery(this.ClassList)
		.each(function(){
			Output.addClass(this);
			return;
		});

		jQuery(this.Items)
		.each(function(){
			if(this instanceof ElementBase) {
				Output.append(this.Get());
				return;
			}

			Output.append(this);
			return;
		});

		return Output;
	};

};

export default Row;