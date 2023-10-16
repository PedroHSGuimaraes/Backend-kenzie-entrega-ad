import { NextFunction, Request, Response } from "express";
import AppError from "../errors/App.erros";
import { verify } from "jsonwebtoken";
import "dotenv/config";

export const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authorization: string | undefined = req.headers.authorization;
  if (!authorization) throw new AppError("Missing bearer token", 401);

  const [_bearer, token] = authorization.split(" ");

  verify(token, process.env.SECRET_KEY!, (error: any, decoded: any) => {
    if (error) throw new AppError(error.message, 401);

    if (!decoded.admin) {
      throw new AppError("Insufficient permission", 403);
    }

    res.locals = { ...res.locals, decoded };
    next();
  });
};
