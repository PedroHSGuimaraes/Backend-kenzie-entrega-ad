import { z } from "zod";
import {
  allUserCouserSchema,
  userCreateSchema,
  userReadSchema,
  userReturntSchema,
  userSchema,
  userUpdateSchema,
} from "../schemas/user.schema";
import { QueryResult } from "pg";

export type User = z.infer<typeof userSchema>;

export type UserCreate = z.infer<typeof userCreateSchema>;

export type UserRead = z.infer<typeof userReadSchema>;

export type UserUpdate = z.infer<typeof userUpdateSchema>;

export type UserReturn = z.infer<typeof userReturntSchema>;

export type UserResult = QueryResult<User>;

export type AllUserCouser = z.infer<typeof allUserCouserSchema>;

export type AllUserCouserRead = Array<AllUserCouser>;

export type AllUserCouserResult = QueryResult<AllUserCouserRead>;

export type AllUserCouserReturn = Array<AllUserCouser>;
