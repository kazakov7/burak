import express from "express";
import restarauntController from "./controllers/restaraunt.controller";
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";

const routerAdmin = express.Router();

//Restoran

routerAdmin.get("/", restarauntController.goHome); //trad? rest?
routerAdmin
  .get("/login", restarauntController.getLogin) //trad? rest?
  .post("/login", restarauntController.processLogin); //trad? rest?
routerAdmin.get("/signup", restarauntController.getSignup).post(
  "/signup",
  makeUploader("members").single("memberImage"), //req.file
  restarauntController.processSignup,
);
routerAdmin.get("/logout", restarauntController.logout);
routerAdmin.get("/check-me", restarauntController.checkAuthSession);

//product
routerAdmin.get(
  "/product/all",
  restarauntController.verifyRestaurant,
  productController.getAllProduct,
);
routerAdmin.post(
  "/product/create",
  restarauntController.verifyRestaurant,
  makeUploader("products").array("productImages", 5), //req.files
  productController.createNewProduct,
);
routerAdmin.post(
  "/product/:id",
  restarauntController.verifyRestaurant,
  productController.updateChoosenProduct,
);

//User
routerAdmin.get(
  "/user/all",
  restarauntController.verifyRestaurant,
  restarauntController.getUsers,
);
routerAdmin.post(
  "/user/edit",
  restarauntController.verifyRestaurant,
  restarauntController.updateChosenUser,
);

export default routerAdmin;
