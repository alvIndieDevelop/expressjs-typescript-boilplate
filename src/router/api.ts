import express, { Router, Request, Response } from "express";

import { API } from "../controller";

const api: Router = express.Router();
const controller = new API();

api.get("/", async (req: Request, res: Response) => {
  try {
    const result: string = await controller.holaMundo();
    return res.send(result);
  } catch (error: any) {
    return res.status(402).send(error.message);
  }
});

export default api;
