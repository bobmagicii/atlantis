import Overlay from '/share/nui/element/overlay.js';
import Dialog from '/share/nui/element/dialog.js';
import Button from '/share/nui/element/button.js';
import Util from '/share/nui/core/util.js';

class DialogConfirm
extends Overlay {

	constructor(Title,Content,ButtonPacking,OnAccept) {
	/*//
	@date 2021-04-17
	//*/
		super({ 'Class':'opacity-0 opacity-anim' });
		this.Dialog = null;

		this.Dialog = (
			new Dialog({
				'Container': this.Container,
				'Title': Title,
				'Movable': false,
				'Content': Content,
				'ButtonPacking': (ButtonPacking ?? 'Fill'),
				'Buttons': [
					new Button({ 'Text':'Yes', 'Class':'NUI-Action-Accept' }),
					new Button({ 'Text':'No', 'Class':'NUI-Action-Cancel' })
				]
			})
			.Register('Cancel','Init.OnCmdPostDelete',this.OnCancel.bind(this))
			.Register('Accept','Init.OnCmdPostDelete',this.OnAccept.bind(this,OnAccept))
		);

		this.Container
		.toggleClass('opacity-100 opacity-0');

		Util.CenterInParent(this.Dialog.Container);
		return;
	};

	OnCancel() {
	/*//
	@date 2021-04-17
	//*/

		this.Container
		.toggleClass('opacity-100 opacity-0');

		setTimeout((()=> this.Destroy()),250);

		return;
	};

	OnAccept(OnAccept) {
	/*//
	@date 2021-04-17
	//*/

		this.Container
		.find('.NUI-Element-Button')
		.prop('disabled','disabled');

		OnAccept(this);
		return;
	};

};

export default DialogConfirm;
