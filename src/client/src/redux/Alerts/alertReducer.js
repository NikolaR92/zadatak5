import { fromJS } from 'immutable';
import alertConstants from './alertConstants';

const { SUCCESS, ERROR, CLEAR } = alertConstants;

const initialStateAlert = fromJS({
	type: '',
	message: '',
});


function alert(state = initialStateAlert, action) {
	switch (action.type) {
	case SUCCESS:
		return state.set('type', 'alert-success').set('message', action.message);
	case ERROR:
		return state.set('type', 'alert-danger').set('message', action.message);
	case CLEAR:
		return initialStateAlert;
	default:
		return state;
	}
}


export default alert;
