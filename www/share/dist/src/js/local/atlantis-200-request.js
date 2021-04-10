"use strict";

Atlantis.Request = function(Opt){

	var Config = {
		Method: 'Get',
		URL: '/no/url/lol',
		Data: null,
		IsFormData: false,
		OnSuccess: null,
		OnError: ((Result)=> alert(Result.Message))
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
	.fail(function(jqXHR,Status,Error){
		alert(`API Failure: ${Error}`);
		return;
	})
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

