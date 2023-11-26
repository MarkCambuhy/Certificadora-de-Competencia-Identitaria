import { Router } from "express";
import post from "../controllers/PostController.js";
import { verifyTokenAndAuthorization } from "../middlewares/verifyToken.js";

const routes = new Router();

routes.get("/all", post.getAllPost);
routes.get("/:id", post.getPost);
routes.post("/", verifyTokenAndAuthorization, post.createPost);
routes.put("/:id", verifyTokenAndAuthorization, post.updatePost);
routes.delete("/:id", verifyTokenAndAuthorization, post.deletePost);

export default routes;
