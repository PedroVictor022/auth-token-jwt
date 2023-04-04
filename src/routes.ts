import { Router } from "express";

export const route = Router();

route.get("/", (req, res) => {
  return res.json({ message: "Hello World"})
})