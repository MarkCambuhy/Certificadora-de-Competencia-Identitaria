import { Router } from "express";
import userRoute from "./userRoute.js";
import postRoute from "./postRoute.js";

const routes = new Router();

routes.use("/", userRoute);
routes.use("/post", postRoute);

export default routes;
