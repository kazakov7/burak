import { Request, Response } from "express";
import { T } from "../libs/types/common";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import MemberService from "../models/member.service";
import Errors, { HttpCode, Message } from "../libs/errors";
import { token } from "morgan";
import AuthService from "../models/Auth.service";
import { AUTH_TIMER } from "../libs/config";
//FOR REACT PROJECT
const memberService = new MemberService();
const authService = new AuthService();

const memberController: T = {};
memberController.signup = async (req: Request, res: Response) => {
  try {
    console.log("signup");

    const input: MemberInput = req.body,
      result: Member = await memberService.signup(input),
      token = await authService.createToken(result);
    res.cookie("accesToken", token, {
      maxAge: AUTH_TIMER * 6000 * 1000,
      httpOnly: false,
    });

    res.status(HttpCode.CREATED).json({ member: result, accesToken: token });
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
      result = await memberService.login(input),
      token = await authService.createToken(result);
    res.cookie("accesToken", token, {
      maxAge: AUTH_TIMER * 6000 * 1000,
      httpOnly: false,
    });

    res.status(HttpCode.OK).json({ member: result, accesToken: token });
  } catch (err) {
    console.log("Error Login:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standart.code).json(Errors.standart);
  }
};

memberController.verifyAuth = async (req: Request, res: Response) => {
  try {
    let member = null;
    const token = req.cookies["accesToken"];
    if (token) member = await authService.checkAuth(token);

    if (!member)
      throw new Errors(HttpCode.UNAUTHORIZED, Message.NOT_AUTHENTICATED);
    console.log("member", member);
    res.status(HttpCode.OK).json({ member: member });
  } catch (err) {
    console.log("Error verifyAuth:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standart.code).json(Errors.standart);
  }
};

export default memberController;
