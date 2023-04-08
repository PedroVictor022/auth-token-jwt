import express, { json } from "express";
import { route } from "./routes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(route);

app.listen(3333, () => {
  console.log("Server is running on port http://localhost:3333");
})