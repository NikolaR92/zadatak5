// 'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.createTable('Orders', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER,
		},
		dateDelivery: {
			type: Sequelize.DATE,
		},
		price: {
			type: Sequelize.INTEGER,
		},
		quantity: {
			type: Sequelize.INTEGER,
		},
		isDeleted: {
			type: Sequelize.BOOLEAN,
		},
		isDelivered: {
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
		userId: {
			type: Sequelize.INTEGER,
			onDelete: 'CASCADE',
			references: {
				model: 'Users',
				key: 'id',
				as: 'userId',
			},
		},
		productId: {
			type: Sequelize.INTEGER,
			onDelete: 'CASCADE',
			references: {
				model: 'Products',
				key: 'id',
				as: 'productId',
			},
		},

	}),
	down: queryInterface => queryInterface.dropTable('Orders'),
};
