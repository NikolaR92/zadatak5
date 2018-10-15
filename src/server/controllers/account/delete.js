const { User, UserSesion } = require('../../models');


module.exports = {
	deleteAccount(req, res) {
		const { params } = req;
		const { token } = params;

		return UserSesion.findAll({ where: { token, isDeleted: false } })
			.then((sesions) => {
				if (sesions.length !== 1) {
					return res.status(400).send({
						success: false,
						message: 'Error; Invalid',
					});
				}
				const sesion = sesions[0];
				const { userId } = sesion;

				return User.find({ where: { id: userId, isDeleted: false } })
					.then((user) => {
						user.isDeleted = true;
						return user.save()
							.then(() => {
								sesion.isDeleted = true;
								return sesion.save()
									.then(() => res.status(201).send({
										success: true,
										message: 'Account deleted',
									}));
							})
							.catch(error => res.status(400).send(error));
					})
					.catch(error => res.status(400).send(error));
			})
			.catch(error => res.status(400).send(error));
	},

};
