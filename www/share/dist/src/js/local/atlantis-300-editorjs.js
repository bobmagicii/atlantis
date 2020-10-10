'use strict';

if(typeof Atlantis.Editor === 'undefined')
Atlantis.EditorJS = { Editor: null, Plugins: { } };

Atlantis.EditorJS.Editor = function(Opt) {
	let that = this;

	this.Container = null;
	this.Element = null;
	this.Instance = null;

	let Config = {
		'Selector': null,
		'Data': null
	};

	NUI.Util.MergeProperties(Opt,Config);

	if(typeof Config.Selector !== 'string') {
		console.log('No valid Selector selector.');
		return;
	}

	////////

	this.GetContent = async function(){

		let Result = null;

		try { Result = await that.Instance.save(); }
		catch(ErrMsg) { console.log(`EditorJS Error: ${ErrMsg}`); }

		return Result;
	};

	////////

	(async function(){
		/* i noticed that when the container of the element is hidden by any means
		while the editor is constructed, the buttons that it normally puts outside
		margins ends up inside the margins. the solution seemed to be make the element
		zero tall and hiding its overflow, then allowing it to expand again when it
		becomes ready */


		that.Container = jQuery(Config.Selector);
		that.Element = that.Container.find('.Editor');
		that.Instance = new EditorJS({
			'holder': that.Element[0],
			'placeholder': 'Hello World...',
			'data': Config.Data,
			'tools': {
				'header': EJSHeader,
				'blockquote': EJSQuote,
				'code-mirror': Atlantis.EditorJS.Plugins.CodeMirror
			}
		});

		try {
			await that.Instance.isReady;
			that.Container.find('.Throbber').hide();
			that.Element.addClass('Ready');
		}

		catch(ErrMsg) { console.log(`Editor.js Error: ${ErrMsg}`); }

		return;
	})();

	return this;
}