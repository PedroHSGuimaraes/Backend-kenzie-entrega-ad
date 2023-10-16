import { NextFunction, Request, Response } from "express";
import AppError from "../errors/App.erros";
import { client } from "../database";
export const noCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const courseId = req.params.id;

  const queryString = `
  SELECT * FROM "courses" WHERE "id" = $1
  `;
  const queryConfig = {
    text: queryString,
    values: [courseId],
  };

  const queryResult = await client.query(queryConfig);

  if (queryResult.rows.length === 0) {
    const error = new AppError("No course found", 404);
    return next(error);
  }

  next();
};
