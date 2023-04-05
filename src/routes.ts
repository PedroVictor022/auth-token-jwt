import { Router } from "express";
import UserController from "./controller/UserController";
import AuthController from "./controller/AuthController";
import { AuthMiddlewares } from "./middlewares/auth";

const userController = new UserController();
const authController = new AuthController();

export const route = Router();

route.post("/create", userController.store);
route.get("/users", AuthMiddlewares,userController.index);
route.post("/auth", authController.authenticate);