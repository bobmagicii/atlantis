Atlantis.BlogPost = {

	'Delete': function(PostID){

		(new Promise(function(Next,Fail){
			Atlantis.Request({
				'Method': 'DELETE',
				'URL': '/api/v1/post/entity',
				'Data': { 'ID': PostID },
				'OnSuccess': function(Result){
					Next(Result);
					return;
				}
			});
		}))
		.then(function(Result){
			if(typeof Result.Location === 'string') {
				location.href = Result.Location;
				return;
			}
			return;
		});

		return;
	}

};

jQuery(document)
.ready(function(){

	jQuery('.AtlantisActionPostDelete')
	.on('click',function(){
		let PostID = parseInt(jQuery(this).attr('data-post-id'));

		if(PostID > 0)
		if(confirm('Really delete this post? This cannot be undone.'))
		Atlantis.BlogPost.Delete(PostID);

		return false;
	});

	return;
});
