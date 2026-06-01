import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/member.service";
import { MemberType } from "../libs/enums/member.enum";
import { memberInput } from "../libs/types/member";

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
    console.log("Error getLogin:", err);
  }
};
restarauntController.processLogin = (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    res.send("DONE");
  } catch (err) {
    console.log("Error processLogin:", err);
  }
};
restarauntController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");

    res.send("Sign up page");
  } catch (err) {
    console.log("Error getSignup:", err);
  }
};
restarauntController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("processSignup");
    console.log(req.body);

    const newMember: memberInput = req.body;
    newMember.memberType = MemberType.RESTARAUNT;

    const memberService = new MemberService();
    const result = await memberService.processSignup(newMember);
    res.send(result);
  } catch (err) {
    console.log("Error processSignup:", err);
    res.send(err);
  }
};

export default restarauntController;
