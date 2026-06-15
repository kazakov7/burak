import express from "express";
import restarauntController from "./controllers/restaraunt.controller";
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";

const router = express.Router();

//Restoran
router.get("/", restarauntController.goHome);
router
  .get("/login", restarauntController.getLogin)
  .post("/login", restarauntController.processLogin);
router
  .get("/signup", restarauntController.getSignup)
  .post(
    "/signup",
    makeUploader("members").single("memberImage"),
    restarauntController.processSignup,
  );
router.get("/logout", restarauntController.logout);
router.get("/check-me", restarauntController.checkAuthSession);

//product
router.get(
  "/product/all",
  restarauntController.verifyRestaurant,
  productController.getAllProduct,
);
router.post(
  "/product/create",
  restarauntController.verifyRestaurant,
  makeUploader("products").array("productImages", 5),
  productController.createNewProduct,
);
router.post(
  "/product/:id",
  restarauntController.verifyRestaurant,
  productController.updateChoosenProduct,
);

//User
router.get(
  "/user/all",
  restarauntController.verifyRestaurant,
  restarauntController.getUsers,
);
router.post(
  "/user/edit",
  restarauntController.verifyRestaurant,
  restarauntController.updateChosenUser,
);

export default router;
