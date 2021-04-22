class DialogBlogTagRename {

	constructor(TagID,Opt) {

		this.Init(TagID,Opt);
		this.Prepare();

		return;
	};

	Init(TagID,Opt) {
	/*//
	@date 2021-04-21
	//*/

		this.TagID = TagID;
		this.Overlay = null;
		this.Dialog = null;
		this.InputText = null;

		this.Config = {
			'OnSuccess': function(Diag,Result) {
				location.reload(true);
				return;
			}
		};

		NUI.Util.MergeProperties(Opt,this.Config);

		return;
	};


	Prepare() {
	/*//
	@date 2021-04-21
	//*/

		Atlantis.Request({
			'Method': 'GET',
			'URL': '/api/v1/blog/tag',
			'Data': { 'TagID': this.TagID },
			'OnSuccess': (Result)=> {
				this.Construct(Result);
				return;
			}
		});

		return;
	};

	Construct(Result) {
	/*//
	@date 2021-04-21
	//*/

		this.Overlay = new NUI.Overlay({
			'Content': (this.Dialog = new NUI.Dialog({
				'Title': 'Rename Tag',
				'Content': (
					jQuery('<div />')
					.addClass('row')
					.append(
						jQuery('<div />')
						.addClass('col-12')
						.append(
							this.InputText = jQuery('<input />')
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
				'OnAccept': (Result)=> { this.Commit(); return; },
				'OnCancel': (Result)=> { this.Cancel(); return; }
			}))
		});

		return;
	};

	Commit() {
	/*//
	@date 2021-04-21
	//*/

		let TagTitle = this.InputText.val();

		Atlantis.Request({
			'Method': 'PATCH',
			'URL': '/api/v1/blog/tag',
			'Data': { 'TagID': this.TagID, 'TagTitle': TagTitle },
			'OnSuccess': (Result)=> {
				if(typeof this.Config.OnSuccess === 'function')
				(this.Config.OnSuccess.bind(this))(Result);

				return;
			}
		});

		return;
	};

	Cancel() {
	/*//
	@date 2021-04-21
	//*/

		this.Overlay.Destroy();
		return;
	};

	Close() {
	/*//
	@date 2021-04-21
	@todo 2021-04-21 remove this make consumers call cancel.
	//*/

		return this.Cancel();
	};

};

export default DialogBlogTagRename;