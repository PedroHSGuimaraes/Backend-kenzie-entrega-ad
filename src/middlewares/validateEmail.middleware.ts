import { NextFunction, Request, Response } from "express";
import AppError from "../errors/App.erros";
import { client } from "../database";
import { QueryConfig } from "pg";

export const validateEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const queryString: string = ` SELECT * FROM "users" WHERE "email" = $1`;
  const queryConfig: QueryConfig = {
    text: queryString,
    values: [req.body.email],
  };
  const data = await client.query(queryConfig);
  if (data.rows.find((user) => user.email === req.body.email)) {
    throw new AppError("Email already registered", 409);
  }

  return next();
};
