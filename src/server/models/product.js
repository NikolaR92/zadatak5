// 'use strict';

module.exports = (sequelize, DataTypes) => {
	const Product = sequelize.define('Product', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		quantity: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		price: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		isDeleted: DataTypes.BOOLEAN,
	}, {});

	return Product;
};
