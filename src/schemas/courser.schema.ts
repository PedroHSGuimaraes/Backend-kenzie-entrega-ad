import { z } from "zod";

export const courserSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(3).max(50),
  description: z.string().min(3).max(50),
});

export const courserCreateSchema = courserSchema.omit({ id: true });

export const curserUpdateSchema = courserCreateSchema.partial();
