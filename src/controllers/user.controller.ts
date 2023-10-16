import { Request, Response } from "express";
import {
  allUsersReadCouserService,
  createUserService,
  readUserService,
} from "../services/user.service";
import { AllUserCouserResult, UserReturn } from "../interfaces/user.interface";

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const response: UserReturn = await createUserService(req.body);
  return res.status(201).json(response);
};

export const readUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const response = await readUserService();
  return res.status(200).json(response);
};

export const AllUserCouserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = req.params.id;
  const response = await allUsersReadCouserService(userId);

  return res.status(200).json(response);
};
