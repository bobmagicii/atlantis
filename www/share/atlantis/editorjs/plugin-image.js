import ElementRow from '/share/atlantis/element/row.js';
import ElementRowItem from '/share/atlantis/element/row-item.js';
import UploadButton from '/share/atlantis/element/upload-button.js';
import CheckboxButton from '/share/atlantis/element/checkbox-button.js';

class PluginImage {
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
		this.ButtonChooser = null;
		this.InputUpload = null;
		this.LabelGallery = null;
		this.InputGallery = null;
		this.LabelPrimaryImage = null;
		this.InputPrimaryImage = null;
		this.InputImageID = null;
		this.Chooser = null;
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

		this.InputImageID = (
			jQuery('<input />')
			.attr('type','hidden')
			.val(this.Data.ImageID ?? 0)
		);

		if(this.Data.Gallery)
		this.InputGallery.attr('checked','checked');

		return;
	}

	BuildInputPrimaryImage() {
	/*//
	@date 2020-10-17
	construct the ui elements for the primary image checkbox
	//*/

		this.LabelPrimaryImage = (
			jQuery('<label />')
			.addClass('EditorPrimaryImage')
			.attr('data-btn-class','btn-secondary btn-sm')
			.append(
				this.InputPrimaryImage =
				jQuery('<input />')
				.attr('type','checkbox')
			)
			.append(
				jQuery('<span />')
				.text('Main Post Image')
			)
		);

		if(this.Data.PrimaryImage)
		this.InputPrimaryImage.attr('checked','checked');

		(this.LabelPrimaryImage)
		.on('click',((Ev)=> {
			jQuery(document)
			.find('.EditorPrimaryImage')
			.next('.btn-toggle.active')
			.trigger('click');
			return;
		}));

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
			.addClass('btn btn-sm btn-block btn-dark')
			.addClass('AtlantisTooltip')
			.attr('title','Upload an image.')
			.html('<span class="fas fa-fw fa-cloud-upload"></span>')
			.append(
				this.InputUpload = jQuery('<input />')
				.attr('type','file')
				.addClass('d-none')
				.on('click',function(Ev){ Ev.stopPropagation(); return; })
			)
		);

		return;
	}

	BuildButtonChooser() {
	/*//
	@date 2020-10-11
	construct the ui elements for the upload button.
	//*/

		let that = this;

		this.ButtonChooser = (
			jQuery('<button />')
			.addClass('btn btn-sm btn-block btn-dark')
			.addClass('AtlantisTooltip')
			.attr('title','Choose an image from your gallery.')
			.html('<span class="fas fa-fw fa-th"></span>')
			.on('click',function(){

				if(jQuery(this).hasClass('active')) {
					jQuery(this).removeClass('active');
					that.Chooser.empty();
				}

				else {
					jQuery(this).addClass('active');
					that.LoadChooser(1);
				}
			})
		);

		return;
	}

	BuildChooser() {

		this.Chooser = (
			jQuery('<div />')
			.addClass('row tight mb-4')
		);

		return;
	}

	LoadChooser(PageNum) {

		let that = this;

		(this.Chooser).empty();

		Atlantis.Request({
			'Method': 'LIST',
			'URL': '/api/v1/image/entity',
			'Data': { 'Limit':12, 'Page':PageNum },
			'OnSuccess': function(Result){

				let Toolbar;

				Toolbar = (
					(new ElementRow(['align-items-center','justify-content-center','mb-4']))
					.Append(
						(new ElementRowItem(['col-auto']))
						.Set(`Page ${Result.Payload.Page} of ${Result.Payload.PageCount}`)
					)
				);

				if(Result.Payload.Page > 1)
				Toolbar.Prepend(
					(new ElementRowItem(['col-auto']))
					.Set(
						jQuery('<button />')
						.attr('type','button')
						.addClass('btn btn-dark btn-sm')
						.append('<span class="fas fa-fw fa-caret-left"></span>')
						.on('click',function(){ that.LoadChooser(PageNum-1); return; })
					)
				);

				if(Result.Payload.Page < Result.Payload.PageCount)
				Toolbar.Append(
					(new ElementRowItem(['col-auto']))
					.Set(
						jQuery('<button />')
						.attr('type','button')
						.addClass('btn btn-dark btn-sm')
						.append('<span class="fas fa-fw fa-caret-right"></span>')
						.on('click',function(){ that.LoadChooser(PageNum+1); return; })
					)
				);

				(that.Chooser)
				.append(
					jQuery('<div />')
					.addClass('col-12')
					.append(Toolbar.Get())
				);

				jQuery(Result.Payload.Payload)
				.each(function(){

					(that.Chooser)
					.append(
						jQuery('<div />')
						.addClass('col-3 col-md-2 mb-4')
						.append(
							jQuery('<div />')
							.addClass('WallpaperedBox Square rounded')
							.attr('data-image-lg',this.Sources.Large)
							.attr('data-image-id',this.ID)
							.css('background-image',`url(${this.Sources.Thumbnail})`)
							.css('cursor','pointer')
							.on('click',function(){

								that.InputURL
								.val(jQuery(this).attr('data-image-lg'))
								.trigger('change');

								that.InputImageID.val(jQuery(this).attr('data-image-id'));

								return;
							})
						)
					);

					return;
				});

				return;
			}
		});

		return;
	}

	Initialize() {
	/*//
	@date 2020-10-11
	//*/

		let that = this;

		let UploadIcon = new UploadButton({
			'SelectorButton': this.ButtonUpload,
			'SelectorInput': this.InputUpload,
			'FileType': UploadButton.FileTypeImage,
			'URL': '/api/v1/image/entity',
			'Data': { },
			'OnItemComplete': function(Status,Result,File){
				if(Result.Error !== 0) {
					alert(Result.Message);
					return;
				}

				if(Result.Payload.Success.length === 0) {
					alert('no images successfully uploaded.');
					return;
				}

				that.InputURL
				.val(Result.Payload.Success[0].Sources.Large)
				.trigger('change');

				that.InputImageID.val(Result.Payload.Success[0].ID);

				return;
			},
			'OnQueueComplete': function(){
				this.Reset();
				return;
			}
		});

		new CheckboxButton(this.LabelGallery);
		new CheckboxButton(this.LabelPrimaryImage);
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
		this.BuildInputPrimaryImage();
		this.BuildButtonUpload();
		this.BuildButtonChooser();
		this.BuildImage();
		this.BuildChooser();

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
			.append(this.LabelPrimaryImage)
		)
		.append(
			jQuery('<div />')
			.addClass('col-auto mb-4')
			.append(this.ButtonUpload)
			.append(this.InputImageID)
		)
		.append(
			jQuery('<div />')
			.addClass('col-auto mb-4')
			.append(this.ButtonChooser)
		)
		.append(
			jQuery('<div />')
			.addClass('col-12 text-center')
			.append(this.Chooser)
			.append(this.Image)
		)
		.append(
			jQuery('<iframe />')
			.attr('src','about:blank')
			.addClass('d-none')
			.on('load',function(){ that.Initialize(); return; })
		);


		(this.UI)
		.find('.AtlantisTooltip')
		.tooltip();

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
			'Gallery': this.InputGallery.is(':checked'),
			'PrimaryImage': this.InputPrimaryImage.is(':checked'),
			'ImageID': this.InputImageID.val()
		};
	}

	static get sanitize () {
		return {
			'URL': false,
			'Gallery': false,
			'PrimaryImage': false,
			'ImageID': false
		}
	}

	static get toolbox() {
		return {
			title: 'Image',
			icon: '<i class="fas fa-fw fa-image"></i>'
		};
	}

};

export default PluginImage;