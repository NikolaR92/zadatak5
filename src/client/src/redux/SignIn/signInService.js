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


function signIn(email, password) {
	const requestOption = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, password }),
	};

	return fetch(`${config.path}/api/account/signin`, requestOption)
		.then(handleResponse);
}

const signInService = {
	signIn,
};

export default signInService;
