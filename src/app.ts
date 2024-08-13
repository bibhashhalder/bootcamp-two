import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();
app.use(express.json());
app.use(cors());
const getControll = (req: Request, res: Response) => {
  res.send("Thsi server is running");
};
app.get("/", getControll);

export default app;
