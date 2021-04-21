class UploadButton {

	constructor(Opt) {
	/*//
	@date 2021-04-21
	//*/

		this.Init(Opt);
		this.PrepareReferences();

		(this.Button)
		.css('position', 'relative')
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
		.on('click',this.OnButtonClick.bind(this));

		(this.Input)
		.on('change',this.OnSelectFiles.bind(this));

		return this;
	};

	Init(Opt) {
	/*//
	@date 2021-04-21
	//*/

		this.Config = {
			'SelectorButton': null,
			'SelectorInput': null,
			'SelectorUpload': null,
			'FileType': this.FileTypeAny,
			'AutoUpload': true,
			'Method': 'POST',
			'URL': null,
			'Data': null,
			'OnItemComplete': function (Status, Result, File) {
				if (Result.Error !== 0)
				alert(Result.Message);

				return;
			},
			'OnQueueComplete': function() {
				location.reload(true);
				return;
			}
		};

		NUI.Util.MergeProperties(Opt,this.Config);

		this.Queue = new Array;
		this.Button = null;
		this.Input = null;

		return;
	};

	PrepareReferences() {
	/*//
	@date 2021-04-21
	//*/

		if(typeof this.Config.SelectorButton === 'object')
		this.Button = this.Config.SelectorButton;
		else
		this.Button = jQuery(this.Config.SelectorButton);

		if(typeof this.Config.SelectorInput === 'object')
		this.Input = this.Config.SelectorInput;
		else
		this.Input = jQuery(this.Config.SelectorInput);

		return;
	};

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	OnButtonClick() {
	/*//
	@date 2021-04-21
	//*/

		this.Input.trigger('click');
		return false;
	};

	OnSelectFiles(Files) {
	/*//
	@date 2021-04-21
	//*/

		jQuery(this.Input[0].files)
		.each((Iter,File)=> {

			console.log('Upload Icon: ' + File.name + ' ' + File.type);

			if(this.Config.FileType === this.FileTypeImage) {
				if (!File.type.match(/^image\//)) {
					OnFileTypeError(File);
					return false;
				}
			}

			this.Queue.push(File);
			return;
		});

		if(this.Config.AutoUpload)
		this.OnQueueNext();

		return;
	};

	OnFileTypeError(File) {
	/*//
	@date 2021-04-21
	//*/

		let Overlay;
		let Dialog;

		Overlay = new NUI.Overlay({
			'Content': (
				Dialog = new NUI.Dialog({
					'Title': 'Invalid File Type',
					'Buttons': [
						new NUI.Button({ 'Label': 'OK', 'Class': 'NUI-Dialog-Cancel btn btn-dark' })
					],
					'Content': File.name,
					'OnCancel': function () { Overlay.Destroy(); return; }
				})
			)
		});

		return;
	};

	OnQueueNext() {
	/*//
	@date 2021-04-21
	//*/

		let Next = this.Queue.shift();

		if(typeof Next === 'object') {
			this.UploadFile(Next);
			return;
		}

		if(typeof this.Config.OnQueueComplete === 'function')
		((this.Config.OnQueueComplete).bind(this))();

		return;
	};

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	UploadFile(File) {
	/*//
	@date 2021-04-21
	//*/

		let Uploader = new FormData;
		let Xfer = new XMLHttpRequest();
		let Prop = null;

		(this.Button.find('.StatusThinking'))
		.removeClass('font-size-zero')
		.addClass('ml-2');

		(Xfer.upload)
		.addEventListener(
			'progress',
			(Ev)=> {
				let Per = 0;

				if(Ev.lengthComputable) {
					Per = Math.round((Ev.loaded * 100) / Ev.total);

					(this.Button.find('.UploadButtonBar'))
					.css('width', (Per + '%'));
				}

				return;
			},
			false
		);

		(Xfer)
		.addEventListener(
			'load',
			(Ev)=> {
				if(typeof this.Config.OnItemComplete === 'function')
				((this.Config.OnItemComplete).bind(this))(
					Xfer.status,
					Xfer.response,
					File
				);

				this.OnQueueNext();
				return;
			}
		);

		if(typeof this.Config.Data === 'object')
		for(Prop in this.Config.Data)
		Uploader.append(Prop,this.Config.Data[Prop]);

		Uploader.append('Filedata',File);
		Xfer.responseType = 'json';
		Xfer.open(this.Config.Method,this.Config.URL);
		Xfer.send(Uploader);

		return;
	};

	Reset() {
	/*//
	@date 2021-04-21
	//*/

		(this.Button.find('.StatusThinking'))
		.addClass('font-size-zero')
		.removeClass('ml-2');

		(this.Button.find('.UploadButtonBar'))
		.css('width', '0%');

		return;
	};

};

UploadButton.FileTypeAny = 0;
UploadButton.FileTypeImage = 1;

export default UploadButton;
