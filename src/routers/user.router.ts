import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middleware";
import { userCreateSchema } from "../schemas/user.schema";
import {
  AllUserCouserController,
  createUserController,
  readUserController,
} from "../controllers/user.controller";
import { validateEmail } from "../middlewares/validateEmail.middleware";
import { sessionRouter } from "./session.router";
import { validateToken } from "../middlewares/validateToken.middleware";
import { validatePermission } from "../middlewares/validatePermission.middleware";
import { noCourse } from "../middlewares/noCouser.middleware";
import { checkId } from "../middlewares/validateId.middleware";
import { noCourseMatriculed } from "../middlewares/noCourseMatriculed.middleware";

const userRouter: Router = Router();

userRouter.post(
  "/users",
  validateBody(userCreateSchema),
  validateEmail,
  createUserController
);

userRouter.use("/login", sessionRouter);

userRouter.get("/users", validateToken, validatePermission, readUserController);

userRouter.get(
  "/users/:id/courses",
  validateToken,
  validatePermission,
  noCourse,
  noCourseMatriculed,
  AllUserCouserController
);

export default userRouter;
