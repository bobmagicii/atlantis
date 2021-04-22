import ElementBase from '/share/atlantis/element/base.js';

class RowItem extends ElementBase {

	OnConstruct() {
		this.Contents = null;

		return this;
	}

	Set(Item) {
		this.Contents = Item;
		return this;
	}

	Compile() {

		let Output = jQuery('<div />');

		if(!this.ClassList || this.ClassList.length === 0)
		this.ClassList = ['col'];

		jQuery(this.ClassList)
		.each(function(){
			Output.addClass(this);
			return;
		});

		if(this.Contents instanceof ElementBase)
		Output.append(this.Contents.Get());
		else
		Output.append(this.Contents);

		return Output;
	}

};

export default RowItem;
