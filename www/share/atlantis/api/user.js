
class UserAPI {

	static Delete(ID,OnSuccess) {
	/*//
	@date 2021-04-12
	//*/

		Atlantis.Request({
			Method: 'DELETE',
			URL: UserAPI.EndpointURL,
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
			URL: UserAPI.EndpointURL,
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
			URL: UserAPI.EndpointURL,
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
			URL: UserAPI.EndpointURL,
			Data: Dataset,
			OnSuccess: OnSuccess
		});

		return;
	};

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	static Overshadow(ID,OnSuccess) {
	/*//
	@date 2021-04-12
	//*/

		Atlantis.Request({
			Method: 'OVERSHADOW',
			URL: UserAPI.EndpointURL,
			Data: { ID: ID },
			OnSuccess: OnSuccess
		});

		return;
	};

	static Ban(ID,OnSuccess) {
	/*//
	@date 2021-04-12
	//*/

		Atlantis.Request({
			Method: 'BAN',
			URL: UserAPI.EndpointURL,
			Data: { ID: ID },
			OnSuccess: OnSuccess
		});

		return;
	};

	static Unban(ID,OnSuccess) {
	/*//
	@date 2021-04-12
	//*/

		Atlantis.Request({
			Method: 'UNBAN',
			URL: UserAPI.EndpointURL,
			Data: { ID: ID },
			OnSuccess: OnSuccess
		});

		return;
	};

};

UserAPI.EndpointURL = '/api/v1/user/entity';

export default UserAPI;
