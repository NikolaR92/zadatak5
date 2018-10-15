import actions from '../actions';

const { deleteAction } = actions;


function orders(state = { }, action) {
	switch (action.type) {
	case deleteAction.USERS_DELETE_REQUEST:
		return {
			deleting: true,
		};
	case deleteAction.USERS_DELETE_SUCCESS:
		return {
			deleting: true,
		};
	case deleteAction.USERS_DELETE_FAILURE:
		return {
			deleting: false,
		};
	default:
	}
	return state;
}


export default orders;
