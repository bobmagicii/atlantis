class Atlantis {

	static Request(Opt){

		var Config = {
			Method: 'Get',
			URL: '/no/url/lol',
			Data: null,
			IsFormData: false,
			OnSuccess: null,
			OnError: null
		};

		NUI.Util.MergeProperties(Opt,Config);

		////////

		let Request = {
			type: Config.Method.toUpperCase(),
			url: Config.URL,
			data: Config.Data,
			dataType: 'json'
		};

		if(Config.IsFormData) {
			Request.processData = false;
			Request.contentType = false;
			Request.mimeType = 'multipart/form-data';
		}

		jQuery
		.ajax(Request)
		.done(function(Result){

			// handle api result errors.

			if(Result.Error != 0) {

				if(typeof Config.OnError == 'function')
				Config.OnError(Result);

				else
				alert(Result.Message);

				return;
			}

			// handle api success.

			if(typeof Config.OnSuccess == 'function')
			Config.OnSuccess(Result);

			return;
		});

		return;
	};

	static CopyToClipboard(What) {
	/*//
	copy the specified text to the clipboard. the source element will have its content
	modified for a few seconds to visually demonstrate something has happened. generally
	we are expecting things calling this to be buttons.
	//*/

		let that = this;
		let Textbox;
		let OgText;

		// create a textbox that contains the content we want and add it to the dom.
		// we couldn't display none it or else the selection would not work. we can
		// however set it to 0x0.

		jQuery(that).append(
			Textbox = jQuery('<textarea />')
			.css({'width':'0px','height':'0px','border':'0px;'})
			.val(What)
		);

		Textbox.select();
		document.execCommand('copy');
		Textbox.remove();

		// make the button we clicked react to the click visually.

		OgText = jQuery(that).text();
		jQuery(that).text('Copied!');
		setTimeout(function(){ jQuery(that).text(OgText); },1000);

		return false;
	};

	static CopyElementToClipboard() {
	/*//
	copy an element's text to the clipboard. the element that triggered this should have
	an attribute called data-copy-element that contains a selector to identify where to
	pull text data from.
	//*/

		let ElementID = jQuery(this).attr('data-copy-element');
		let Value = jQuery.trim(
			jQuery(ElementID).text()
		);

		(Atlantis.CopyToClipboard)
		.call(this,Value);

		return false;
	};

	static CopyValueToClipboard() {
	/*//
	copy an element's value to the clipboard. the element that triggered this should have
	an attribute called data-copy-value that contains the content that you want copied.
	//*/

		e.preventDefault();

		let Value = jQuery.trim(
			jQuery(this).attr('data-copy-value')
		);

		(Atlantis.CopyToClipboard)
		.call(this,Value);

		return false;
	};

};

jQuery(document)
.ready(function(){

	jQuery('.CopyElementToClipboard')
	.on('click',Atlantis.CopyElementToClipboard);

	jQuery('.CopyValueToClipboard')
	.on('click',Atlantis.CopyValueToClipboard);

	return;
});
