import { fromJS } from 'immutable';
import productConstants from './productConstants';

const {
	GETALL_REQUEST,
	GETALL_SUCCESS,
	GETALL_FAILURE,
} = productConstants;

const initialStateProducts = fromJS({
	loading: false,
	items: [],
	error: '',
});

function products(state = initialStateProducts, action) {
	switch (action.type) {
	case GETALL_REQUEST:
		return state.set('loading', true);
	case GETALL_SUCCESS:
		return state.set('loading', false).set('items', fromJS(action.products));

	case GETALL_FAILURE:
		return state.set('loading', false);

	default:
		return state;
	}
}


export default products;
