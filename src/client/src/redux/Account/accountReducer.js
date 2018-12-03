import { fromJS } from 'immutable';
import accountConstants from './accountConstants';

const { SIGNIN, SIGNOUT } = accountConstants;


const token = localStorage.getItem('token');

const initialState = token ? fromJS({ signedIn: true }) : fromJS({ signedIn: false });


function signed(state = initialState, action) {
	switch (action.type) {
	case SIGNIN: {
		return state.set('signedIn', true);
	}
	case SIGNOUT: {
		return state.set('signedIn', false);
	}
	default:
		return state;
	}
}

export default signed;
