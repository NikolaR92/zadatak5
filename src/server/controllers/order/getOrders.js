const { UserSesion, Order } = require('../../models');

module.exports = {
	getOrders(req, res) {
		const { params } = req;
		const { token } = params;

		// check if user is logged in
		return UserSesion.findAll({ where: { token, isDeleted: false } })
			.then((sesions) => {
				if (sesions.length !== 1) {
					return res.status(400).send({
						success: false,
						message: 'Error: Invalid',
					});
				}
				const sesion = sesions[0];
				// if tokken is valid get all orders for that user
				return Order.findAll({ where: { isDeleted: false, userId: sesion.userId } })
					.then(orders => res.status(201).send(orders))
					.catch(error => res.status(400).send(error));
			})
			.catch(error => res.status(400).send(error));
	},
};
