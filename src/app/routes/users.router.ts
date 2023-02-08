import express, { Router } from 'express';
import { UserController } from '../controllers';

const router: Router = express.Router();

router
  .route('/')
  /* List All Users */
  .get(UserController.list)
  /* Create User */
  .post(UserController.create);

router
  .route('/:id')
  /* Get User */
  .get(UserController.get);

export const usersRouter: Router = router;
