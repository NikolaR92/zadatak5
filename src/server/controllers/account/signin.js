const { User, UserSesion } = require('../../models');

module.exports = {

	signIn(req, res) {
		const { body } = req;
		const { password } = body;
		let { email } = body;

		if (!email) {
			return res.send({
				success: false,
				message: 'Error: Email cannot be empty',
			});
		}

		if (!password) {
			return res.send({
				success: false,
				message: 'Error: Password cannot be blank.',
			});
		}

		email = email.toLowerCase();
		email = email.trim();
		/** Verify email  exist */
		return User.findAll({ where: { email, isDeleted: false } })
			.then((accounts) => {
				if (accounts.length !== 1) {
					return res.status(400).send({
						success: false,
						message: 'Error: Invalid',
					});
				}
				/** check if password is valide */
				const account = accounts[0];

				if (!account.validPassword(password)) {
					return res.status(400).send({
						success: false,
						message: 'Error: invalid',
					});
				}

				/** User is valide and we create userSesion */
				const userSesion = new UserSesion();
				userSesion.userId = account.id;
				userSesion.isDeleted = false;
				userSesion.token = userSesion.generateToken();

				/** save new user */
				return userSesion.save()
					.then(sesion => res.status(201).send({
						success: true,
						message: 'Signed In',
						token: sesion.token,
					}))
					.catch(error => res.status(400).send(error));
			})
			.catch(error => res.status(400).send(error));
	},

};
