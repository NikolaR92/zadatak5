// 'use strict';

module.exports = (sequelize, DataTypes) => {
	const Order = sequelize.define('Order', {
		dateDelivery: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		price: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		quantity: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		isDeleted: DataTypes.BOOLEAN,
		isDelivered: DataTypes.BOOLEAN,
	}, {});
	Order.associate = function associate(models) {
		// associations can be defined here
		Order.belongsTo(models.Product, {
			foreignKey: 'productId',
			onDelete: 'CASCADE',
		});
		Order.belongsTo(models.User, {
			foreignKey: 'userId',
			onDelete: 'CASCADE',
		});
	};
	return Order;
};
