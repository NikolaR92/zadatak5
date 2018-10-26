import { List } from 'immutable';
import actions from '../actions';

const { orderActions } = actions;

const initialStateOrders = {
	loading: false,
	items: List(),
	error:''
}

function orders(state = initialStateOrders, action) {
	switch (action.type) {
	case orderActions.ORDERS_GETALL_REQUEST:
		return {
			...state,
			loading: true,
		};
	case orderActions.ORDERS_GETALL_SUCCESS:
		return {
			...state,
			loading:false,
			items: List(action.orders),
		};
	case orderActions.ORDERS_GETALL_FAILURE:
		return {
			...state,
			loading:false,
			error: action.error,
		};
	case orderActions.ORDER_DELETE_REQUEST:
		return {
			...state,
			items: List(state.items.map(order => (order.id === action.id
				? { ...order, delete: true }
				: order))),
		};
	case orderActions.ORDER_DELETE_SUCCESS:
		return {
			...state,
			items: state.items.filter(order => order.id !== action.id),
		};
	case orderActions.ORDER_DELETE_FAILURE:
		return {
			...state,
			items: state.items.map(order => (order.id === action.id
				? { ...order, orderError: action.error }
				: order)),
		};
	default:
		return state;
	}
}


export default orders;
