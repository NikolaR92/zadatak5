import { fromJS } from 'immutable';
import signInConstants from './signInConstants';

const {
	SIGNIN_REQUEST,
	SIGNIN_SUCCESS,
	SIGNIN_FAILURE,
} = signInConstants;

const initialState = fromJS({ signingIn: false, error: '' });

function signIn(state = initialState, action) {
	switch (action.type) {
	case SIGNIN_REQUEST:
		return state.set('signingIn', true);
	case SIGNIN_SUCCESS:
		return state.set('signingIn', false);
	case SIGNIN_FAILURE:
		return state.set('signingIn', false).set('error', action.error);

	default:
		return state;
	}
}

export default signIn;
