import productService from './productService';
import productConstants from './productConstants';
import alertActions from '../Alerts/alertActions';

const {
	GETALL_REQUEST,
	GETALL_SUCCESS,
	GETALL_FAILURE,
} = productConstants;

function getAll() {
	function request() { return { type: GETALL_REQUEST }; }
	function success(products) { return { type: GETALL_SUCCESS, products }; }
	function failure() { return { type: GETALL_FAILURE }; }

	return (dispatch) => {
		dispatch(request());

		productService.getAll()
			.then(
				(products) => {
					dispatch(success(products));
					dispatch(alertActions.success('Loaded '));
				},
				(error) => {
					dispatch(failure());
					dispatch(alertActions.error(error.toString()));
				}
			);
	};
}


const productActions = {
	getAll,
};

export default productActions;
