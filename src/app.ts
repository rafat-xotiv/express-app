import express from "express";
import cors from "cors";
import { sequelize } from "./connection";
import User from "./models/user";
import Organization from "./models/organization";
import route from "./routes/userRoutes";
const PORT = process.env.PORT || 3000;

const app = express();

(async () => {
	try {
		await sequelize.authenticate();
		console.log("Connection has been established successfully.");
		// await Organization.sync();
		await Organization.sync();
		await User.sync();
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
})();

app.use(express.json());
app.use(cors());

app.use("/", route);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
