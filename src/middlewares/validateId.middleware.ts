import { Request, Response, NextFunction } from "express";
import AppError from "../errors/App.erros";
import { client } from "../database";

export const checkId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.userId;
  const courseId = req.params.courseId;

  const queryString = `
    SELECT * FROM "userCourses" 
    WHERE "userId" = $1 AND "courseId" = $2
  `;
  const queryConfig = {
    text: queryString,
    values: [userId, courseId],
  };

  const data = await client.query(queryConfig);

  if (data.rows.length === 0) {
    throw new AppError("User/course not found", 404);
  }

  res.locals = { ...res.locals, foundUser: data.rows[0] };
  next();
};
