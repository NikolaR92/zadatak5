
const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';
const CLEAR = 'CLEAR';

function success(message) {
	return { type: SUCCESS, message };
}

function error(message) {
	return { type: ERROR, message };
}

function clear() {
	return { type: CLEAR };
}

const alertActions = {
	SUCCESS,
	ERROR,
	CLEAR,
	success,
	error,
	clear,
};

export default alertActions;
