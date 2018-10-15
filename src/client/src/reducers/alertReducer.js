import actions from '../actions';

const { alertActions } = actions;
function alert(state = {}, action) {
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
		return {};
	default:
		return state;
	}
}


export default alert;
