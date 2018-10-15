const { UserSesion } = require('../../models');

module.exports = {
	verify(req, res) {
		const { params } = req;
		const { token } = params;

		return UserSesion.findAll({
			where: { token, isDeleted: false },
		})
			.then((sesions) => {
				if (sesions.length !== 1) {
					return res.status(400).send({
						success: false,
						message: 'Error: Invalid',
					});
				}
				return res.status(201).send({
					success: true,
					message: 'Token is good',
				});
			})
			.catch(error => res.status(400).send(error));
	},
};
