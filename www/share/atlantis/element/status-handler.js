class StatusHandler {

	constructor(Opt) {
		this.Init(Opt);
		this.PrepareReferences();

		// if its an input then we want to reset the status every
		// time it is edited.

		(this.Element.find('input'))
		.on('keypress',()=> {
			if(typeof this.Config.OnKeyPress === 'function')
			this.Config.OnKeyPress.call(this);

			return;
		});

		// and we want to know when this elements primary commit
		// action takes place.

		(this.Commit)
		.on(this.Config.CommitAction,()=> {
			this.SetStatus('think');

			if(typeof this.Config.OnCommit === 'function')
			setTimeout(this.Config.OnCommit.bind(this),300);

			return false;
		});

		return;
	};

	Init(Opt) {
	/*//
	@date 2021-04-21
	//*/

		this.Config = {
			'Element': null,
			'ElementCommit': '.ActionCommit',
			'ElementStatusAll': '.ActionStatus',
			'ElementStatusThink': '.ActionStatusThink',
			'ElementStatusGood': '.ActionStatusGood',
			'ElementStatusBad': '.ActionStatusBad',
			'CommitAction': 'click',
			'OnCommit': (function(){
				this.SetStatus('good');
				return;
			}).bind(this),
			'OnKeyPress': (function(){
				this.SetStatus(null);
				return;
			}).bind(this)
		};

		NUI.Util.MergeProperties(Opt,this.Config);

		return;
	};

	PrepareReferences() {
	/*//
	@date 2021-04-21
	//*/

		this.Element = null;
		this.Commit = null;
		this.Status = { };

		if(typeof this.Config.Element === 'string')
		this.Element = jQuery(this.Config.Element);

		if(typeof this.Config.ElementCommit === 'string')
		this.Commit = this.Element.find(this.Config.ElementCommit);

		this.Status['All'] = this.Element.find(this.Config.ElementStatusAll);
		this.Status['Think'] = this.Element.find(this.Config.ElementStatusThink);
		this.Status['Good'] = this.Element.find(this.Config.ElementStatusGood);
		this.Status['Bad'] = this.Element.find(this.Config.ElementStatusBad);

		// take note of what kind of thing we are working with
		// to change how we respond to interactions with it.

		if(this.Commit.is('a, btn, input[type=button], input[type=submit]'))
		this.Config.CommitAction = 'click';
		else if(this.Commit.is('input[type=checkbox], input[type=radio], select'))
		this.Config.CommitAction = 'change';

		return;
	}

	SetStatus(Mode) {
	/*//
	@return self
	@date 2021-04-21
	//*/

		(this.Status.All)
		.addClass('font-size-zero');

		switch(Mode) {
			case 'think':
				(this.Status.Think)
				.removeClass('font-size-zero');
			break;
			case 'good':
				(this.Status.Good)
				.removeClass('font-size-zero');
			break;
			case 'bad':
				(this.Status.Bad)
				.removeClass('font-size-zero');
			break;
		};

		return this;
	};

	Notify(ToastOpt) {
	/*//
	@return self
	@date 2021-04-21
	//*/

		Atlantis.Toaster(ToastOpt);
		return this;
	};

};

export default StatusHandler;
