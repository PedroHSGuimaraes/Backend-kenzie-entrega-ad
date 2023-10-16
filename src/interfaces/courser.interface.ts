import { QueryResult } from "pg";
import { z } from "zod";
import {
  courserCreateSchema,
  curserUpdateSchema,
  courserSchema,
} from "../schemas/courser.schema";

export type Couser = z.infer<typeof courserSchema>;

export type CouserCreate = z.infer<typeof courserCreateSchema>;

export type CouserRead = Array<Couser>;

export type CouserUpdate = z.infer<typeof curserUpdateSchema>;

export type CouserResult = QueryResult<Couser>;
