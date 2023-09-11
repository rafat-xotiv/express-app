"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn("users", "address", {
			type: Sequelize.STRING,
			allowNull: true, // Modify as needed
			// Add a maximum length constraint
			validate: {
				len: [0, 255], // Adjust the maximum length as needed
			},
		});
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add reverting commands here.
		 *
		 * Example:
		 * await queryInterface.dropTable('users');
		 */
	},
};
