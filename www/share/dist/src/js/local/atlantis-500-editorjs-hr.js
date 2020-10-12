'use strict';

Atlantis.EditorJS.Plugins.HR = class {
/*//
@date 2020-10-11
provides a custom block plugin for editor.js for writing blocks of code into
a piece of content using codemirror as the code syntax magic thing.
//*/

	constructor(Data,API,Config) {
		let that = this;

		this.Data = Data.data;

		// the main structure all the widgets are packed into.

		this.UI = null;
		this.Break = null;
		this.Mode = null;

		this.Options = {
			'HR': {
				'Icon': 'fas fa-fw fa-horizontal-rule',
				'Title': 'Horizontal Rule Break',
				'Click': function() {
					let NewBreak = (
						jQuery('<hr />')
						.attr('data-mode','hr')
					);

					(that.Break.parent())
					.empty()
					.append(NewBreak);

					that.Break = NewBreak;
					return;
				}
			},
			'Empty': {
				'Icon': 'fal fa-fw fa-rectangle-wide',
				'Title': 'Empty Space Break',
				'Click': function() {
					let NewBreak = (
						jQuery('<div class="pt-4 pb-4 text-center" />')
						.attr('data-mode','empty')
						.append(
							jQuery('<span />')
							.addClass('text-muted font-italic')
							.text('- Empty Space Break -')
						)
					);

					(that.Break.parent())
					.empty()
					.append(NewBreak);

					that.Break = NewBreak;
					return;
				}
			}
		};

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

	BuildBreak() {
	/*//
	@date 2020-10-11
	construct the ui elements for the url field.
	//*/

		let that = this;

		this.Break = (
			jQuery('<hr />')
		);

		return;
	}

	render() {
	/*//
	@date 2020-10-11
	assemble the final ui from all all the components.
	//*/

		let that = this;

		this.BuildUI();
		this.BuildBreak();

		this.UI
		.append(
			jQuery('<div />')
			.addClass('col-12')
			.append(this.Break)
		)


		if(this.Data.Mode === 'hr')
		this.Options.HR.Click();

		if(this.Data.Mode === 'empty')
		this.Options.Empty.Click();

		return this.UI[0];
	}

	renderSettings() {
	/*//
	@date 2020-10-12
	//*/

		let that = this;

		let Element = (
			jQuery('<div />')
			.addClass('row tight align-items-center justify-content-center')
		);

		jQuery.each(this.Options,function(Key,Val){
			Element
			.append(
				jQuery('<div />')
				.addClass('col-auto')
				.attr('title',Val.Title)
				.append(
					jQuery('<span />')
					.addClass(Val.Icon)
					.addClass('font-size-large m-2 HasTooltip')
					.on('click',Val.Click)
				)
			)
			return;
		});

		return Element[0];
	}

	save(Content) {
	/*//
	@date 2020-10-11
	fetch the data from the ui on save.
	//*/

		return {
			'Mode': this.Break.attr('data-mode')
		};
	}

	static get sanitize () {
		return {
			'Mode': false
		}
	}

	static get toolbox() {
		return {
			title: 'Horizontal Rule',
			icon: '<i class="fas fa-fw fa-horizontal-rule"></i>'
		};
	}

}

