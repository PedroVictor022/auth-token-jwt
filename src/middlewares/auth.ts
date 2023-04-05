import { Request, Response, NextFunction } from "express";
import { TokenExpiredError, decode, verify } from "jsonwebtoken";

type TokenPayloadProps = {
  id: string;
  iat: number;
  exp: number;
}

export function AuthMiddlewares(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  if(!authorization) {
    return res.status(401).json({ error: "Token not provide" });
  }

  const [, token] = authorization.split(" ");
  try {
    const decoded = verify(token, "secret");
    const { id } = decoded as TokenPayloadProps;
    req.userId = id;
    next();
  } catch(err) {
    return res.status(401).json({ error: "Token invalid" });
  }
}
