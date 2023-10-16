import { z } from "zod";

export const userCouserSchema = z.object({
  id: z.number().positive(),
  userId: z.number().positive(),
  userName: z.string().min(3).max(50),
  courseId: z.number().positive(),
  courseName: z.string().min(3).max(50),
  courseDescription: z.string().min(3).max(50),
  userActiveInCourse: z.boolean().default(false),
});

export const courserUserCreateSchema = userCouserSchema.omit({ id: true });
