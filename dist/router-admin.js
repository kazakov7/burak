"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const restaraunt_controller_1 = __importDefault(require("./controllers/restaraunt.controller"));
const router = express_1.default.Router();
//Restoran
router.get("/", restaraunt_controller_1.default.goHome);
router
    .get("/login", restaraunt_controller_1.default.getLogin)
    .post("/login", restaraunt_controller_1.default.processLogin);
router
    .get("/signup", restaraunt_controller_1.default.getSignup)
    .post("/signup", restaraunt_controller_1.default.processSignup);
//product
//User
exports.default = router;
