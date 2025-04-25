import express from "express";
import { getComments,addComment, editComment, deleteComment } from "../controllers/comment.js";
import { isAuthenticated } from "../middleware/auth.js";

const commentRouter = express.Router();

commentRouter.get('/get',getComments);
commentRouter.post('/add',isAuthenticated,addComment);
commentRouter.put('/edit/:id',isAuthenticated,editComment);
commentRouter.delete('/edit/:id',isAuthenticated,deleteComment);

export default commentRouter;