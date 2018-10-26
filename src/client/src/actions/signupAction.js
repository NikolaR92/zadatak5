import service from '../service';
import alertActions from './alertActions';
import history from '../js/history';

const { userService } = service;


/** START - User signup constants */
const SIGNUP_REQUEST = 'USERS_SIGNUP_REQUEST';
const SIGNUP_SUCCESS = 'USERS_SIGNUP_SUCCESS';
const SIGNUP_FAILURE = 'USERS_SIGNUP_FAILURE';
/** END - USer signup constants */


/** Action for signing up user */
function signup(user) {
	function request(userObject) { return { type: SIGNUP_REQUEST, userObject }; }
	function success() { return { type: SIGNUP_SUCCESS }; }
	function failure(error) { return { type: SIGNUP_FAILURE, error }; }

	return (dispatch) => {
		dispatch(request(user));

		userService.signup(user)
			.then(
				() => {
					dispatch(success());
					history.push('/signin');
					dispatch(alertActions.success('Registration successful'));
				},
				(error) => {
					dispatch(failure(error.toString()));
					dispatch(alertActions.error(error.toString()));
				}
			);
	};
}

const signupAction = {
	SIGNUP_REQUEST,
	SIGNUP_SUCCESS,
	SIGNUP_FAILURE,
	signup,
};

export default signupAction;
