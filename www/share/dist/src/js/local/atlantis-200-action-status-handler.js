"use strict";

if(typeof Atlantis.Action === 'undefined')
Atlantis.Action = {};

Atlantis.Action.StatusHandler = function(Opt){

	let that = this;

	let Config = {
		'Element': null,
		'ElementCommit': '.ActionCommit',
		'ElementStatusAll': '.ActionStatus',
		'ElementStatusThink': '.ActionStatusThink',
		'ElementStatusGood': '.ActionStatusGood',
		'ElementStatusBad': '.ActionStatusBad',
		'CommitAction': 'click',
		'OnCommit': function(Handler){
			Handler.SetStatus('good');
			return;
		},
		'OnKeyPress': function(Handler){
			Handler.SetStatus(null);
			return;
		}
	};

	this.SetStatus = function(Mode) {
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

	this.Notify = function(ToastOpt){
		Atlantis.Toaster(ToastOpt);
		return this;
	};

	////////

	NUI.Util.MergeProperties(Opt,Config);
	this.Element = Config.Element;
	this.Commit = Config.ElementCommit;
	this.Status = {
		'All': Config.ElementStatusAll,
		'Think': Config.ElementStatusThink,
		'Good': Config.ElementStatusGood,
		'Bad': Config.ElementStatusBad
	};

	////////

	if(typeof this.Element === 'string')
	this.Element = jQuery(this.Element);

	if(typeof this.Commit === 'string')
	this.Commit = this.Element.find(this.Commit);

	for(Prop in this.Status)
	if(typeof this.Status[Prop] === 'string')
	this.Status[Prop] = this.Element.find(this.Status[Prop]);

	if(this.Commit.is('a, btn, input[type=button], input[type=submit]'))
	Config.CommitAction = 'click';
	else if(this.Commit.is('input[type=checkbox], input[type=radio]'))
	Config.CommitAction = 'change';

	////////

	(this.Element.find('input'))
	.on('keypress',function(){

		if(typeof Config.OnKeyPress === 'function')
		(Config.OnKeyPress)(that);

		return;
	});

	(this.Commit)
	.on(Config.CommitAction,function(){
		that.SetStatus('think');

		if(typeof Config.OnCommit === 'function')
		setTimeout(
			function(){ (Config.OnCommit)(that); return; },
			300
		);

		return false;
	});

	////////

	return this;
};
