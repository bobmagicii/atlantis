
class AtlantisCodeMirrorForEditorJS {

	static get toolbox() {
		return {
			title: 'Code Block',
			icon: '<i class="fas fa-fw fa-code"></i>'
		};
	}

	render() {

		let UI = (
			jQuery('<div />')
			.addClass('row')
		);

		let Selector = (
			jQuery('<select />')
			.addClass('form-control')
		);

		let Editor = (
			jQuery('<textarea />')
			.addClass('form-control')
		);

		UI
		.append(
			jQuery('<div />')
			.addClass('col-12')
			.append(Selector)
		)
		.append(
			jQuery('<div />')
			.addClass('col-12')
			.append(Editor)
		)

		return UI[0];
	}

	save(Content) {

		return {
			Language: null,
			Text: null
		};
	}

}

