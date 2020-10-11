'use strict';

Atlantis.EditorJS.Plugins.CodeMirror = class {

	constructor(Data,API,Config) {
		this.Data = Data.data;

		this.UI = null;
		this.DropdownLang = null;
		this.DropdownTheme = null;
		this.Button = null;
		this.ButtonThemes = null;
		this.Menu = null;
		this.MenuThemes = null;
		this.Editor = null;
		this.CodeMirror = null;
		this.Loader = null;
		this.Title = null;

		this.Langs = CodeMirror.modeInfo.slice(0);
		this.Theme = this.Data.Theme ?? 'default';
		this.Mime = this.Data.Mime ?? 'text/x-php';
		this.Text = this.Data.Text ?? this.Data.Text;

		this.Langs.sort(function(A,B){
			let AName = A.name.toLowerCase();
			let BName = B.name.toLowerCase();

			return (
				(AName === BName)?
				(0):((AName < BName)?(-1):(1))
			);
		});

		return;
	}

	BuildUI() {
		let that = this;

		this.UI = (
			jQuery('<div />')
			.addClass('row tight')
		);

		return;
	}

	BuildTitle() {

		this.Title = (
			jQuery('<input />')
			.attr('type','text')
			.attr('placeholder','Code Block Title...')
			.addClass('form-control')
			.val(this.Data.Title)
		);

		return;
	}

	BuildDropdownLang() {
		let that = this;

		this.DropdownLang = (
			jQuery('<div />')
			.addClass('dropdown')
			.append(
				this.Button = jQuery('<button />')
				.addClass('btn btn-dark btn-block dropdown-toggle')
				.attr('type','button')
				.attr('data-toggle','dropdown')
				.text('Select Language')
			)
			.append(
				this.Menu = jQuery('<div />')
				.addClass('dropdown-menu')
				.css({
					'max-height': '32vh',
					'overflow-y': 'scroll'
				})
			)
		);

		jQuery.each(this.Langs,function(Key,Val){
			let Mime = Val.mime;

			if(typeof Val.mime === 'undefined')
			Mime = Val.mimes[0];

			that.Menu.append(
				jQuery('<div />')
				.addClass('dropdown-item')
				.attr('data-mime',Mime)
				.text(Val.name)
				.on('click',function(){
					that.Mime = jQuery(this).attr('data-mime');
					that.UpdateEditor();
					that.Button.trigger('click');
					return false;
				})
			);

			return;
		});

		this.Button.dropdown();
		return;
	}

	BuildDropdownTheme() {
		let that = this;

		let Themes = [
			'ayu-dark',
			'bespin',
			'material-darker',
			'cobalt',
			'base16-light',
			'base16-dark',
			'solarized',
			'isotope',
			'mdn-like',
			'yeti',
			'ayu-mirage',
			'eclipse',
			'duotone-light',
			'vibrant-ink',
			'seti',
			'erlang-dark',
			'tomorrow-night-eighties',
			'3024-day',
			'pastel-on-dark',
			'ssms',
			'idea',
			'zenburn',
			'duotone-dark',
			'xq-dark',
			'blackboard',
			'ambiance-mobile',
			'the-matrix',
			'dracula',
			'railscasts',
			'darcula',
			'material-ocean',
			'oceanic-next',
			'gruvbox-dark',
			'monokai',
			'midnight',
			'icecoder',
			'ttcn',
			'neo',
			'abcdef',
			'ambiance',
			'colorforth',
			'3024-night',
			'liquibyte',
			'nord',
			'material-palenight',
			'mbo',
			'material',
			'elegant',
			'xq-light',
			'neat',
			'shadowfox',
			'night',
			'lesser-dark',
			'tomorrow-night-bright',
			'paraiso-light',
			'paraiso-dark',
			'rubyblue',
			'hopscotch',
			'twilight',
			'panda-syntax',
			'lucario',
			'moxer',
			'yonce',
		];

		Themes.sort();
		Themes.unshift('synthwave84');
		Themes.unshift('default');

		this.DropdownTheme = (
			jQuery('<div />')
			.addClass('dropdown')
			.append(
				this.ButtonThemes = jQuery('<button />')
				.addClass('btn btn-dark btn-block dropdown-toggle')
				.attr('type','button')
				.attr('data-toggle','dropdown')
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

		jQuery.each(Themes,function(Key,Val){
			that.MenuThemes.append(
				jQuery('<div />')
				.addClass('dropdown-item')
				.attr('data-theme',this)
				.text(this)
				.on('click',function(){
					that.Theme = jQuery(this).attr('data-theme');
					that.UpdateEditor();
					that.ButtonThemes.trigger('click');
					return false;
				})
			);

			return;
		});

		this.ButtonThemes.dropdown();
		return;
	}

	BuildEditor() {
		let that = this;

		this.Editor = (
			jQuery('<div />')
			.addClass('CodeViewer')
			.on('keydown',function(Ev){
				// prevent editor.js from seeing us doing the things
				// we do in this thing.
				Ev.stopPropagation();
				return;
			})
			.append(
				this.Loader = jQuery('<iframe />')
				.addClass('d-none')
				.on('load',function(){ that.InitializeEditor(); return; })
			)
		);

		return;
	}

	InitializeEditor() {

		this.CodeMirror = CodeMirror(this.Editor[0],{
			'value': this.Text,
			'lineNumbers': true,
			'indentWithTabs': true,
			'readOnly': false,
			'indentUnit': 4,
			'tabSize': 4,
			'theme': 'default'
		});

		this.UpdateEditor();

		return;
	}

	UpdateEditor() {

		let Mode = CodeMirror.findModeByMIME(this.Mime);

		(this.CodeMirror)
		.setOption('mode',Mode.mime);

		(this.CodeMirror)
		.setOption('theme',this.Theme);

		CodeMirror.autoLoadMode(
			this.CodeMirror,
			Mode.mode
		);

		console.log(Mode);

		this.Button.text(
			this.Menu.find('.dropdown-item[data-mime="' + this.Mime + '"]:first')
			.text()
		);

		this.ButtonThemes.text(
			this.MenuThemes.find('.dropdown-item[data-theme="' + this.Theme + '"]:first')
			.text()
		);

		return;
	}

	render() {
		let that = this;

		this.BuildUI();
		this.BuildDropdownLang();
		this.BuildDropdownTheme();
		this.BuildTitle();
		this.BuildEditor();

		this.UI
		.append(
			jQuery('<div />')
			.addClass('col-12 col-md-auto mb-2')
			.append(this.DropdownLang)
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

		return {
			'Title': jQuery.trim(this.Title.val()),
			'Mime': this.Mime,
			'Theme': this.Theme,
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

