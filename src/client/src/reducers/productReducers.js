import { List } from 'immutable';
import actions from '../actions';

const { productActions } = actions;
function products(state = { items: List() }, action) {
	switch (action.type) {
	case productActions.GETALL_REQUEST:
		return {
			loading: true,
		};
	case productActions.GETALL_SUCCESS:
		return {
			items: List(action.products),
		};
	case productActions.GETALL_FAILURE:
		return {
			error: action.error,
		};
	case productActions.ORDER_REQUEST:
		return {
			...state,
			items: state.items.map(product => (product.id === action.id
				? { ...product, ordering: true }
				: product)),
		};
	case productActions.ORDER_SUCCESS:
		return {
			...state,
			items: state.items.map(product => (product.id === action.id
				? { ...product, ordering: false }
				: product)),
		};
	case productActions.ORDER_FAILURE:
		return {
			...state,
			items: state.items.map(product => (product.id === action.id
				? { ...product, orderError: action.error }
				: product)),
		};
	default:
		return state;
	}
}


export default products;
