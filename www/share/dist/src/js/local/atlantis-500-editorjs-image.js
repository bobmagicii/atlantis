'use strict';

Atlantis.EditorJS.Plugins.Image = class {
/*//
@date 2020-10-11
provides a custom block plugin for editor.js for writing blocks of code into
a piece of content using codemirror as the code syntax magic thing.
//*/

	constructor(Data,API,Config) {
		this.Data = Data.data;

		// the main structure all the widgets are packed into.

		this.UI = null;
		this.InputURL = null;
		this.Image = null;
		this.ButtonUpload = null;
		this.InputUpload = null;
		this.LabelGallery = null;
		this.InputGallery = null;
		this.Loader = null;

		return;
	}

	BuildUI() {
	/*//
	@date 2020-10-11
	construct the ui elements for the main structure.
	//*/

		this.UI = (
			jQuery('<div />')
			.addClass('row tight align-items-center PostImage')
		);

		return;
	}

	BuildInputURL() {
	/*//
	@date 2020-10-11
	construct the ui elements for the url field.
	//*/

		let that = this;

		this.InputURL = (
			jQuery('<input />')
			.attr('type','text')
			.attr('placeholder','Image URL...')
			.addClass('form-control font-size-smaller')
			.val(this.Data.URL)
			.on('keyup',function(){
				that.Image.attr('src',jQuery(this).val());
				return;
			})
			.on('change',function(){
				that.Image.attr('src',jQuery(this).val());
				return;
			})
		);

		return;
	}

	BuildInputGallery() {
	/*//
	@date 2020-10-17
	construct the ui elements for the gallery checkbox
	//*/

		this.LabelGallery = (
			jQuery('<label />')
			.attr('data-btn-class','btn-secondary btn-sm')
			.append(
				this.InputGallery =
				jQuery('<input />')
				.attr('type','checkbox')
			)
			.append(
				jQuery('<span />')
				.text('Gallery')
			)
		);

		if(this.Data.Gallery)
		(this.InputGallery)
		.attr('checked','checked');

		return;
	}

	BuildImage() {
	/*//
	@date 2020-10-11
	costruct the ui elements for the image
	//*/

		this.Image = (
			jQuery('<img />')
		);

		return;
	}

	BuildButtonUpload() {
	/*//
	@date 2020-10-11
	construct the ui elements for the upload button.
	//*/

		let that = this;

		this.ButtonUpload = (
			jQuery('<button />')
			.addClass('btn btn-block btn-dark font-size-smaller')
			.text('Upload')
			.append(
				this.InputUpload = jQuery('<input />')
				.attr('type','file')
				.addClass('d-none')
				.on('click',function(Ev){ Ev.stopPropagation(); return; })
			)
		);

		return;
	}

	Initialize() {
	/*//
	@date 2020-10-11
	//*/

		let that = this;

		let UploadIcon = new Atlantis.Upload.Button({
			'SelectorButton': this.ButtonUpload,
			'SelectorInput': this.InputUpload,
			'FileType': Atlantis.Upload.FileTypeImage,
			'URL': '/api/v1/image/entity',
			'Data': { },
			'OnItemComplete': function(btn,Status,Result,File){
				if(Result.Error !== 0) {
					alert(Result.Message);
					return;
				}

				if(Result.Payload.Success.length === 0) {
					alert('no images successfully uploaded.');
					return;
				}

				that.InputURL
				.val(Result.Payload.Success[0].URL)
				.trigger('change');

				return;
			},
			'OnQueueComplete': function(btn){
				btn.Reset();
				return;
			}
		});

		new Atlantis.Element.CheckboxButton(this.LabelGallery);
		return;
	}

	render() {
	/*//
	@date 2020-10-11
	assemble the final ui from all all the components.
	//*/

		let that = this;

		this.BuildUI();
		this.BuildInputURL();
		this.BuildInputGallery();
		this.BuildButtonUpload();
		this.BuildImage();

		this.UI
		.append(
			jQuery('<div />')
			.addClass('col-auto mb-4')
			.append(jQuery.zc('span.fa.fa-fw.fa-image'))
		)
		.append(
			jQuery('<div />')
			.addClass('col mb-4')
			.append(this.InputURL)
		)
		.append(
			jQuery('<div />')
			.addClass('col-auto mb-4')
			.append(this.LabelGallery)
		)
		.append(
			jQuery('<div />')
			.addClass('col-auto mb-4')
			.append(this.ButtonUpload)
		)
		.append(
			jQuery('<div />')
			.addClass('col-12 text-center')
			.append(this.Image)
		)
		.append(
			jQuery('<iframe />')
			.attr('src','about:blank')
			.addClass('d-none')
			.on('load',function(){ that.Initialize(); return; })
		)

		this.InputURL.trigger('change');
		return this.UI[0];
	}

	save(Content) {
	/*//
	@date 2020-10-11
	fetch the data from the ui on save.
	//*/

		return {
			'URL': jQuery.trim(this.InputURL.val()),
			'Gallery': this.InputGallery.is(':checked')
		};
	}

	static get sanitize () {
		return {
			'URL': false,
			'Gallery': false
		}
	}

	static get toolbox() {
		return {
			title: 'Image',
			icon: '<i class="fas fa-fw fa-image"></i>'
		};
	}

}

