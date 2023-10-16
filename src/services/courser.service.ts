import format from "pg-format";
import {
  CouserCreate,
  Couser,
  CouserResult,
  CouserRead,
} from "../interfaces/courser.interface";
import { client } from "../database";

export const createCouserService = async (
  user: CouserCreate
): Promise<Couser> => {
  const queryFormat: string = format(
    'INSERT INTO "courses" (%I) VALUES (%L) RETURNING *;',
    Object.keys(user),
    Object.values(user)
  );
  const query: CouserResult = await client.query(queryFormat);
  return query.rows[0];
};

export const readCouserService = async (): Promise<CouserRead> => {
  const query: CouserResult = await client.query('SELECT * FROM "courses";');
  return query.rows;
};
