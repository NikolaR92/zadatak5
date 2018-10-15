// 'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.createTable('UserSesions', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER,
		},
		userId: {
			type: Sequelize.INTEGER,
			onDelete: 'CASCADE',
			references: {
				model: 'Users',
				key: 'id',
				as: 'userId',
			},
		},
		token: {
			type: Sequelize.STRING,
		},
		isDeleted: {
			type: Sequelize.BOOLEAN,
		},
		createdAt: {
			allowNull: false,
			type: Sequelize.DATE,
			defaultValue: Sequelize.NOW,
		},
		updatedAt: {
			allowNull: false,
			type: Sequelize.DATE,
			defaultValue: Sequelize.NOW,
		},
	}),
	down: queryInterface => queryInterface.dropTable('UserSesions'),
};
