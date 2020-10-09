"use strict";
var Atlantis = {};

Atlantis.CopyToClipboard = function(What) {
/*//
copy the specified text to the clipboard. the source element will have its content
modified for a few seconds to visually demonstrate something has happened. generally
we are expecting things calling this to be buttons.
//*/

	let that = this;
	let Textbox;
	let OgText;

	// create a textbox that contains the content we want and add it to the dom.
	// we couldn't display none it or else the selection would not work. we can
	// however set it to 0x0.

	jQuery(that).append(
		Textbox = jQuery('<textarea />')
		.css({'width':'0px','height':'0px','border':'0px;'})
		.val(What)
	);

	Textbox.select();
	document.execCommand('copy');
	Textbox.remove();

	// make the button we clicked react to the click visually.

	OgText = jQuery(that).text();
	jQuery(that).text('Copied!');
	setTimeout(function(){ jQuery(that).text(OgText); },1000);

	return false;
};

Atlantis.CopyElementToClipboard = function() {
/*//
copy an element's text to the clipboard. the element that triggered this should have
an attribute called data-copy-element that contains a selector to identify where to
pull text data from.
//*/

	let ElementID = jQuery(this).attr('data-copy-element');
	let Value = jQuery.trim(
		jQuery(ElementID).text()
	);

	(Atlantis.CopyToClipboard)
	.call(this,Value);

	return false;
};

Atlantis.CopyValueToClipboard = function() {
/*//
copy an element's value to the clipboard. the element that triggered this should have
an attribute called data-copy-value that contains the content that you want copied.
//*/

	e.preventDefault();

	let Value = jQuery.trim(
		jQuery(this).attr('data-copy-value')
	);

	(Atlantis.CopyToClipboard)
	.call(this,Value);

	return false;
};

jQuery(document)
.ready(function(){

	// notes about codemirror:
	// lib/codemirror.[js|css] was copied into share/dist/src/libs
	// addon/mode/loadmode.js was copied into share/dist/src/libs
	// mode/meta.js was copied into share/dist/src/libs
	// mode subfolders were copied to share/dist/src/codemirror-modes

	CodeMirror.modeURL = "/share/dist/src/codemirror-modes/%N/%N.js";

	jQuery('.CopyElementToClipboard')
	.on('click',Atlantis.CopyElementToClipboard);

	jQuery('.CopyValueToClipboard')
	.on('click',Atlantis.CopyValueToClipboard);

	jQuery('.HasTooltip')
	.each(function(){
		let that = jQuery(this);

		let Opts = {};

		that.tooltip(Opts);
		return;
	});

	jQuery('.btn-toggle')
	.on('click',function(){
		// not using the bootstrap data-toggle=button because it fights with
		// your on-ready things and also just kinda seemed to suck.

		if(jQuery(this).hasClass('disabled'))
		return;

		jQuery(this).toggleClass('active');
		return;
	});

	jQuery('.CodeViewer')
	.each(function(){

		let Element = jQuery(this);

		if(Element.parents('.EditorContainer').length > 0)
		return;

		let Editor = null;
		let Container = null;
		let Lang = Element.attr('data-lang') ?? 'txt';
		let LangData = CodeMirror.findModeByExtension(Lang);
		let Theme = Element.attr('data-theme');

		Element.after(
			Container = jQuery('<div />').addClass('CodeViewer')
		);

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
