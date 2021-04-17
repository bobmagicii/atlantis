import Util from '/share/atlantis/util.js';
import PostAPI from '/share/atlantis/api/post.js';
import Dialog from '/share/nui/element/window.js';
import Button from '/share/nui/element/button.js';

jQuery(document)
.ready(function(){

	let Handlers = new class {

		OnCmdPostDelete(){
			new Dialog({
				'Title': 'Confirm Action: DELETE',
				'Content': `Really delete post ${this.dataset.id}? This cannot be undone.`,
				'Buttons': [
					new Button({ 'Text':'Yes', 'Class':'NUI-Dialog-Accept' }),
					new Button({ 'Text':'No', 'Class':'NUI-Dialog-Cancel' })
				]
			});
			return;
		};

	};

	jQuery('.AtlantisCmdPostDelete')
	.on('click',Handlers.OnCmdPostDelete);

	return;
});
