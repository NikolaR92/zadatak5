import service from '../service';
import history from '../js/history';

const { userService } = service;


const USERS_DELETE_REQUEST = 'USERS_DELETE_REQUEST';
const USERS_DELETE_SUCCESS = 'USERS_DELETE_SUCCESS';
const USERS_DELETE_FAILURE = 'USERS_DELETE_FAILURE';


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
