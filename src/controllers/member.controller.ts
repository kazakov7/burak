import { Request, Response } from "express";
import { T } from "../libs/types/common";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import MemberService from "../models/member.service";
import Errors from "../libs/errors";
//FOR REACT PROJECT
const memberService = new MemberService();

const memberController: T = {};
memberController.signup = async (req: Request, res: Response) => {
  try {
    console.log("signup");

    const input: MemberInput = req.body,
      result: Member = await memberService.signup(input);

    res.json({ member: result });
  } catch (err) {
    console.log("Error Signup:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standart.code).json(Errors.standart);
  }
};
memberController.login = async (req: Request, res: Response) => {
  try {
    console.log("Login");

    const input: LoginInput = req.body,
      result = await memberService.login(input);

    res.json({ member: result });
  } catch (err) {
    console.log("Error Login:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standart.code).json(Errors.standart);
  }
};

export default memberController;
