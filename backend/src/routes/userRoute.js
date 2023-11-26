import { Router } from "express";
import { UserController } from "../controllers/UserController.js";

const router = new Router();
router.post("/signup", (req, res) => UserController.registration(req, res));
router.post("/signin", (req, res) => UserController.login(req, res));
router.get("/:id", (req, res) => UserController.find(req, res));

export default router;
