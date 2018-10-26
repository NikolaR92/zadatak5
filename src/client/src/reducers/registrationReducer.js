import actions from '../actions';

const { signupAction } = actions;
function registration(state = { registering: false }, action) {
	switch (action.type) {
	case signupAction.SIGNUP_REQUEST:
		return { registering: true };
	case signupAction.SIGNUP_SUCCESS:
		return { registering:false};
	case signupAction.SIGNUP_FAILURE:
		return {registering:false};
	default:
		return state;
	}
}

export default registration;
