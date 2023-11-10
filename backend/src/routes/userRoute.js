import { Router } from "express";
import { UserController } from "../controllers/UserController.js";

const router = new Router();
router.post("/signup", (req, res) => UserController.registration(req, res));

export default router;