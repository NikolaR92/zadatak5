module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.createTable('Products', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER,
		},
		name: {
			type: Sequelize.STRING,
		},
		quantity: {
			type: Sequelize.INTEGER,
		},
		price: {
			type: Sequelize.INTEGER,
		},
		isDeleted: {
			type: Sequelize.BOOLEAN,
			defaultValue: Sequelize.NOW,
		},
		createdAt: {
			allowNull: false,
			type: Sequelize.DATE,
			defaultValue: Sequelize.NOW,
		},
		updatedAt: {
			allowNull: false,
			type: Sequelize.DATE,
		},
	}),
	down: queryInterface => queryInterface.dropTable('Products'),
};
