import { Model, DataTypes } from "sequelize";
import { sequelize } from "../connection";
import Organization from "./organization";

class User extends Model {
	public id!: number;
	public firstName!: string;
	public lastName!: string;
}

User.init(
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
		organizationId: {
			type: DataTypes.INTEGER,
			references: {
				model: Organization,
				key: "id",
			},
		},
	},
	{
		sequelize,
		tableName: "users", // your table name
	},
);

export default User;
