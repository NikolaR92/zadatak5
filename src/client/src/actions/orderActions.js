import service from '../service';

const { orderService } = service;


const ORDERS_GETALL_REQUEST = 'ORDERS_GETALL_REQUEST';
const ORDERS_GETALL_SUCCESS = 'ORDERS_GETALL_SUCCESS';
const ORDERS_GETALL_FAILURE = 'ORDERS_GETALL_FAILURE';

const ORDER_DELETE_REQUEST = 'ORDER_DELETE_REQUEST';
const ORDER_DELETE_SUCCESS = 'ORDER_DELETE_SUCCESS';
const ORDER_DELETE_FAILURE = 'ORDER_DELETE_FAILURE';

function getAll() {
	function request() { return { type: ORDERS_GETALL_REQUEST }; }
	function success(orders) { return { type: ORDERS_GETALL_SUCCESS, orders }; }
	function failure(error) { return { type: ORDERS_GETALL_FAILURE, error }; }
	return (dispatch) => {
		dispatch(request());

		orderService.getAll()
			.then(
				orders => dispatch(success(orders)),
				error => dispatch(failure(error.toString()))
			);
	};
}


function orderDelete(orderId) {
	function request() { return { type: ORDER_DELETE_REQUEST }; }
	function success() { return { type: ORDER_DELETE_SUCCESS }; }
	function failure(error) { return { type: ORDER_DELETE_FAILURE, error }; }

	return (dispatch) => {
		dispatch(request({ orderId }));

		orderService.orderDelete(orderId)
			.then(
				() => dispatch(success()),
				error => dispatch(failure(error.toString()))
			);
	};
}

const orderActions = {
	ORDERS_GETALL_REQUEST,
	ORDERS_GETALL_SUCCESS,
	ORDERS_GETALL_FAILURE,
	ORDER_DELETE_REQUEST,
	ORDER_DELETE_SUCCESS,
	ORDER_DELETE_FAILURE,
	getAll,
	orderDelete,

};


export default orderActions;
