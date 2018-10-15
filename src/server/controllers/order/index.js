const { getOrders } = require('./getOrders');
const { createOrder } = require('./createOrder');
const { deleteOrder } = require('./deleteOrder');

module.exports = {
	getOrders,
	createOrder,
	deleteOrder,
};
