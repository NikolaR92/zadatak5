const { UserSesion } = require('../../models');

module.exports = {
	logout(req, res) {
	// geting token
		const { params } = req;
		const { token } = params;

		// Verify if token is one of a kind and it not deleted

		return UserSesion.find({ where: { token, isDeleted: false } })
			.then(
				(sesion) => {
					sesion.isDeleted = true;
					return sesion.save()
						.then(() => res.status(201).send({
							success: true,
							message: 'User Loged out',
						}))
						.catch(error => res.status(400).send(error));
				}
			)
			.catch(error => res.status(400).send(error));
	},
};
