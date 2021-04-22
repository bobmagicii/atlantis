import Util from '/share/atlantis/util.js';

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

		let DropContainer = (
			jQuery('<div />')
			.addClass('DropContainer')
		);

		this.Listing = (
			jQuery('<div />')
			.addClass('Listing')
			.addClass('HideTheLastHr')
		);

		(this.Container)
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

		// if using the drop container system mark the height
		// it needs to know.

		if(this.Form.parent().hasClass('DropContainer'))
		this.Form[0].style.setProperty(
			'--local-height',
			`-${this.Form.outerHeight()}px`
		);

		// bind some page level things.

		jQuery('.PostCommentToggle')
		.on('click',()=> this.OnCommentToggle());

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
			.text(`<${Comment.Name || 'Anonymous'}>`);

			Element
			.find('.CmdCommentDelete')
			.attr('data-comment-id',Comment.ID)
			.on('click',((Ev)=> this.OnCommentDelete(jQuery(Ev.currentTarget))));

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

		this.Listing.empty();

		jQuery('.PostCommentCount')
		.text('0');

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
				Util.Request({
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

		this.Listing.addClass('Hidden');

		jQuery('.PostCommentToggle')
		.addClass('Thinking');

		return;
	};

	ShowListing() {
	/*//
	@date 2020-12-11
	//*/

		this.Listing.removeClass('Hidden');

		jQuery('.PostCommentToggle')
		.removeClass('Thinking');

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
		.prop('disabled',false)
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

		Util.Request({
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

		jQuery('.PostCommentToggle:first')
		.trigger('click');

		return;
	};

	OnCommentToggle() {
	/*//
	@date 2021-04-10
	//*/

		this.Form
		.toggleClass('Hidden');

		if(this.Form.hasClass('Hidden'))
		jQuery('.PostCommentToggle')
		.addClass('Plus')
		.removeClass('Minus');

		else
		jQuery('.PostCommentToggle')
		.addClass('Minus')
		.removeClass('Plus');

		return;
	};

	OnCommentDelete(Btn) {
	/*//
	@date 2021-04-10
	//*/

		let ID = parseInt(Btn.attr('data-comment-id'));
		let Todo = ()=> Util.Request({
			'Method': 'DELETE',
			'URL': '/api/v1/post/comment',
			'Data': { CommentID: ID },
			'OnSuccess': (()=> this.LoadPage(this.Page))
		});

		if(confirm(`Really delete comment #${ID}?`))
		Todo();

		return;
	}

};

export default Comments;
