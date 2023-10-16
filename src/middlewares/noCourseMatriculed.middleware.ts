import { NextFunction, Request, Response } from "express";
import AppError from "../errors/App.erros";
import { client } from "../database";

export const noCourseMatriculed = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.id;

  const queryString = `
    SELECT * FROM "userCourses" WHERE "userId" = $1
  `;

  const queryConfig = {
    text: queryString,
    values: [userId],
  };

  const queryResult = await client.query(queryConfig);

  if (queryResult.rows.length === 0) {
    const error = new AppError("No course found", 404);
    return next(error);
  }

  next();
};
