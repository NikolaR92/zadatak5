import actions from '../actions';

const { deleteAction } = actions;


function deleteUser(state = {deleting:false }, action) {
	switch (action.type) {
	case deleteAction.USERS_DELETE_REQUEST:
		return {
			deleting: true,
		};
	case deleteAction.USERS_DELETE_SUCCESS:
		return {
			deleting: false,
		};
	case deleteAction.USERS_DELETE_FAILURE:
		return {
			deleting: false,
		};
	default:
	}
	return state;
}


export default deleteUser;
