import express from "express";
import {createUser} from "../controller/UserController.js";

const UserRouter = express();

UserRouter.post('/register', createUser);

export default UserRouter;