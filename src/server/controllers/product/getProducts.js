const { Product, UserSesion } = require('../../models');


module.exports = {
	getProducts(req, res) {
		const { params } = req;
		const { token } = params;

		/** check if user is loged in */
		return UserSesion.findAll({ where: { token, isDeleted: false } })
			.then((sesions) => {
				if (sesions.length !== 1) {
					return res.status(400).send({
						success: false,
						message: 'Error: Invalide',
					});
				}

				/** return list of all products */
				return Product.findAll()
					.then((products) => {
						console.log('Proslo');
						res.status(201).send(products);
					})
					.catch(error => res.status(400).send(error));
			})
			.catch(error => res.status(400).send(error));
	},
};
