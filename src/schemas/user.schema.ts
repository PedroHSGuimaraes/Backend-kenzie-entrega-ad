import z from "zod";

export const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(3).max(50),
  email: z.string().email().max(50),
  password: z.string().max(255),
  admin: z.boolean().default(false),
});
export const allUserCouserSchema = z.object({
  courseId: z.number().positive(),
  courseName: z.string().min(3).max(50),
  courseDescription: z.string().min(3).max(50),
  userActiveInCourse: z.boolean().default(false),
  userId: z.number().positive(),
  userName: z.string().min(3).max(50),
});

export const userCreateSchema = userSchema.omit({ id: true });

export const userUpdateSchema = userCreateSchema.partial();

export const userReturntSchema = userSchema.omit({ password: true });

export const userReadSchema = userReturntSchema.array();
