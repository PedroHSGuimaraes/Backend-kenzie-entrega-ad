import { Request, Response } from "express";
import {
  createRegisterCouserService,
  deleteUserCouserService,
  readUserCouserService,
} from "../services/usersCouser.service";
import { UserCouserResult } from "../interfaces/userCouser.interface";

export const createRegisterCouserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = { ...req.body, ...req.params };
  await createRegisterCouserService(data.userId, data.courseId);
  return res.status(201).json({
    message: "User successfully vinculed to course",
  });
};

export const readUserUserCouserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = { ...req.body, ...req.params };
  const response: UserCouserResult[] = await readUserCouserService(data);

  return res.status(200).json(response);
};

export const deleteCouserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await deleteUserCouserService(req.params.userId, req.params.courseId);
  return res.status(204).json();
};
