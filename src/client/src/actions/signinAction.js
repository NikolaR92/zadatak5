import service from '../service';
import alertActions from './alertActions';
import history from '../js/history';

const { userService } = service;


// START - User signin constants
const SIGNIN_REQUEST = 'USERS_SIGNIN_REQUEST';
const SIGNIN_SUCCESS = 'USERS_SIGNIN_SUCCESS';
const SIGNIN_FAILURE = 'USERS_SIGNIN_FAILURE';
// END - User signin constants

// Action for signin a User with email and password
function signin(email, password) {
	function request(emailObject) { return { type: SIGNIN_REQUEST, emailObject }; }
	function success(token) { return { type: SIGNIN_SUCCESS, token }; }
	function failure(error) { return { type: SIGNIN_FAILURE, error }; }

	return (dispatch) => {
		dispatch(request({ email }));
		userService.signin(email, password)
			.then(
				(token) => {
					dispatch(success(token));
					history.push('/');
				},
				(error) => {
					dispatch(failure(error.toString()));
					dispatch(alertActions.error(error.toString()));
				}
			);
	};
}

const signinAction = {
	SIGNIN_REQUEST,
	SIGNIN_SUCCESS,
	SIGNIN_FAILURE,
	signin,
};

export default signinAction;
