import express, { Request, Response, Router } from "express";
import UserController from "../controller/userController";

const route: Router = express.Router();

route.get("/", UserController.getUser);

route.post("/", UserController.createUser);

export default route;
