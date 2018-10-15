// 'use strict';

const randomToken = require('random-token');

module.exports = (sequelize, DataTypes) => {
	const UserSesion = sequelize.define('UserSesion', {
		isDeleted: {
			type: DataTypes.BOOLEAN,
			default: false,
		},
		token: DataTypes.STRING,
	}, {});
	UserSesion.associate = function associate(models) {
		// associations can be defined here
		UserSesion.belongsTo(models.User, {
			foreignKey: 'userId',
			onDelete: 'CASCADE',
		});
	};

	// We use this function for crating token based on email
	UserSesion.prototype.generateToken = function generateHash() {
		return randomToken(10);
	};

	return UserSesion;
};
