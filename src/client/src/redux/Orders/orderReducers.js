import { fromJS } from 'immutable';
import orderConstants from './orderConstants';

const {
	ORDERS_GETALL_REQUEST,
	ORDERS_GETALL_SUCCESS,
	ORDERS_GETALL_FAILURE,
	ORDER_DELETE_REQUEST,
	ORDER_DELETE_SUCCESS,
	ORDER_DELETE_FAILURE,
	CREATE_ORDER_REQUEST,
	CREATE_ORDER_FAILURE,
	CREATE_ORDER_SUCCESS,
} = orderConstants;


const initialStateOrders = fromJS({
	loading: false,
	ordering: false,
	deleting: false,
	items: [],
});

function orders(state = initialStateOrders, action) {
	switch (action.type) {
	case ORDERS_GETALL_REQUEST:
		return state.set('loading', true);
	case ORDERS_GETALL_SUCCESS:
		return state.set('loading', false).set('items', fromJS(action.orders));
	case ORDERS_GETALL_FAILURE:
		return state.set('loading', false);
	case ORDER_DELETE_REQUEST: {
		return state.set('deleting', true);
	}
	case ORDER_DELETE_SUCCESS: {
		const newItems = state.get('items').filter(order => order.get('id') !== action.id);
		return state.set('items', newItems).set('deleting', false);
	}
	case ORDER_DELETE_FAILURE: {
		return state.set('deleting', false);
	}
	case CREATE_ORDER_REQUEST:
		return state.set('ordering', true);
	case CREATE_ORDER_SUCCESS: {
		const newItems = state.get('items').push(fromJS(action.order));
		return state.set('ordering', false).set(newItems);
	}
	case CREATE_ORDER_FAILURE:
		return state.set('ordering', false);

	default:
		return state;
	}
}


export default orders;
