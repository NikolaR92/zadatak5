import fetch from 'cross-fetch';
import config from '../../config/config';
import userService from '../SignOut/signOutService';

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


function order(productId) {
	const dateDelivery = new Date();
	const numberOfDaysToAdd = 2;
	dateDelivery.setDate(dateDelivery.getDate() + numberOfDaysToAdd);
	const quantity = 1;
	const token = localStorage.getItem('token');
	const requestOption = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ productId, dateDelivery, quantity }),
	};

	return fetch(`${config.path}/api/order/create/${token}`, requestOption)
		.then(handleResponse);
}

function getAll() {
	const requestOptions = {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	};
	const token = localStorage.getItem('token');
	return fetch(`${config.path}/api/order/all/${token}`, requestOptions)
		.then(handleResponse);
}

function orderDelete(orderId) {
	const token = localStorage.getItem('token');
	const requestOption = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ orderId }),
	};

	return fetch(`${config.path}/api/order/delete/${token}`, requestOption)
		.then(handleResponse);
}


const orderService = {
	order,
	getAll,
	orderDelete,
};

export default orderService;
