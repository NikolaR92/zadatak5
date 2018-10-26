/**
 * Delete Action Module
 * @module src/actions/deleteAction
 */

import service from '../service';
import history from '../js/history';

const { userService } = service;

/** START - User delete Constants */
const USERS_DELETE_REQUEST = 'USERS_DELETE_REQUEST';
const USERS_DELETE_SUCCESS = 'USERS_DELETE_SUCCESS';
const USERS_DELETE_FAILURE = 'USERS_DELETE_FAILURE';
/** END - User delete Constants */

/** Function that returns action for deleteing user*/
function deleteUser() {
	function request() { return { type: USERS_DELETE_REQUEST }; }
	function success() { return { type: USERS_DELETE_SUCCESS }; }
	function failure(error) { return { type: USERS_DELETE_FAILURE, error }; }

	return (dispatch) => {
		dispatch(request());

		userService.deleteUser()
			.then(
				() => {
					dispatch(success());
					history.push('/signup');
				},
				error => dispatch(failure(error.toString()))
			);
	};
}

const deleteAction = {
	USERS_DELETE_REQUEST,
	USERS_DELETE_SUCCESS,
	USERS_DELETE_FAILURE,
	deleteUser,
};


export default deleteAction;
