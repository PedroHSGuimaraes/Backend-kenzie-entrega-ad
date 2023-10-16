import { sessionSchema } from "../schemas/session.schema";
import { z } from "zod";

export type SessionCreate = z.infer<typeof sessionSchema>;

export type SessionReturn = { token: string };
