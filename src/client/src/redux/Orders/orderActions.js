/**
 * Order Action Module
 * @module src/actions/deleteActions
 */

import orderService from './orderService';
import orderConstants from './orderConstants';
import alertActions from '../Alerts/alertActions';

const {
	ORDERS_GETALL_REQUEST,
	ORDERS_GETALL_SUCCESS,
	ORDERS_GETALL_FAILURE,
	ORDER_DELETE_REQUEST,
	ORDER_DELETE_SUCCESS,
	ORDER_DELETE_FAILURE,
	CREATE_ORDER_SUCCESS,
	CREATE_ORDER_REQUEST,
	CREATE_ORDER_FAILURE,
} = orderConstants;


function getAll() {
	function request() { return { type: ORDERS_GETALL_REQUEST }; }
	function success(orders) { return { type: ORDERS_GETALL_SUCCESS, orders }; }
	function failure() { return { type: ORDERS_GETALL_FAILURE }; }
	return (dispatch) => {
		dispatch(request());

		orderService.getAll()
			.then(
				(orders) => {
					dispatch(success(orders));
					dispatch(alertActions.success('All Product have available'));
				},
				(error) => {
					dispatch(failure());
					dispatch(alertActions.error(error.toString()));
				}
			);
	};
}


function orderDelete(orderId) {
	function request() { return { type: ORDER_DELETE_REQUEST }; }
	function success(id) { return { type: ORDER_DELETE_SUCCESS, id }; }
	function failure() { return { type: ORDER_DELETE_FAILURE }; }

	return (dispatch) => {
		dispatch(request());

		orderService.orderDelete(orderId)
			.then(
				() => {
					dispatch(success(orderId));
					dispatch(alertActions.success('Order was successfully deleted'));
				},
				(error) => {
					dispatch(failure());
					dispatch(alertActions.error(error.toString()));
				}
			);
	};
}

function order(productId) {
	function request() { return { type: CREATE_ORDER_REQUEST }; }
	function success(oneOrder) { return { type: CREATE_ORDER_SUCCESS, oneOrder }; }
	function failure() { return { type: CREATE_ORDER_FAILURE }; }


	return (dispatch) => {
		dispatch(request());

		orderService.order(productId)
			.then(
				(response) => {
					dispatch(success(response));
					dispatch(alertActions.success('Product was successfully ordered'));
				},
				(error) => {
					dispatch(failure());
					dispatch(alertActions.error(error.toString()));
				}
			);
	};
}

const orderActions = {
	getAll,
	orderDelete,
	order,
};


export default orderActions;
