import { Router } from "express";
import {
  createCouserController,
  readCouserController,
} from "../controllers/couser.controller";
import { validateBody } from "../middlewares/validateBody.middleware";
import { courserCreateSchema } from "../schemas/courser.schema";
import { validatePermission } from "../middlewares/validatePermission.middleware";
import { validateToken } from "../middlewares/validateToken.middleware";
import { noCourse } from "../middlewares/noCouser.middleware";

const couserRouter: Router = Router();

couserRouter.post(
  "/courses",
  validateBody(courserCreateSchema),
  validateToken,
  validatePermission,
  createCouserController
);

couserRouter.get("/courses", readCouserController);

export default couserRouter;
