import { fromJS } from 'immutable';
import signOutConstants from './signOutConstants';

const {
	SIGNOUT_REQUEST,
	SIGNOUT_SUCCESS,
	SIGNOUT_FAILURE,
} = signOutConstants;

const initialState = fromJS({ signingOut: false, message: '', error: '' });

function signOut(state = initialState, action) {
	switch (action.type) {
	case SIGNOUT_REQUEST:
		return state.set('signingOut', true);
	case SIGNOUT_SUCCESS:
		return state.set('signingOut', false).set('message', action.message);
	case SIGNOUT_FAILURE:
		return state.set('signingOut', false).set('error', action.error);
	default:
		return state;
	}
}

export default signOut;
