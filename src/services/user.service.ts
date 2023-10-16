import { client } from "../database";
import "dotenv/config";
import {
  AllUserCouserResult,
  UserCreate,
  UserResult,
  UserReturn,
} from "../interfaces/user.interface";
import format from "pg-format";
import { hashSync } from "bcryptjs";
import { userReturntSchema } from "../schemas/user.schema";
import { QueryConfig } from "pg";

export const createUserService = async (
  data: UserCreate
): Promise<UserReturn> => {
  data.password = hashSync(data.password, 12);

  const queryFormat: string = format(
    'INSERT INTO "users" (%I) VALUES (%L) RETURNING *;',
    Object.keys(data),
    Object.values(data)
  );

  const query: UserResult = await client.query(queryFormat);
  return userReturntSchema.parse(query.rows[0]);
};
export const readUserService = async (): Promise<UserReturn[]> => {
  const query: UserResult = await client.query('SELECT * FROM "users";');
  return query.rows.map((row) => userReturntSchema.parse(row));
};

export const allUsersReadCouserService = async (
  id: string
): Promise<AllUserCouserResult[]> => {
  const query: string = `
    SELECT 
    "courses"."id" AS "courseId",
    "courses"."name" AS "courseName",
    "courses"."description" AS "courseDescription",
    "userCourses"."active" AS "userActiveInCourse",
    "users"."id" AS "userId",
    "users"."name" AS "userName"
  FROM 
    "courses"
  INNER JOIN 
    "userCourses" ON "courses"."id" = "userCourses"."courseId"
  INNER JOIN 
    "users" ON "users"."id" = "userCourses"."userId"
  WHERE 
    "users"."id" = $1;
  `;

  const queryConfig: QueryConfig = {
    text: query,
    values: [id],
  };

  const queryResult = await client.query(queryConfig);

  return queryResult.rows;
};
