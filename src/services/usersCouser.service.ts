import { QueryConfig, QueryResult } from "pg";
import { client } from "../database";
import {
  UserCouser,
  UserCouserResult,
  UserCouserReturn,
} from "../interfaces/userCouser.interface";

export const createRegisterCouserService = async (
  userId: string,
  courseId: string
): Promise<UserCouserReturn> => {
  const query = await client.query(
    'INSERT INTO "userCourses" ("userId", "courseId") VALUES ($1, $2) RETURNING *;',
    [userId, courseId]
  );

  return query.rows[0];
};
export const readUserCouserService = async (
  data: UserCouser
): Promise<UserCouserResult[]> => {
  const query: string = `
    SELECT
      "uc"."userId" AS "userId",
      "u"."name" AS "userName",
      "uc"."courseId" AS "courseId",
      "c"."name" AS "courseName",
      "c"."description" AS "courseDescription",
      "uc"."active" AS "userActiveInCourse"
    FROM
      "userCourses" AS "uc"
    JOIN
      "users" AS "u" ON "uc"."userId" = "u"."id"
    JOIN
      "courses" AS "c" ON "uc"."courseId" = "c"."id"
    WHERE
      "uc"."courseId" = $1;
  `;

  const queryConfig: QueryConfig = {
    text: query,
    values: [data.courseId],
  };

  const queryResult = await client.query(queryConfig);

  return queryResult.rows;
};

export const deleteUserCouserService = async (
  courseId: string,
  userId: string
): Promise<void> => {
  await client.query(
    `UPDATE "userCourses" SET "active" = false WHERE "userId" = $1 AND "courseId" = $2;`,
    [userId, courseId]
  );
};
