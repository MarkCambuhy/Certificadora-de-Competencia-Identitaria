import { Router } from "express";
import userRoute from "./userRoute.js";

const routes = new Router();

routes.use("/", userRoute);

export default routes;