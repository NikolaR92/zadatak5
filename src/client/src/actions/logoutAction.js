import service from '../service';
import history from '../js/history';

const { userService } = service;
/** START - User logout constant */
const LOGOUT_REQUEST = 'USERS_LOGOUT_REQUEST';
const LOGOUT_SUCCESS = 'USERS_LOGOUT_SUCCESS';
const LOGOUT_FAILURE = 'USERS_LOGOUT_FAILURE';
/** END - User logout constant */


function logout() {
	function request() { return { type: LOGOUT_REQUEST }; }
	function success() { return { type: LOGOUT_SUCCESS }; }
	function failure(error) { return { type: LOGOUT_FAILURE, error }; }

	return (dispatch) => {
		dispatch(request());

		userService.logout()
			.then(
				() => {
					dispatch(success());
				},
				error => dispatch(failure(error.toString()))
			);
	};
}
history.push('/signin');

const logoutAction = {
	LOGOUT_REQUEST,
	LOGOUT_SUCCESS,
	LOGOUT_FAILURE,
	logout,
};

export default logoutAction;
