
class PostAPI {

	static Delete(ID,OnSuccess) {
	/*//
	@date 2021-04-12
	//*/

		Atlantis.Request({
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

		Atlantis.Request({
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

		Atlantis.Request({
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

		Atlantis.Request({
			Method: 'POST',
			URL: PostAPI.EndpointURL,
			Data: Dataset,
			OnSuccess: OnSuccess
		});

		return;
	};

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

};

PostAPI.EndpointURL = '/api/v1/post/entity';

export default PostAPI;
