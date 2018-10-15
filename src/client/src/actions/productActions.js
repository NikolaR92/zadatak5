import service from '../service';

const { productService, orderService } = service;
const GETALL_REQUEST = 'PRODUCTS_GETALL_REQUEST';
const GETALL_SUCCESS = 'PRODUCTS_GETALL_SUCCESS';
const GETALL_FAILURE = 'PRODUCTS_GETALL_FAILURE';

const ORDER_REQUEST = 'ORDER_REQUEST';
const ORDER_SUCCESS = 'ORDER_SUCCESS';
const ORDER_FAILURE = 'ORDER_FAILURE';

function getAll() {
	function request() { return { type: GETALL_REQUEST }; }
	function success(products) { return { type: GETALL_SUCCESS, products }; }
	function failure(error) { return { type: GETALL_FAILURE, error }; }

	return (dispatch) => {
		dispatch(request());

		productService.getAll()
			.then(
				products => dispatch(success(products)),
				error => dispatch(failure(error.toString()))
			);
	};
}


function order(productId) {
	function request(orderObject) { return { type: ORDER_REQUEST, orderObject }; }
	function success(orderSuccess) { return { type: ORDER_SUCCESS, orderSuccess }; }
	function failure(error) { return { type: ORDER_FAILURE, error }; }


	return (dispatch) => {
		dispatch(request({ productId }));

		orderService.order(productId)
			.then(
				orderSuccess => dispatch(success(orderSuccess)),
				error => dispatch(failure(error.toString()))
			);
	};
}

const productActions = {
	GETALL_REQUEST,
	GETALL_SUCCESS,
	GETALL_FAILURE,
	ORDER_REQUEST,
	ORDER_SUCCESS,
	ORDER_FAILURE,
	getAll,
	order,

};

export default productActions;
