import express, { Request, Response, Router } from "express";
import { sequelize } from "../connection";
import User from "../models/user";

const getUser = (req: Request, res: Response) => {
	res.json("Hello World");
};

const createUser = async (req: Request, res: Response) => {
	const { name, email } = req.body;
	let transaction = null;
	try {
		transaction = await sequelize.transaction();
		const user = await User.create({ name, email }, { transaction });
		await transaction.commit();

		res.status(201).json(user);
	} catch (error) {
		if (transaction) {
			await transaction.rollback();
		}
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
};

export default { getUser, createUser };
