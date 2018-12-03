import { fromJS } from 'immutable';
import deleteUserConstants from './deleteUserConstants';

const {
	DELETE_USER_REQUEST,
	DELETE_USER_SUCCESS,
	DELETE_USER_FAILURE,
} = deleteUserConstants;


function deleteUser(state = fromJS({ deleting: false }), action) {
	switch (action.type) {
	case DELETE_USER_REQUEST:
		return state.set('deleting', true);
	case DELETE_USER_SUCCESS:
		return state.set('deleting', true);
	case DELETE_USER_FAILURE:
		return state.set('deleting', true);
	default:
		return state;
	}
}


export default deleteUser;
