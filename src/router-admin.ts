import express from "express";
import restarauntController from "./controllers/restaraunt.controller";
import productController from "./controllers/product.controller";
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
router.get("/product/all", productController.getAllProduct);
router.post("/product/create", productController.createNewProduct);
router.post("/product/:id", productController.updateChoosenProduct);
//User

export default router;
