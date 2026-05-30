import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/member.service";

const restarauntController: T = {};
restarauntController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHame");
    res.send("Home page");
  } catch (err) {
    console.log("Error goHome:", err);
  }
};
restarauntController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin");
    res.send("Login page");
  } catch (err) {
    console.log("Error login page:", err);
  }
};
restarauntController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");
    res.send("Sign up page");
  } catch (err) {
    console.log("Error Signup:", err);
  }
};

export default restarauntController;
