const { User } = require('../../models');

module.exports = {
	signUp(req, res) {
		const { body } = req;
		const { firstName, lastName, password } = body;
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


		// Verify email doesn't exist
		return User.find({ where: { email } })
			.then((account) => {
				if (account) {
					return res.status(400).send({
						success: false,
						message: 'Error: Account already exists',
					});
				}
				// generating new user
				const newUser = new User();
				newUser.firstName = firstName;
				newUser.lastName = lastName;
				newUser.email = email;
				newUser.password = newUser.generateHash(password);
				newUser.isDeleted = false;
				// save new user
				return newUser.save()
					.then(() => res.status(201).send({
						success: true,
						message: 'Signed Up',
					}))
					.catch(error => res.status(400).send(error));
			})
			.catch(error => res.status(400).send(error));
	},

};
