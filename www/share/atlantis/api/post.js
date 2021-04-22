import Util from '/share/atlantis/util.js';

class PostAPI {

	static Delete(ID,OnSuccess) {
	/*//
	@date 2021-04-12
	//*/

		Util.Request({
			Method: 'DELETE',
			URL: PostAPI.EndpointURL,
			Data: { ID: ID },
			OnSuccess: OnSuccess
		});

		return;
	};

	static Get(ID,OnSuccess) {
	/*//
	@date 2021-04-12
	//*/

		Util.Request({
			Method: 'GET',
			URL: PostAPI.EndpointURL,
			Data: { ID: ID },
			OnSuccess: OnSuccess
		});

		return;
	};

	static Patch(ID,Dataset,OnSuccess) {
	/*//
	@date 2021-04-12
	//*/

		Dataset.ID = ID;

		Util.Request({
			Method: 'PATCH',
			URL: PostAPI.EndpointURL,
			Data: Dataset,
			OnSuccess: OnSuccess
		});

		return;
	};

	static Post(Dataset,OnSuccess) {
	/*//
	@date 2021-04-12
	//*/

		Util.Request({
			Method: 'POST',
			URL: PostAPI.EndpointURL,
			Data: Dataset,
			OnSuccess: OnSuccess
		});

		return;
	};

};

PostAPI.EndpointURL = '/api/v1/post/entity';

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export default PostAPI;
