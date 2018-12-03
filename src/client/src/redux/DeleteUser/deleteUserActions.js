import deleteUserService from './deleteUserService';
import alertActions from '../Alerts/alertActions';
import history from '../../js/history';
import deleteUserConstants from './deleteUserConstants';
import accountActions from '../Account/accountActions';

const {
	DELETE_USER_REQUEST,
	DELETE_USER_SUCCESS,
	DELETE_USER_FAILURE,
} = deleteUserConstants;

function deleteUser() {
	function request() { return { type: DELETE_USER_REQUEST }; }
	function success() { return { type: DELETE_USER_SUCCESS }; }
	function failure() { return { type: DELETE_USER_FAILURE }; }

	return (dispatch) => {
		dispatch(request());

		deleteUserService.deleteUser()
			.then(
				() => {
					localStorage.removeItem('token');
					dispatch(success());
					dispatch(alertActions.success('Your account was successfully deleted'));
					dispatch(accountActions.signedOut());
					history.push('/signup');
				},
				(error) => {
					dispatch(failure());
					dispatch(alertActions.error(error.toString()));
				}
			);
	};
}
const deleteUserActions = {
	deleteUser,
};

export default deleteUserActions;
