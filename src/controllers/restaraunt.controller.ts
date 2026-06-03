import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/member.service";
import { MemberType } from "../libs/enums/member.enum";
import { LoginInput, MemberInput } from "../libs/types/member";

const memberService = new MemberService();

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
restarauntController.processLogin = async (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    const input: LoginInput = req.body;

    const result = await memberService.processLogin(input);
    res.send(result);
  } catch (err) {
    console.log("Error processLogin:", err);
    res.send(err);
  }
};
restarauntController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");
    res.send("Sign up page");
  } catch (err) {
    console.log("Error getSignup:", err);
    res.send(err);
  }
};
restarauntController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("processSignup");
    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTARAUNT;
    const result = await memberService.processSignup(newMember);
    res.send(result);
  } catch (err) {
    console.log("Error processSignup:", err);
    res.send(err);
  }
};

export default restarauntController;
