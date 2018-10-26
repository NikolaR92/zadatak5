import actions from '../actions';

const { signinAction, logoutAction } = actions;
const token = localStorage.getItem('token');
const initialState = token ? { loggedIn: true, token:token,loggingIn:false } : {loggedIn:false, token:'',loggingIn:false};


function authentication(state = initialState, action) {
	switch (action.type) {
	case signinAction.SIGNIN_REQUEST:
		return {
			loggingIn:true,
			loggedIn: true,
			token: action.token,
		};
	case signinAction.SIGNIN_SUCCESS:
		return {
			loggingIn:false,
			loggedIn: true,
			token: action.token,
		};
	case signinAction.SIGNIN_FAILURE:
		return {
			loggingIn:false,
			loggedIn:false,
			token:''
		};
	case logoutAction.LOGOUT_SUCCESS:
		return {
			loggingIn:false,
			loggedIn: false,
			token:'',
		};
	default:
		return state;
	}
}

export default authentication;
