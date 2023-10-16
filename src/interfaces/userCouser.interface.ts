import { z } from "zod";
import { userCouserSchema } from "../schemas/usersCouser.schema";
import { QueryResult } from "pg";

export type UserCouser = z.infer<typeof userCouserSchema>;

export type UserCouserRead = Array<UserCouser>;

export type UserCouserResult = QueryResult<UserCouser>;

export type UserCouserReturn = Array<UserCouser>;
