import { fromJS } from 'immutable';
import signUpConstants from './signUpConstants';

const {
	SIGNUP_REQUEST,
	SIGNUP_SUCCESS,
	SIGNUP_FAILURE,
} = signUpConstants;

const InitialState = fromJS({
	signingUp: false,
});

function signUp(state = InitialState, action) {
	switch (action.type) {
	case SIGNUP_REQUEST:
		return state.set('signingUp', true);
	case SIGNUP_SUCCESS:
		return state.set('signingUp', false);
	case SIGNUP_FAILURE:
		return state.set('signingUp', false);
	default:
		return state;
	}
}

export default signUp;
