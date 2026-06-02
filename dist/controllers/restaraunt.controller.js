"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const member_service_1 = __importDefault(require("../models/member.service"));
const member_enum_1 = require("../libs/enums/member.enum");
const restarauntController = {};
restarauntController.goHome = (req, res) => {
    try {
        console.log("goHame");
        res.send("Home page");
    }
    catch (err) {
        console.log("Error goHome:", err);
    }
};
restarauntController.getLogin = (req, res) => {
    try {
        console.log("getLogin");
        res.send("Login page");
    }
    catch (err) {
        console.log("Error getLogin:", err);
    }
};
restarauntController.processLogin = async (req, res) => {
    try {
        console.log("processLogin");
        const input = req.body;
        const memberService = new member_service_1.default();
        const result = await memberService.processLogin(input);
        res.send(result);
    }
    catch (err) {
        console.log("Error processLogin:", err);
        res.send(err);
    }
};
restarauntController.getSignup = (req, res) => {
    try {
        console.log("getSignup");
        res.send("Sign up page");
    }
    catch (err) {
        console.log("Error getSignup:", err);
        res.send(err);
    }
};
restarauntController.processSignup = async (req, res) => {
    try {
        console.log("processSignup");
        console.log(req.body);
        const newMember = req.body;
        newMember.memberType = member_enum_1.MemberType.RESTARAUNT;
        const memberService = new member_service_1.default();
        const result = await memberService.processSignup(newMember);
        res.send(result);
    }
    catch (err) {
        console.log("Error processSignup:", err);
        res.send(err);
    }
};
exports.default = restarauntController;
