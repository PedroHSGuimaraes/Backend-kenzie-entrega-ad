import { Request, Response } from "express";
import { Couser, CouserRead } from "../interfaces/courser.interface";
import {
  createCouserService,
  readCouserService,
} from "../services/courser.service";

export const createCouserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const response: Couser = await createCouserService(req.body);
  return res.status(201).json(response);
};

export const readCouserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const response: CouserRead = await readCouserService();
  return res.status(200).json(response);
};
