class PluginCodeMirror {
/*//
@date 2020-10-11
provides a custom block plugin for editor.js for writing blocks of code into
a piece of content using codemirror as the code syntax magic thing.
//*/

	constructor(Data,API,Config) {
		this.Data = Data.data;

		// the main structure all the widgets are packed into.

		this.UI = null;

		// code language selector

		this.DropdownLangs = null;
		this.ButtonLangs = null;
		this.MenuLangs = null;

		// syntax theme selecto

		this.DropdownTheme = null;
		this.ButtonThemes = null;
		this.MenuThemes = null;

		// a title field for the block of code

		this.Title = null;

		// the code editor itself

		this.Editor = null;
		this.CodeMirror = null;

		// a hack iframe stuck in to trigger hack onload post-dom insrt.

		this.Loader = null;

		// prepare a list of programming languages defined by codemirror.

		this.Langs = CodeMirror.modeInfo.slice(0);
		this.Langs.sort(function(A,B){
			let AName = A.name.toLowerCase();
			let BName = B.name.toLowerCase();

			return (
				(AName === BName)?
				(0):((AName < BName)?(-1):(1))
			);
		});

		// prepare a list of themes provided by codemirror.

		this.Themes = [
			'ayu-dark', 'bespin', 'material-darker', 'cobalt', 'base16-light',
			'base16-dark', 'solarized', 'isotope', 'mdn-like', 'yeti',
			'ayu-mirage', 'eclipse', 'duotone-light', 'vibrant-ink', 'seti',
			'erlang-dark', 'tomorrow-night-eighties', '3024-day',
			'pastel-on-dark', 'ssms', 'idea', 'zenburn', 'duotone-dark',
			'xq-dark', 'blackboard', 'ambiance-mobile', 'the-matrix',
			'dracula', 'railscasts', 'darcula', 'material-ocean',
			'oceanic-next', 'gruvbox-dark', 'monokai', 'midnight', 'icecoder',
			'ttcn', 'neo', 'abcdef', 'ambiance', 'colorforth', '3024-night',
			'liquibyte', 'nord', 'material-palenight', 'mbo', 'material',
			'elegant', 'xq-light', 'neat', 'shadowfox', 'night', 'lesser-dark',
			'tomorrow-night-bright', 'paraiso-light', 'paraiso-dark',
			'rubyblue', 'hopscotch', 'twilight', 'panda-syntax', 'lucario',
			'moxer', 'yonce',
		];

		this.Themes.sort();
		this.Themes.unshift('synthwave84');
		this.Themes.unshift('default');

		return;
	}

	BuildUI() {
	/*//
	@date 2020-10-11
	construct the ui elements for the main structure.
	//*/

		this.UI = (
			jQuery('<div />')
			.addClass('row tight PostCode')
		);

		return;
	}

	BuildTitle() {
	/*//
	@date 2020-10-11
	construct the ui elements for the title field.
	//*/

		this.Title = (
			jQuery('<input />')
			.attr('type','text')
			.attr('placeholder','Code Block Title...')
			.addClass('form-control')
			.val(this.Data.Title)
		);

		return;
	}

	BuildDropdownLangs() {
	/*//
	@date 2020-10-11
	construct the ui elements for the language switcher.
	//*/

		let that = this;

		this.DropdownLangs = (
			jQuery('<div />')
			.addClass('dropdown')
			.append(
				this.ButtonLangs = jQuery('<button />')
				.addClass('btn btn-dark btn-block dropdown-toggle')
				.attr('type','button')
				.attr('data-toggle','dropdown')
				.attr('data-mime',(this.Data.Mime ?? 'text/x-php'))
				.text('Select Language')
			)
			.append(
				this.MenuLangs = jQuery('<div />')
				.addClass('dropdown-menu')
				.css({
					'max-height': '32vh',
					'overflow-y': 'scroll'
				})
			)
		);

		jQuery.each(this.Langs,function(Key,Val){
			let Mime = Val.mime;

			if(typeof Val.mime === 'undefined' || !Val.mime)
			Mime = Val.mimes[0];

			that.MenuLangs
			.append(
				jQuery('<div />')
				.addClass('dropdown-item')
				.attr('data-mime',Mime)
				.text(Val.name)
				.on('click',function(){
					(that.ButtonLangs)
					.attr('data-mime',jQuery(this).attr('data-mime'))
					.text(jQuery(this).text())
					.trigger('click');

					that.UpdateEditor();
					return false;
				})
			);

			return;
		});

		this.ButtonLangs.dropdown();
		return;
	}

