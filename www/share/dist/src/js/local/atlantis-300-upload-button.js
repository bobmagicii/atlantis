'use strict';

Atlantis.Upload.Button = function(Opt) {
	let that = this;

	let Config = {
		'SelectorButton': null,
		'SelectorInput': null,
		'SelectorUpload': null,
		'FileType': Atlantis.Upload.FileTypeAny,
		'AutoUpload': true,
		'Method': 'POST',
		'URL': null,
		'Data': null,
		'OnItemComplete': function(that,Status,Result,File){
			if(Result.Error !== 0)
			alert(Result.Message);

			return;
		},
		'OnQueueComplete': function(that){
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

	if(typeof Config.SelectorButton === 'object')
	this.Button = Config.SelectorButton;
	else
	this.Button = jQuery(Config.SelectorButton);

	if(typeof Config.SelectorInput === 'object')
	this.Input = Config.SelectorInput;
	else
	this.Input = jQuery(Config.SelectorInput);

	this.Reset = function(){

		(that.Button.find('.StatusThinking'))
		.addClass('font-size-zero')
		.removeClass('ml-2');

		(that.Button.find('.UploadButtonBar'))
		.css('width','0%');

		return;
	};

	OnButtonClick = function(){
		console.log('UploadButton Click');
		that.Input.trigger('click');
		return false;
	};

	OnSelectFiles = function(){

		jQuery(this.files)
		.each(function(){
			console.log('Upload Icon: ' + this.name + ' ' + this.type);

			if(Config.FileType === Atlantis.Upload.FileTypeImage) {
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
		(Config.OnQueueComplete)(that);

		return;
	};

	UploadFile = function(File) {

		let Uploader = new FormData;
		let Xfer = new XMLHttpRequest();
		let Prop = null;

		(that.Button.find('.StatusThinking'))
		.removeClass('font-size-zero')
		.addClass('ml-2');

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
					that,
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
		jQuery('<span />')
		.addClass('Status StatusThinking fas fa-cog fa-spin font-size-anim font-size-normal font-size-zero')
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
};
