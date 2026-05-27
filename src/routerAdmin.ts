import express from "express";
import restarauntController from "./controllers/restaraunt.controller";
const router = express.Router();

router.get("/", restarauntController.goHome);
router.get("/login", restarauntController.getLogin);
router.get("/signup", restarauntController.getSignup);

export default router;
