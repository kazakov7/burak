import { Request, Response } from "express";
import { T } from "../libs/types/common";

const memberController: T = {};
memberController.goHome = (req: Request, res: Response) => {
  try {
    res.send("Home page");
  } catch (err) {
    console.log("Error goHome:", err);
  }
};
memberController.getLogin = (req: Request, res: Response) => {
  try {
    res.send("Login page");
  } catch (err) {
    console.log("Error login page:", err);
  }
};
memberController.getSignup = (req: Request, res: Response) => {
  try {
    res.send("Sign up page");
  } catch (err) {
    console.log("Error Signup:", err);
  }
};

export default memberController;
