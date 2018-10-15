import actions from '../actions';

const { signinAction, logoutAction } = actions;
const token = localStorage.getItem('token');
const initialState = token ? { loggedIn: true, token } : {};


function authentication(state = initialState, action) {
	switch (action.type) {
	case signinAction.SIGNIN_REQUEST:
		return {
			loggedIn: true,
			token: action.token,
		};
	case signinAction.SIGNIN_SUCCESS:
		return {
			loggedIn: true,
			token: action.token,
		};
	case signinAction.SIGNIN_FAILURE:
		return {};
	case logoutAction.LOGOUT_SUCCESS:
		return {
			loggedIn: false,
		};
	default:
		return state;
	}
}

export default authentication;
