import fetch from 'cross-fetch';
import config from '../config/config';


function handleResponse(response) {
	return response.text().then((text) => {
		const data = text && JSON.parse(text);
		if (!response.ok) {
			if (response.status === 401) {
				// logout();
				// location.reload(true);
			}

			const error = (data && data.message) || response.statusText;
			return Promise.reject(error);
		}
		return data;
	});
}


function signin(email, password) {
	const requestOption = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, password }),
	};

	return fetch(`${config.path}/api/account/signin`, requestOption)
		.then(handleResponse)
		.then((response) => {
			if (response.token) {
				localStorage.setItem('token', response.token);
			}

			return response.token;
		});
}

function logout() {
	const requestOption = {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	};

	const token = localStorage.getItem('token');
	return fetch(`${config.path}/api/account/logout/${token}`, requestOption)
		.then(handleResponse)
		.then(() => {
			localStorage.removeItem('token');
		});
}

function signup(account) {
	const requestOption = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(account),
	};

	return fetch(`${config.path}/api/account/signup`, requestOption)
		.then(handleResponse);
}


function verify() {
	const requestOption = {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	};

	const token = localStorage.getItem('token');

	return fetch(`${config.path}/api/account/verify/${token}`, requestOption)
		.then(handleResponse);
}

function deleteUser() {
	const requestOption = {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	};

	const token = localStorage.getItem('token');

	return fetch(`${config.path}/api/account/delete/${token}`, requestOption)
		.then(() => {
			localStorage.removeItem('token');
		});
}

const userService = {
	signin,
	logout,
	signup,
	deleteUser,
	verify,
};


export default userService;
