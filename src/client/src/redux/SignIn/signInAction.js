import signInService from './signInService';
import alertActions from '../Alerts/alertActions';
import history from '../../js/history';
import signInConstants from './signInConstants';
import accountActions from '../Account/accountActions';

const {
	SIGNIN_REQUEST,
	SIGNIN_SUCCESS,
	SIGNIN_FAILURE,
} = signInConstants;

/** Action for signin a User with email and password */
function signIn(email, password) {
	function request() { return { type: SIGNIN_REQUEST }; }
	function success() { return { type: SIGNIN_SUCCESS }; }
	function failure(error) { return { type: SIGNIN_FAILURE, error }; }

	return (dispatch) => {
		dispatch(request({ email }));
		signInService.signIn(email, password)
			.then(
				(response) => {
					dispatch(success());
					dispatch(accountActions.signed(response.token));
					history.push('/products');
				},
				(error) => {
					dispatch(failure(error.toString()));
					dispatch(alertActions.error(error.toString()));
				}
			);
	};
}

const signInAction = {
	signIn,
};

export default signInAction;
