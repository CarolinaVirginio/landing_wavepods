import express from "express";
import { validateEmailController } from "../controllers/emailController.js";

const router = express.Router();

router.post("/validate-email", validateEmailController);

export default router;
