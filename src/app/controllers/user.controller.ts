import { NextFunction, Request, Response } from 'express';
import { User } from '../schemas';

/* Get */
export async function get(req: Request, res: Response, next: NextFunction) {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    next(error);
  }
}

/* Create */
export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const savedUser = await User.create(req.body);
    res.json(savedUser);
  } catch (error) {
    next(error);
  }
}

/* List */
export async function list(req: Request, res: Response, next: NextFunction) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
}
