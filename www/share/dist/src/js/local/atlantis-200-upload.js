'use strict';

let AtlantisUpload = {

	'FileTypeAny': 0,
	'FileTypeImage': 1,

	'Button': function(Opt) {
		let that = this;

		let Config = {
			'SelectorButton': null,
			'SelectorInput': null,
			'SelectorUpload': null,
			'FileType': AtlantisUpload.Any,
			'AutoUpload': true,
			'Method': 'POST',
			'URL': null,
			'Data': null,
			'OnItemComplete': function(Status,Result,File){
				if(Result.Error !== 0)
				alert(Result.Message);

				return;
			},
			'OnQueueComplete': function(Result){
				location.reload(true);
				return;
			}
		};

		let OnButtonClick;
		let OnSelectFiles;
		let OnFileTypeError;
		let OnQueueNext;
		let UploadFile;

		let Queue = new Array;

		////////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////

		NUI.Util.MergeProperties(Opt,Config);
		this.Button = jQuery(Config.SelectorButton);
		this.Input = jQuery(Config.SelectorInput);

		OnButtonClick = function(){
			that.Input.trigger('click');
			return false;
		};

		OnSelectFiles = function(){

			jQuery(this.files)
			.each(function(){
				console.log('Upload Icon: ' + this.name + ' ' + this.type);

				if(Config.FileType === AtlantisUpload.FileTypeImage) {
					if(!this.type.match(/^image\//)) {
						OnFileTypeError(this);
						return false;
					}
				}

				Queue.push(this);
				return;
			});

			if(Config.AutoUpload)
			OnQueueNext();

			return;
		};

		OnFileTypeError = function(File){

			let Overlay;
			let Dialog;

			Overlay = new NUI.Overlay({
				'Content': (
					Dialog = new NUI.Dialog({
						'Title': 'Invalid File Type',
						'Buttons': [
							new NUI.Button({ 'Label':'OK', 'Class':'NUI-Dialog-Cancel btn btn-dark' })
						],
						'Content': File.name,
						'OnCancel': function(){ Overlay.Destroy(); return; }
					})
				)
			});

			return;
		};

		OnQueueNext = function(){

			let Next = Queue.shift();

			if(typeof Next === 'object') {
				UploadFile(Next);
				return;
			}

			if(typeof Config.OnQueueComplete === 'function')
			(Config.OnQueueComplete)();

			return;
		};

		UploadFile = function(File) {

			let Uploader = new FormData;
			let Xfer = new XMLHttpRequest();
			let Prop = null;

			(that.Button.find('.StatusThinking'))
			.removeClass('font-size-zero');

			(Xfer.upload)
			.addEventListener(
				'progress',
				function(Ev){
					let Per = 0;

					if(Ev.lengthComputable) {
						Per = Math.round((Ev.loaded * 100) / Ev.total);
						(that.Button.find('.UploadButtonBar'))
						.css('width',(Per + '%'));
					}

					return;
				},
				false
			);

			(Xfer)
			.addEventListener(
				'load',
				function(Ev) {

					if(typeof Config.OnItemComplete === 'function')
					(Config.OnItemComplete)(
						Xfer.status,
						Xfer.response,
						File
					);

					OnQueueNext();
					return;
				}
			);

			if(typeof Config.Data === 'object')
			for(Prop in Config.Data)
			Uploader.append(Prop,Config.Data[Prop]);

			Uploader.append('Filedata',File);
			Xfer.responseType = 'json';
			Xfer.open(Config.Method,Config.URL);
			Xfer.send(Uploader);

			return;
		};

		(this.Button)
		.css('position','relative')
		.append(
			jQuery('<i />')
			.addClass('Status StatusThinking fas fa-cog fa-spin font-size-anim font-size-normal font-size-zero ml-2')
		)
		.append(
			jQuery('<div />')
			.addClass('UploadButtonBar')
			.css({
				'position': 'absolute',
				'top': '0px',
				'left': '0px',
				'width': '0%',
				'height': '100%',
				'background-color': '#cccc'
			})
		)
		.on('click',OnButtonClick);

		(this.Input)
		.on('change',OnSelectFiles);

		return this;
	}

};

