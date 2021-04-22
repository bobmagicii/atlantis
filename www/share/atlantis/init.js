import CheckboxButton from '/share/atlantis/element/checkbox-button.js';
import DialogConfirm from '/share/atlantis/element/dialog-confirm.js';
import PostAPI from '/share/atlantis/api/post.js';
import Util from '/share/atlantis/util.js';

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

	jQuery('.AtlantisCheckboxButton')
	.each(function(){ new CheckboxButton(this); return; });

	jQuery('.CopyElementToClipboard')
	.on('click',Util.CopyElementToClipboard);

	jQuery('.CopyValueToClipboard')
	.on('click',Util.CopyValueToClipboard);

	jQuery('.HasTooltip, .AtlantisTooltip')
	.each(function(){

		let Opts = {
			'container': 'body'
		};

		jQuery(this)
		.tooltip(Opts);

		return;
	});

	// notes about codemirror:
	// lib/codemirror.[js|css] was copied into share/dist/src/libs
	// addon/mode/loadmode.js was copied into share/dist/src/libs
	// mode/meta.js was copied into share/dist/src/libs
	// mode subfolders were copied to share/dist/src/codemirror-modes

	CodeMirror.modeURL = "/share/js/codemirror-modes/%N/%N.js";

	jQuery('.CodeViewer')
	.each(function(){

		let Element = jQuery(this);
		let Mime = Element.attr('data-mime') ?? 'text/plain';
		let Title = Element.attr('data-title') ?? '';
		let Theme = Element.attr('data-theme') ?? 'default';
		let LangData = CodeMirror.findModeByMIME(Mime);
		let Editor = null;
		let Container = null;

		Container = Util.ZenCode(
			'div.CodeViewer.WithLabel>'+
			'div.Label>'+
			'(div.row.tight>('+
				'(div.col-auto>i.fas.fa-fw.fa-code.mr-2)+'+
				'(div.col{!Title!})+'+
				'(div.col-auto{!Lang!})'+
			'))',
			{ 'Title': Title, 'Lang': LangData.name }
		);

		Element.after(Container);
		Element.hide();

		Editor = CodeMirror(Container.get(0),{
			'value': jQuery.trim(Element.text()),
			'lineNumbers': true,
			'indentWithTabs': true,
			'readOnly': true,
			'indentUnit': 4,
			'tabSize': 4
		});

		if(LangData && LangData.mode)
		CodeMirror.autoLoadMode(Editor,LangData.mode);

		if(LangData && LangData.mime)
		Editor.setOption('mode',LangData.mime);

		if(Theme)
		Editor.setOption('theme',Theme);

		return;
	});

	return;
});

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export default null;
