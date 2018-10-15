const { signUp } = require('./signup');
const { signIn } = require('./signin');
const { logout } = require('./logout');
const { verify } = require('./verify');
const { deleteAccount } = require('./delete');

module.exports = {
	signUp,
	signIn,
	logout,
	verify,
	deleteAccount,
};
