const { account, product, order } = require('../controllers');

module.exports = (app) => {
	app.get('/api', (req, res) => res.status(200).send({
		message: 'Welcome to the API',
	}));

	/** Start - Account route */
	/** Route for signing up a new user */
	app.post('/api/account/signup', account.signUp);
	/** Route for signing in a user */
	app.post('/api/account/signin', account.signIn);
	/** Route for deleting user sesion */
	app.get('/api/account/logout/:token', account.logout);
	/** Route for checking if token is good */
	app.get('/api/account/verify/:token', account.verify);
	/** Route for deleting account */
	app.get('/api/account/delete/:token', account.deleteAccount);
	/** END - User route */

	/** Start - Product routes */
	/** Route for getting all the products */
	app.get('/api/product/:token', product.getProducts);
	/** END - Product routes */

	/** Start - Order routes */
	/** Route for creating new order */
	app.post('/api/order/create/:token', order.createOrder);
	/** Route for getting all orders */
	app.get('/api/order/all/:token', order.getOrders);
	/** Route for deleting order */
	app.post('/api/order/delete/:token', order.deleteOrder);
	/** END - Order route */
};
