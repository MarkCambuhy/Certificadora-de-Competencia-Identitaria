import { Router } from "express";
import userRoute from "./userRoute.js";
import postRoute from "./postRoute.js";
import commentRoute from "./commentRoute.js";

const routes = new Router();

routes.use("/", userRoute);
routes.use("/post", postRoute);
routes.use("/comment", commentRoute);

export default routes;
