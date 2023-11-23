import { Router } from "express";
import post from "../controllers/PostController.js";

const routes = new Router();

routes.get("/", post.getAllPost);
routes.post("/", post.createPost);
routes.put("/:id", post.updatePost);
routes.delete("/:id", post.deletePost);

export default routes;
