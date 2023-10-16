import { error } from "console";
import AppError from "../errors/App.erros";
import { NextFunction, Request, Response } from "express";

export const validatePermission = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { userId } = req.params;
  const { sub, admin } = res.locals;

  if (admin) return next();

  if (!userId === sub) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};
