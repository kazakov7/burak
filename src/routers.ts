import express from "express";
import memberController from "./controllers/member.controller";
const router = express.Router();

router.post("/member/login", memberController.login);
router.post("/member/signup", memberController.signup);
router.post(
  "/member/logut",
  memberController.verifyAuth,
  memberController.logut,
);
router.get(
  "/member/detail",
  memberController.verifyAuth,
  memberController.getMemberDetail,
);

export default router;
