import fetch from 'cross-fetch';
import config from '../../config/config';


function handleResponse(response) {
	return response.text().then((text) => {
		const data = text && JSON.parse(text);
		if (!response.ok) {
			const error = (data && data.message) || response.statusText;
			return Promise.reject(error);
		}
		return data;
	});
}


function signUp(account) {
	const requestOption = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(account),
	};

	return fetch(`${config.path}/api/account/signup`, requestOption)
		.then(handleResponse);
}

const signUpService = {
	signUp,
};

export default signUpService;
