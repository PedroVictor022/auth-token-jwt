import { Request, Response } from "express";
import prisma from "../utils/prismaClient";
import { hash } from "bcryptjs";

class UserController {

  async index(req: Request, res: Response) {
    const users = await prisma.user.findMany();
    return res.json(users);
  }

  async store(req: Request, res: Response) {
    const { name, email, password } = req.body;

    // create a encrypted password
    const hash_password = await hash(password, 8);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hash_password
      }
    })
    return res.json(user);
  }
};

export default UserController;