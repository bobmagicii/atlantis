'use strict';
Atlantis.BlogTag = { };

////////////////////////////////////////////////////////////////////////////////
// Blog Tag Edit Title Dialog //////////////////////////////////////////////////

Atlantis.BlogTag
.DialogRename = function(TagID,Opt) {
	let that = this;

	let Overlay;
	let Dialog;
	let InputText;

	let Prepare;
	let Construct;
	let Commit;
	let Cancel;

	let Config = {
		'OnSuccess': function(Diag,Result) {
			location.reload(true); return;
		}
	};

	NUI.Util.MergeProperties(Opt,Config);

	////////

	Prepare = function(){
		Atlantis.Request({
			'Method': 'GET',
			'URL': '/api/v1/blog/tag',
			'Data': { 'TagID': TagID },
			'OnSuccess': function(Result){
				Construct(Result);
				return;
			}
		});

		return;
	};

	Construct = function(Result){
		Overlay = new NUI.Overlay({
			'Content': (Dialog = new NUI.Dialog({
				'Title': 'Rename Tag',
				'Content': (
					jQuery('<div />')
					.addClass('row')
					.append(
						jQuery('<div />')
						.addClass('col-12')
						.append(
							InputText = jQuery('<input />')
							.attr('type','text')
							.addClass('form-control')
							.val(Result.Payload.Title)
						)
					)
				),
				'Buttons': [
					new NUI.Button({ 'Label':'Save', 'Class':'NUI-Dialog-Accept btn btn-primary' }),
					new NUI.Button({ 'Label':'Cancel', 'Class':'NUI-Dialog-Cancel btn btn-dark' })
				],
				'OnAccept': function(Result){ Commit(); return; },
				'OnCancel': function(Result){ Cancel(); return; }
			}))
		});

		return;
	};

	Commit = function(){

		let TagTitle = InputText.val();

		Atlantis.Request({
			'Method': 'PATCH',
			'URL': '/api/v1/blog/tag',
			'Data': { 'TagID':TagID, 'TagTitle':TagTitle },
			'OnSuccess': function(Result){
				if(typeof Config.OnSuccess === 'function')
				(Config.OnSuccess)(that,Result);

				return;
			}
		});

		return;
	};

	Cancel = function(){
		Overlay.Destroy();
		return;
	};

	////////

	this.Close = Cancel;

	Prepare();
	return this;
};

////////////////////////////////////////////////////////////////////////////////
// Blog Tag Delete Confirmation Dialog /////////////////////////////////////////

Atlantis.BlogTag
.DialogDelete = function(TagID,Opt) {
	let that = this;

	let Overlay;
	let Dialog;
	let InputText;

	let Prepare;
	let Construct;
	let Commit;
	let Cancel;

	let Config = {
		'OnSuccess': function(Diag,Result) {
			location.reload(true); return;
		}
	};

	NUI.Util.MergeProperties(Opt,Config);

	////////

	Prepare = function(){
		Atlantis.Request({
			'Method': 'GET',
			'URL': '/api/v1/blog/tag',
			'Data': { 'TagID': TagID },
			'OnSuccess': function(Result){
				Construct(Result);
				return;
			}
		});

		return;
	};

	Construct = function(Result){
		Overlay = new NUI.Overlay({
			'Content': (Dialog = new NUI.Dialog({
				'Title': 'Delete Tag',
				'Content': (
					jQuery('<div />')
					.addClass('row')
					.append(
						jQuery('<div />')
						.addClass('col-12')
						.html('Really delete <b>' + Result.Payload.Title + '</b>? This cannot be undone.')
					)
				),
				'Buttons': [
					new NUI.Button({ 'Label':'Delete', 'Class':'NUI-Dialog-Accept btn btn-danger' }),
					new NUI.Button({ 'Label':'Cancel', 'Class':'NUI-Dialog-Cancel btn btn-dark' })
				],
				'OnAccept': function(Result){ Commit(); return; },
				'OnCancel': function(Result){ Cancel(); return; }
			}))
		});

		return;
	};

	Commit = function(){

		Atlantis.Request({
			'Method': 'DELETE',
			'URL': '/api/v1/blog/tag',
			'Data': { 'TagID':TagID },
			'OnSuccess': function(Result){
				if(typeof Config.OnSuccess === 'function')
				(Config.OnSuccess)(that,Result);

				return;
			}
		});

		return;
	};

	Cancel = function(){
		Overlay.Destroy();
		return;
	};

	////////

	this.Close = Cancel;

	Prepare();
	return this;
};
