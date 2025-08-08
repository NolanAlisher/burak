import express, { Request, Response } from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";

router.post("/login", memberController.login);
router.post("/signup", memberController.signup);
// router.get("/member/detail", memberController);
export default router;
