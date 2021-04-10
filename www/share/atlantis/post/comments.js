let trim = jQuery.trim;

class Comments {

	constructor(ListSelector,FormSelector) {
	/*//
	@date 2020-12-11
	//*/

		this.Container = jQuery(ListSelector);
		this.Form = jQuery(FormSelector);
		this.PostID = this.Container.attr('data-post-id');
		this.Page = 1;
		this.PageCount = 1;
		this.CommentCount = 0;

		this.SetupListingTemplate();
		this.SetupListingElements();
		this.SetupInputForm();

		this.LoadPage(1);
		return;
	};

	SetupListingTemplate() {
	/*//
	@date 2021-04-10
	//*/

		this.Template = (
			this.Container
			.find('.Template')
			.clone()
			.addClass('Comment')
			.removeClass('Template')
			.removeClass('d-none')
		);

		return;
	};

	SetupListingElements() {
	/*//
	@date 2021-04-10
	//*/

		this.Loading = (
			jQuery('<div />')
			.addClass('d-none')
			.addClass('Loading')
			.addClass('')
			.append('<i class="fa fa-fw fa-spin fa-asterisk"></i> Loading...')
		);

		this.Listing = (
			jQuery('<div />')
			.addClass('d-none')
			.addClass('Listing')
			.addClass('HideTheLastHr')
		);

		(this.Container)
		.append(this.Loading)
		.append(this.Listing);

		return;
	};

	SetupInputForm() {
	/*//
	@date 2021-04-10
	//*/

		this.InputName = this.Form.find('input[name=Name]');
		this.InputContent = this.Form.find('textarea');
		this.CmdSubmit = this.Form.find('.CmdCommentSubmit');

		this.CmdSubmit
		.on('click',()=> this.OnSubmit());

		// bind some page level things.

		jQuery('.PostCommentToggle')
		.on('click',()=> this.OnCommentToggle());

		if(this.Form.parent().hasClass('DropContainer'))
		this.Form[0].style
		.setProperty(
			'--local-height',
			`-${this.Form.outerHeight()}px`
		);

		return;
	};

	LoadNextPage() {
	/*//
	@date 2020-12-11
	//*/

		if(this.Page < this.PageCount)
		this.LoadPage(this.Page + 1);

		return;
	};

	LoadPrevPage() {
	/*//
	@date 2020-12-11
	//*/

		if(this.Page > 1)
		this.LoadPage(this.Page - 1);

		return;
	};

	async LoadPage(PageNum) {
	/*//
	@date 2020-12-11
	//*/

		let Result = null;

		this.ShowLoading();

		Result = await this.FetchPage(PageNum);
		this.Page = Result.Payload.Page;
		this.PageCount = Result.Payload.PageCount;
		this.CommentCount = Result.Payload.Total;

		if(Result.Payload.Count > 0)
		this.LoadPage_RenderComments(Result);
		else
		this.LoadPage_RenderNothing(Result);

		this.ShowListing();
		return;
	};

	LoadPage_RenderComments(Result) {
	/*//
	@date 2021-04-09
	//*/

		this.Listing.empty();

		// find any on-page counters.

		jQuery('.PostCommentCount')
		.text(Result.Payload.Total);

		// then construct the comment list.

		for(const Comment of Result.Payload.Comments) {
			Element = this.Template.clone();

			Element
			.find('blockquote')
			.text(Comment.Content);

			Element
			.find('.Date')
			.text(Comment.DateTimeCreated);

			Element
			.find('.UserName')
			.text(Comment.Name || '<Anonymous>');

			if(Comment.User) {
				Element
				.find('.UserIconBG')
				.css('background-image',`url(${Comment.User.ImageIcon.Tiny})`);

				Element
				.find('.UserName')
				.html(`<a href="${Comment.User.URL}">${Comment.Name}</a>`);
			}

			this.Listing.append(Element);
		}

		this.Listing
		.append(
			jQuery('<div />')
			.addClass('row')
			.addClass('justify-content-center')
			.append(
				jQuery('<div />')
				.addClass('col-auto')
				.text(`Page ${this.Page} of ${this.PageCount}`)
			)
		);

		return;
	};

	LoadPage_RenderNothing(Result) {
	/*//
	@date 2021-04-09
	//*/

		this.Listing.append(
			jQuery('<div />')
			.text('There are no comments on this post.')
		);

		return;
	};

	async FetchPage(PageNum) {
	/*//
	@date 2020-12-11
	//*/

		let that = this;
		let Result = null;

		return (
			new Promise(function(Next,Fail){
				Atlantis.Request({
					'Method': 'LIST',
					'URL': '/api/v1/post/comment',
					'Data': { 'ID': that.PostID },
					'OnSuccess': function(Result){ Next(Result); return; },
					'OnError': function() { Fail(); return; }
				});
			})
			.then(function(Result){ return Result; })
		);
	};

	ShowLoading() {
	/*//
	@date 2020-12-11
	//*/

		this.Listing.addClass('d-none');
		this.Loading.removeClass('d-none');

		return;
	};

	ShowListing() {
	/*//
	@date 2020-12-11
	//*/

		this.Loading.addClass('d-none');
		this.Listing.removeClass('d-none');

		return;
	};

	LockForm() {
	/*//
	//*/

		this.Form
		.find('input,textarea,button')
		.prop('disabled','disabled')
		.addClass('disabled');

		return;
	};

	UnlockForm() {
	/*//
	//*/

		this.Form
		.find('input,textarea,button')
		.removeProp('disabled')
		.removeClass('disabled');

		return;
	};

	ClearForm() {
	/*//
	//*/

		this.Form
		.find('input,textarea')
		.val('');

		if(typeof grecaptcha === 'object')
		grecaptcha.reset();

		return;
	};

	OnSubmit() {
	/*//
	@date 2021-04-10
	//*/

		let Name = trim(this.InputName.val());
		let Content = trim(this.InputContent.val());
		let ReCaptcha = this.Form.find('.g-recaptcha-response').val();

		// come on man.

		if(!Content)
		return;

		this.LockForm();

		Atlantis.Request({
			'Method': 'POST',
			'URL': '/api/v1/post/comment',
			'Data': {
				'ID': this.PostID,
				'Name': Name,
				'Content': Content,
				'g-recaptcha-response': ReCaptcha
			},
			'OnSuccess': ((Result)=> this.OnSubmitted(Result))
		});

		return;
	};

	OnSubmitted() {
	/*//
	@date 2021-04-10
	//*/

		this.LoadPage(1);

		this.ClearForm();
		this.UnlockForm();

		return;
	};

	OnCommentToggle() {
	/*//
	@date 2021-04-10
	//*/

		this.Form
		.toggleClass('Hidden');

		return;
	}

};

export default Comments;
