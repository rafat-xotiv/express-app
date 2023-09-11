// src/models/User.ts
import { Model, DataTypes } from "sequelize";
import { sequelize } from "../connection";

class Organization extends Model {
	public id!: number;
	public firstName!: string;
	public lastName!: string;
}

Organization.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
	},
	{
		sequelize,
		tableName: "organization", // your table name
	},
);

export default Organization;
