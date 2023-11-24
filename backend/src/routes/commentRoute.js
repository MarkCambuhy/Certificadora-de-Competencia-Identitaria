import { Router } from "express";
import comment from "../controllers/commentController.js";
import verifyToken from "../middlewares/verifyToken.js";

const routes = new Router();

routes.get("/", comment.getAllComment);
routes.post("/", verifyToken, comment.createComment);
routes.put("/:id", verifyToken, comment.updateComment);
routes.delete("/:id", verifyToken, comment.deleteComment);

export default routes;