import { Router } from "express";
import {
  createUser,
  loginUser,
  logoutUser,
} from "../controllers/user.controller.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

const userRouter = Router();
userRouter.post("/create-user", isAuthenticated, createUser);
userRouter.post("/login-user", loginUser);
userRouter.post("/logout-user", logoutUser);

export default userRouter;
