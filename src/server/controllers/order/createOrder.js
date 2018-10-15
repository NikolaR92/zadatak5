const { Op } = require('sequelize');
const { UserSesion, Order, Product } = require('../../models');


module.exports = {
	createOrder(req, res) {
		const { body, params } = req;
		const { token } = params;
		const { productId, dateDelivery, quantity } = body;
		// Check if user is loged in

		return UserSesion.findAll({ where: { token, isDeleted: false } })
			.then((sesions) => {
				if (sesions.length !== 1) {
					return res.status(400).send({
						success: false,
						message: 'Error: Invalid',
					});
				}

				const sesion = sesions[0];
				const { userId } = sesion;
				// check if product exists
				return Product.find({
					where: {
						id: productId,
						isDeleted: false,
						quantity: {
							[Op.gt]: quantity,
						},
					},
				})
					.then((product) => {
						// create a new Order
						const newOrder = new Order();

						newOrder.userId = userId;
						newOrder.productId = productId;
						newOrder.dateDelivery = dateDelivery;
						newOrder.quantity = quantity;
						newOrder.price = quantity * product.price;
						newOrder.isDelivered = false;
						newOrder.isDeleted = false;

						return newOrder.save()
							.then(order => res.status(201).send(order))
							.catch(error => res.status(400).send(error));
					})
					.catch(error => res.status(400).send(error));
			})
			.catch(error => res.status(400).send(error));
	},
};
