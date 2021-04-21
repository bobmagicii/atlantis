//if(typeof Atlantis.EditorJS === 'undefined')
//Atlantis.EditorJS = { Editor: null, Plugins: { } };

import PluginCodeMirror from '/share/atlantis/editorjs/plugin-code-mirror.js';
import PluginImage from '/share/atlantis/editorjs/plugin-image.js';
import PluginHR from '/share/atlantis/editorjs/plugin-hr.js';
import PluginTT from '/share/atlantis/editorjs/plugin-tt.js';

let Plugins = {
	'header': EJSHeader,
	'blockquote': EJSQuote,
	'code-mirror': PluginCodeMirror,
	'image': PluginImage,
	'hr': PluginHR,
	'tt': PluginTT
};

class Editor {

	constructor(Opt) {
	/*//
	@date 2021-04-21
	//*/

		this.Init(Opt);
		this.PrepareReferences();

		if(typeof this.Config.Selector !== 'string') {
			console.log('No valid Selector selector.');
			return;
		}

		return;
	};

	Init(Opt) {
	/*//
	@date 2021-04-21
	//*/

		this.Container = null;
		this.Element = null;
		this.Instance = null;
		this.Config = {
			'Selector': null,
			'Data': null
		};

		NUI.Util.MergeProperties(Opt,this.Config);

		return;
	};

	PrepareReferences() {
	/*//
	@date 2021-04-21
	//*/


		(async ()=> {
			/* i noticed that when the container of the element is hidden by any means
			while the editor is constructed, the buttons that it normally puts outside
			margins ends up inside the margins. the solution seemed to be make the element
			zero tall and hiding its overflow, then allowing it to expand again when it
			becomes ready */


			this.Container = jQuery(this.Config.Selector);
			this.Element = this.Container.find('.Editor');
			this.Instance = new EditorJS({
				'holder': this.Element[0],
				'placeholder': 'Hello World...',
				'data': this.Config.Data,
				'tools': Plugins
			});

			try {
				await this.Instance.isReady;
				this.Container.find('.Throbber').hide();
				this.Element.addClass('Ready');
			}

			catch(ErrMsg) { console.log(`Editor.js Error: ${ErrMsg}`); }

			return;
		})();

		return;
	};

	async GetContent() {
	/*//
	@date 2021-04-21
	//*/

		let Result = null;

		try { Result = await this.Instance.save(); }
		catch(ErrMsg) { console.log(`EditorJS Error: ${ErrMsg}`); }

		return Result;
	};

};

export default Editor;
