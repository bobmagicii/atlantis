import Util from '/share/atlantis/util.js';

class DialogBlogTagDelete {

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

		Util.Request({
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
				'Title': 'Delete Tag',
				'Content': (`Really delete ${Result.Payload.Title}? This cannot be undone.`),
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

		Util.Request({
			'Method': 'DELETE',
			'URL': '/api/v1/blog/tag',
			'Data': { 'TagID': this.TagID  },
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

export default DialogBlogTagDelete;
