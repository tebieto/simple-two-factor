import { Request, Response } from "express";

export const authenticateUser = (req: Request, res: Response) => {
  console.log(req.body);
};
