import { Sequelize } from "sequelize";
import databaseConfig from "./config/config.json";

const db = databaseConfig.development;

export const sequelize = new Sequelize(db.database, db.username, db.password, {
	host: db.host,
	dialect: "postgres", //we added it hardcoded but will change in future
});
