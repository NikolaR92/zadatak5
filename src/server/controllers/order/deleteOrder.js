const { UserSesion, Order } = require('../../models');


module.exports = {
	deleteOrder(req, res) {
		const { params, body } = req;
		const { token } = params;
		const { orderId } = body;

		// check if user is logged in
		return UserSesion.findAll({ where: { token, isDeleted: false } })
			.then((sesions) => {
				if (sesions.length !== 1) {
					return res.status(400).send({
						success: false,
						message: 'Error: Invalid',
					});
				}
				// if tokken is valid get all orders for that user
				return Order.find({ where: { id: orderId, isDeleted: false } })
					.then((order) => {
						order.isDeleted = true;
						return order.save()
							.then(() => res.status(201).send({
								success: true,
								message: 'Order has been deleted',
							}))
							.catch(error => res.status(400).send(error));
					})
					.catch(error => res.status(400).send(error));
			})
			.catch(error => res.status(400).send(error));
	},
};
