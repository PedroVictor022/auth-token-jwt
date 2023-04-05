import { Request, Response } from "express";
import prisma from "../utils/prismaClient";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

class AuthController {
  async authenticate(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if(!user) {
      return res.json({ error: "User not found" });
    }

    const isValuePass = await compare(password, user.password);

    if(!isValuePass) {
      return res.json({ error: "Password invalid" });
    }

    // Pass the ID first
    // "secret" - e colocado em .env e uma chave secreta da aplicacao
    const authToken = sign({ id: user.id}, "secret", { expiresIn: "1d" })

    return res.json({ user, authToken });
  }
}
export default AuthController;
