import { Router } from "express";
import {
  createRegisterCouserController,
  deleteCouserController,
  readUserUserCouserController,
} from "../controllers/usersCouser.controller";
import { validatePermission } from "../middlewares/validatePermission.middleware";
import { validateToken } from "../middlewares/validateToken.middleware";
import { checkId } from "../middlewares/validateId.middleware";
import { noCourse } from "../middlewares/noCouser.middleware";

const userCourserRouter: Router = Router();

userCourserRouter.post(
  "/courses/:courseId/users/:userId",
  validateToken,
  validatePermission,
  checkId,
  createRegisterCouserController
);

userCourserRouter.get(
  "/courses/:courseId/users",
  validateToken,
  validatePermission,
  readUserUserCouserController
);

userCourserRouter.delete(
  "/courses/:courseId/users/:userId",
  validateToken,
  validatePermission,
  checkId,
  deleteCouserController
);

export default userCourserRouter;
