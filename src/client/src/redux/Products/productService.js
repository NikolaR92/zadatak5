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


function getAll() {
	const requestOptions = {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	};
	return fetch(`${config.path}/api/product`, requestOptions)
		.then(handleResponse);
}

const productService = {
	getAll,
};

export default productService;
