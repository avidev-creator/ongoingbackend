import { Router } from "express";
import registerUser from "../controllers/user.controllers.js";

const router = Router();

router.route("/signup").post(registerUser);

export default router;
