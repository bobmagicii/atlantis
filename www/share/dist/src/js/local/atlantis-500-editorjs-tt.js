'use strict';

Atlantis.EditorJS.Plugins.Teletype = class {
/*//
@date 2020-10-11
provide a custom tt inline formatting. it actually uses the samp
tag to do it not tt.
//*/

	static get isInline() {
		return true;
	}

	constructor({api}) {
		this.API = api;

		this.State = false;
		return;
	}

	render() {

		let Element = (
			jQuery('<button />')
			.addClass(this.API.styles.inlineToolButton)
			.append(
				jQuery('<span />')
				.addClass('fas fa-fw fa-text-width')
			)
		);

		return Element[0];
	}

	surround(Range) {

		if(this.State) {
			this.Unwrap(Range);
			return;
		}

		this.Wrap(Range);
		return;
	}

	checkState() {

		let Mark = this.API.selection.findParentTag('SAMP');
		this.State = !!Mark;

		return;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	Wrap(Range) {

		let Text = Range.extractContents();
		let Mark = jQuery('<samp />').append(Text);

		Range.insertNode(Mark[0]);
		this.API.selection.expandToTag(Mark[0]);
		return;
	}

	Unwrap(Range) {

		let Text = null;
		let Mark = null;

		Mark = this.API.selection.findParentTag('SAMP');
		Range.selectNodeContents(Mark);

		Text = Range.extractContents();
		Mark.remove();

		Range.insertNode(Text);
		return;
	}

	UnwrapOG(Range) {
	/*//
	@date 2020-10-12
	this version of the thing does a complete removal of the tag
	even if the range you selected was smaller than the full width
	of the tag. it works well and fine, but it doens't do the cutting
	behaviour like the packaged bold/italic tools do.
	//*/

		let Text = null;
		let Mark = null;

		Mark = this.API.selection.findParentTag('SAMP');
		Range.selectNodeContents(Mark);

		Text = Range.extractContents();
		Mark.remove();

		Range.insertNode(Text);
		return;
	}



}

