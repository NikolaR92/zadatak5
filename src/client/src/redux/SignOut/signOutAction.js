import history from '../../js/history';
import signOutConstants from './signOutConstants';
import signOutService from './signOutService';
import alertActions from '../Alerts/alertActions';
import accountActions from '../Account/accountActions';

const {
	SIGNOUT_REQUEST,
	SIGNOUT_SUCCESS,
	SIGNOUT_FAILURE,
} = signOutConstants;

function signOut() {
	function request() { return { type: SIGNOUT_REQUEST }; }
	function success() { return { type: SIGNOUT_SUCCESS }; }
	function failure() { return { type: SIGNOUT_FAILURE }; }

	return (dispatch) => {
		dispatch(request());

		signOutService.signOut()
			.then(
				() => {
					dispatch(success());
					dispatch(alertActions.success('Successful sign out'));
					dispatch(accountActions.signedOut());
					history.push('/signin');
				},
				(error) => {
					dispatch(failure());
					dispatch(alertActions.error(error.toString()));
				}
			);
	};
}


const signOutAction = {
	signOut,
};

export default signOutAction;
