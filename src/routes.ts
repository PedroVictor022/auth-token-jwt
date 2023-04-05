import { Router } from "express";
import UserController from "./controller/UserController";

const userController = new UserController();

export const route = Router();

route.post("/create", userController.store);
route.get("/users", userController.index);