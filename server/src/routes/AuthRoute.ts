import { checkUser } from "../controller/AuthController.ts";
import { Router } from "express";

const router = Router();

router.post('/check-user',checkUser);

export default router;