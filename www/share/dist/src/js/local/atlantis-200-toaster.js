"use strict";

Atlantis.Toaster = function(Opt){

	let Config = {
		'Title': 'Notification',
		'Content': 'Consider yourself notified.',
		'Icon': 'fa-cog',
		'ContentClass': false,
		'AutoHide': true,
		'Delay': 3000
	};

	NUI.Util.MergeProperties(Opt,Config);

	////////

	let Header = null;
	let Content = null;

	let Toast = jQuery('<div />')
	.addClass('toast m-3')
	.attr('role','alert');

	if(Config.Title !== false) {
		Toast.append(
			Header = jQuery('<div />')
			.addClass('toast-header')
			.append(
				jQuery('<i />')
				.addClass('rounded mr-2 fa fas')
				.addClass(Config.Icon)
			)
			.append(
				jQuery('<strong />')
				.addClass('mr-auto')
				.text(Config.Title)
			)
			.append(
				jQuery('<button />')
				.addClass('ml-2 mb-1 close')
				.attr('type','button')
				.attr('data-dismiss','toast')
				.html('<span>&times;</span>')
			)
		);
	}

	if(Config.Content !== false) {
		Toast.append(
			Content = jQuery('<div />')
			.addClass('toast-body')
			.append(Config.Content)
		);

		if(Config.ContentClass)
		Content.addClass(Config.ContentClass);
	}

	jQuery('#Toaster')
	.append(Toast);

	Toast
	.toast({
		'autohide': Config.AutoHide,
		'delay': Config.Delay
	})
	.toast('show');

	return;
};
