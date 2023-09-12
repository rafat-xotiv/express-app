import { Request, Response } from "express";
import { sequelize } from "../connection";
import User from "../models/user";
import { handleResponse } from "../responseHandler";

const getUser = (req: Request, res: Response) => {
	handleResponse(res, "Hello World");
};

const createUser = async (req: Request, res: Response) => {
	const { name, email } = req.body;
	let transaction = null;
	try {
		transaction = await sequelize.transaction();
		const user = await User.create({ name, email }, { transaction });
		await transaction.commit();

		handleResponse(res, user, 201);
	} catch (error) {
		if (transaction) {
			await transaction.rollback();
		}
		console.error(error);
		handleResponse(res, { error: "Internal server error" }, 500);
	}
};

export default { getUser, createUser };
