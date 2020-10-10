'use strict';

Atlantis.EditorJS.Plugins.CodeMirror = class {

	constructor(Data,API,Config) {
		this.UI = null;
		this.Dropdown = null;
		this.Button = null;
		this.Menu = null;
		this.Editor = null;
		this.CodeMirror = null;
		this.Langs = CodeMirror.modeInfo.slice(0);
		this.Loader = null;
		this.Mime = Data.data.Mime ? Data.data.Mime : 'text/x-php';
		this.Text = Data.data.Text ? Data.data.Text : '';

		console.log(Data);

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
			.addClass('row')
		);

		return;
	}

	BuildDropdown() {
		let that = this;

		this.Dropdown = (
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
		.setOption("mode",Mode.mime);

		CodeMirror.autoLoadMode(
			this.CodeMirror,
			Mode.mode
		);

		console.log(Mode);

		this.Button.text(
			this.Menu.find('.dropdown-item[data-mime="' + this.Mime + '"]:first')
			.text()
		);

		return;
	}

	render() {
		let that = this;

		this.BuildUI();
		this.BuildDropdown();
		this.BuildEditor();

		this.UI
		.append(
			jQuery('<div />')
			.addClass('col-12 col-md-auto mb-2')
			.append(this.Dropdown)
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
			Mime: this.Mime,
			Text: this.CodeMirror.getValue()
		};
	}

	static get sanitize () {
		return {
			Mime: false,
			Text: true
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

