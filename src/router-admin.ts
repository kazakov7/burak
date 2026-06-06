import express from "express";
import restarauntController from "./controllers/restaraunt.controller";
const router = express.Router();

//Restoran
router.get("/", restarauntController.goHome);
router
  .get("/login", restarauntController.getLogin)
  .post("/login", restarauntController.processLogin);
router
  .get("/signup", restarauntController.getSignup)
  .post("/signup", restarauntController.processSignup);
router.get("/logout", restarauntController.logout);
router.get("/check-me", restarauntController.checkAuthSession);

//product

//User

export default router;
