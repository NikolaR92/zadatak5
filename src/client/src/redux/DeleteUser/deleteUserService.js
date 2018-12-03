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


function deleteUser() {
	const requestOption = {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	};
	const token = localStorage.getItem('token');
	return fetch(`${config.path}/api/account/delete/${token}`, requestOption)
		.then(handleResponse);
}


const deleteUserService = {
	deleteUser,
};

export default deleteUserService;