	BuildDropdownThemes() {
	/*//
	@date 2020-10-11
	construct the ui elements for the theme switcher.
	//*/

		let that = this;

		this.DropdownTheme = (
			jQuery('<div />')
			.addClass('dropdown')
			.append(
				this.ButtonThemes = jQuery('<button />')
				.addClass('btn btn-dark btn-block dropdown-toggle')
				.attr('type','button')
				.attr('data-toggle','dropdown')
				.attr('data-theme',(this.Data.Theme ?? 'default'))
				.text('Theme')
			)
			.append(
				this.MenuThemes = jQuery('<div />')
				.addClass('dropdown-menu')
				.css({
					'max-height': '32vh',
					'overflow-y': 'scroll'
				})
			)
		);

		jQuery.each(this.Themes,function(Key,Val){
			that.MenuThemes.append(
				jQuery('<div />')
				.addClass('dropdown-item')
				.attr('data-theme',this)
				.text(this)
				.on('click',function(){
					(that.ButtonThemes)
					.attr('data-theme',jQuery(this).attr('data-theme'))
					.text(jQuery(this).text())
					.trigger('click');

					that.UpdateEditor();
					return false;
				})
			);

			return;
		});

		this.ButtonThemes.dropdown();
		return;
	}

	BuildEditor() {
	/*//
	@date 2020-10-11
	construct the widgets to hold the code editor.
	//*/

		let that = this;

		this.Editor = (
			jQuery('<div />')
			.addClass('CodeViewer')
			.on('keydown',function(Ev){
				// prevent editor.js from catching keystrokes while we are
				// trying to make proegrimmer codez.
				Ev.stopPropagation();
				return;
			})
			.append(
				// editor.js's "rendered" function still gets called too fast
				// and codemirror has some issues if it isn't already in the
				// dom. this is a hack to trigger an onload event to boot the
				// editor up after installing it into the dom.
				this.Loader = jQuery('<iframe />')
				.addClass('d-none')
				.on('load',function(){ that.InitializeEditor(); return; })
			)
		);

		return;
	}

	InitializeEditor() {
	/*//
	@date 2020-10-11
	boot codemirror and set the initial ui state after installing into the dom.
	//*/

		let Mime = this.ButtonLangs.attr('data-mime');
		let Theme = this.ButtonThemes.attr('data-theme');

		this.CodeMirror = CodeMirror(this.Editor[0],{
			'value': (this.Data.Text ?? ''),
			'theme': (this.Data.Theme ?? 'default'),
			'lineNumbers': true,
			'indentWithTabs': true,
			'readOnly': false,
			'indentUnit': 4,
			'tabSize': 4
		});

		this.ButtonLangs.text(
			this.MenuLangs.find(`.dropdown-item[data-mime="${Mime}"]:first`)
			.text()
		);

		this.ButtonThemes.text(
			this.MenuThemes.find(`.dropdown-item[data-theme="${Theme}"]:first`)
			.text()
		);

		this.UpdateEditor();
		return;
	}

	UpdateEditor() {
	/*//
	@date 2020-10-11
	kick codemirror to update on a settings change.
	//*/

		let Mime = this.ButtonLangs.attr('data-mime');
		let Theme = this.ButtonThemes.attr('data-theme');
		let Mode = CodeMirror.findModeByMIME(Mime);

		CodeMirror.autoLoadMode(this.CodeMirror,Mode.mode);
		this.CodeMirror.setOption('mode',Mime);
		this.CodeMirror.setOption('theme',Theme);

		return;
	}

	render() {
	/*//
	@date 2020-10-11
	assemble the final ui from all all the components.
	//*/

		this.BuildUI();
		this.BuildDropdownLangs();
		this.BuildDropdownThemes();
		this.BuildTitle();
		this.BuildEditor();

		this.UI
		.append(
			jQuery('<div />')
			.addClass('col-12 col-md-auto mb-2')
			.append(this.DropdownLangs)
		)
		.append(
			jQuery('<div />')
			.addClass('col-12 col-md-auto mb-2')
			.append(this.DropdownTheme)
		)
		.append(
			jQuery('<div />')
			.addClass('col-12 col-md mb-2')
			.append(this.Title)
		)
		.append(
			jQuery('<div />')
			.addClass('col-12')
			.append(this.Editor)
		)

		return this.UI[0];
	}

	save(Content) {
	/*//
	@date 2020-10-11
	fetch the data from the ui on save.
	//*/

		return {
			'Title': jQuery.trim(this.Title.val()),
			'Mime': this.ButtonLangs.attr('data-mime'),
			'Theme': this.ButtonThemes.attr('data-theme'),
			'Text': this.CodeMirror.getValue()
		};
	}

	static get sanitize () {
		return {
			'Title': false,
			'Mime': false,
			'Theme': false,
			'Text': true
		}
	}

	static get enableLineBreaks() {
		return true;
	}

	static get toolbox() {
		return {
			title: 'Code Block',
			icon: '<i class="fas fa-fw fa-code"></i>'
		};
	}

}

export default PluginCodeMirror;
