import express from "express";
import memberController from "./controllers/member.controller";
import makeUploader from "./libs/utils/uploader";
import productController from "./controllers/product.controller";
import orderController from "./controllers/order.controller";
const router = express.Router();

router.get("/member/restaurant", memberController.getRestaraunt);
router.post("/member/login", memberController.login);
router.post("/member/signup", memberController.signup);
router.post(
  "/member/logout",
  memberController.verifyAuth,
  memberController.logout,
);
router.get(
  "/member/detail",
  memberController.verifyAuth,
  memberController.getMemberDetail,
);
router.post(
  "/member/update",
  makeUploader("members").single("memberImage"),
  memberController.verifyAuth,
  memberController.updateMember,
);
router.get("/member/top-users", memberController.getTopUsers);

//≈≈≈≈≈≈≈≈≈≈≈PRODUCT≈≈≈≈≈≈≈≈≈≈≈≈≈
router.get("/product/all", productController.getProducts);
router.get(
  "/product/:id",
  memberController.retrieveAuth,
  productController.getProduct,
);

//≈≈≈≈≈≈≈≈≈≈≈ORDER≈≈≈≈≈≈≈≈≈≈≈≈≈
router.post(
  "/order/create",
  memberController.verifyAuth,
  orderController.createOrder,
);
router.get(
  "/order/all",
  memberController.verifyAuth,
  orderController.getMyOrders,
);
export default router;
