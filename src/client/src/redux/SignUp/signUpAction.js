import alertActions from '../Alerts/alertActions';
import history from '../../js/history';
import signUpConstants from './signUpConstants';
import signUpService from './signUpService';

const {
	SIGNUP_REQUEST,
	SIGNUP_SUCCESS,
	SIGNUP_FAILURE,
} = signUpConstants;


/** Action for signing up user */
function signUp(user) {
	function request() { return { type: SIGNUP_REQUEST }; }
	function success() { return { type: SIGNUP_SUCCESS }; }
	function failure(error) { return { type: SIGNUP_FAILURE, error }; }

	return (dispatch) => {
		dispatch(request(user));

		signUpService.signUp(user)
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

const signUpAction = {
	signUp,
};

export default signUpAction;
