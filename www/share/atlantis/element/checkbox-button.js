class CheckboxButton {

	constructor(Argv) {
	/*//
	@date 2020-10-16
	//*/

		this.Element = null;
		this.Active = null;
		this.Input = null;
		this.IconBase = null;
		this.IconOff = null;
		this.IconOn = null;
		this.BtnClass = null;
		this.BtnText = null;
		this.Btn = null;
		this.AutoRender = true;

		this.OnConstruct(Argv);
		return;
	};

	OnConstruct(Argv) {
	/*//
	@date 2020-10-16
	//*/

		let that = this;

		if(typeof Argv === 'object')
		if(!(Argv instanceof jQuery))
		if(!(Argv instanceof HTMLElement))
		NUI.Util.MergeProperties(Argv,this);

		////////

		if(typeof Argv === 'object') {
			if(Argv instanceof jQuery)
			this.Element = Argv;
			else if(Argv instanceof HTMLElement)
			this.Element = jQuery(Argv);
		}

		if(typeof Argv === 'string') {
			this.Element = jQuery(Argv);
		}

		if(!(this.Element instanceof jQuery)) {
			throw "AtlantisCheckboxButton: Element is not a valid object.";
			return;
		}

		////////

		this.Input = this.Element.find('input[type=checkbox]');
		this.IconBase = this.Element.attr('data-btn-icon-base') ?? 'far fa-fw mr-2';
		this.IconOff = this.Element.attr('data-btn-icon-off') ?? 'fa-square';
		this.IconOn = this.Element.attr('data-btn-icon-on') ?? 'fa-check-square';
		this.BtnClass = this.Element.attr('data-btn-class') ?? 'btn-dark';
		this.BtnText = this.Element.text();

		(this.Input)
		.on('change',function(){
			that.Update(true);
			return;
		});

		if(this.AutoRender)
		this.Render();

		return;
	};

	Render() {
	/*//
	@date 2020-10-16
	//*/

		let that = this;
		let Btn = null;

		this.Btn = (
			jQuery('<button />')
			.addClass('btn btn-toggle')
			.addClass(this.BtnClass)
			.append(
				jQuery('<span />')
				.addClass('btn-toggle-off')
				.addClass(this.IconBase)
				.addClass(this.IconOff)
			)
			.append(
				jQuery('<span />')
				.addClass('btn-toggle-on')
				.addClass(this.IconBase)
				.addClass(this.IconOn)
			)
			.append(
				jQuery('<span />')
				.text(this.BtnText)
			)
			.on('click',function(){
				that.Input.trigger('click');
				return;
			})
		);

		(this.Element)
		.addClass('d-none')
		.after(this.Btn);

		this.Btn.button();
		this.Update(false);
		return;
	};

	Update(Notify) {
	/*//
	@date 2020-10-16
	//*/

		this.Active = this.Input.is(':checked');

		if(this.Active)
		this.Btn.addClass('active');
		else
		this.Btn.removeClass('active');

		this.Btn.blur();

		if(Notify)
		this.OnChanged();

		return;
	};

	OnChanged() {
	/*//
	@date 2020-10-16
	this method is intended for you to override in the event
	you want to do something when the choice is changed.
	//*/

		return;
	};

}

export default CheckboxButton;