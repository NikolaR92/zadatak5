/**
 * Account Action Module
 * @module src/redux/Account/accountActions
 */

import accountConstants from './accountConstants';

const { SIGNIN, SIGNOUT } = accountConstants;


function signed(token) {
	localStorage.setItem('token', token);
	return { type: SIGNIN };
}

function signedOut() {
	localStorage.removeItem('token');
	return { type: SIGNOUT };
}

const accountActions = {
	signed,
	signedOut,
};

export default accountActions;
