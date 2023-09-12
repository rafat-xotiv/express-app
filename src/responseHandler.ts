import { Response } from "express";

export function handleResponse(res: Response, data: unknown, statusCode = 200) {
	res.status(statusCode).json(data);
}
