import actions from '../actions';

const initialStateAlert = {
	type: '',
	message: ''
}

const { alertActions } = actions;
function alert(state = initialStateAlert, action) {
	switch (action.type) {
	case alertActions.SUCCESS:
		return {
			type: 'alert-success',
			message: action.message,
		};
	case alertActions.ERROR:
		return {
			type: 'alert-danger',
			message: action.message,
		};
	case alertActions.CLEAR:
		return initialStateAlert;
	default:
		return state;
	}
}


export default alert;
