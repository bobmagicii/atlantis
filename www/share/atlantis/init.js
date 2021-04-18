import PostAPI from '/share/atlantis/api/post.js';
import DialogConfirm from '/share/atlantis/element/dialog-confirm.js';

jQuery(document)
.ready(function(){

	let Handlers = new class {

		OnCmdPostDelete(Ev){ return new DialogConfirm(
			'DELETE BLOG POST',
			`<div class="p-4">Really delete post ${Ev.currentTarget.dataset.id}? This cannot be undone.</div>`,
			'FillPreferLast',
			((Dialog)=> { PostAPI.Delete(
				Ev.currentTarget.dataset.id,
				((Result)=> location.href=Result.Location)
			)})
		); };

	};

	jQuery('.AtlantisCmdPostDelete')
	.on('click',Handlers.OnCmdPostDelete);

	return;
});

export default null;
