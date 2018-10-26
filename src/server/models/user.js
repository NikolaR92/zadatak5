const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		isDeleted: {
			type: DataTypes.BOOLEAN,
			default: false,
		},

	}, {});


	User.prototype.generateHash = function generateHash(password) {
		return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
	};

	User.prototype.validPassword = function validPassword(password) {
		return bcrypt.compareSync(password, this.password);
	};

	return User;
};
