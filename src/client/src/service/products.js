import fetch from 'cross-fetch';
import config from '../config/config';
import userService from './user';


function handleResponse(response) {
	return response.text().then((text) => {
		const data = text && JSON.parse(text);
		if (!response.ok) {
			if (response.status === 401) {
				userService.logout();
			}

			const error = (data && data.message) || response.statusText;
			return Promise.reject(error);
		}
		return data;
	});
}


function getAll() {
	const requestOptions = {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	};
	const token = localStorage.getItem('token');
	return fetch(`${config.path}/api/product/${token}`, requestOptions).then(handleResponse);
}

const productService = {
	getAll,
};

export default productService;
