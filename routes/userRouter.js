import express from "express";
import {create, login, update, readAll, readOne, deleteUser} from "../controllers/userController.js";
import {authentication} from "../middlewares/authentication.js";

const userRouter = express.Router();

userRouter.post("/users/create", create);
userRouter.post("/users/login", login);
userRouter.get("/users", authentication, readAll);
userRouter.get("/users/:userId", authentication, readOne);
userRouter.put("/users/:userId", authentication, update);
userRouter.delete("/users/:userId", authentication, deleteUser);

export default userRouter