import express from "express";
import { register, login} from "../controllers/user.js";
import { isAuthenticated } from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post('/register',register);
userRouter.post('/login',login);
userRouter.post('/comments',isAuthenticated,getComments);


export default userRouter;