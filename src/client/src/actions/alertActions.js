/**
 * Alert Action Module
 * @module src/actions/alertActions
 */

/** START - Constants for Alert Actions */
const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';
const CLEAR = 'CLEAR';
/** END - Constants for Alert Actions */


/** START - Functions for Alert Actions */
/** Function that returns action for success
 * @param {string} message - Message of successfully operation
 * @return {Object} - Action for successfully operation
 */
function success(message) {
	return { type: SUCCESS, message };
}

/** Function that returns action for error
 * @param {string} message - Message of error during a operation
 * @return {Object} - Action for error
 */
function error(message) {
	return { type: ERROR, message };
}

/** Function that clears messages at start of site */
function clear() {
	return { type: CLEAR };
}
/** END - Functions for Alert Actions */

const alertActions = {
	SUCCESS,
	ERROR,
	CLEAR,
	success,
	error,
	clear,
};

export default alertActions;
