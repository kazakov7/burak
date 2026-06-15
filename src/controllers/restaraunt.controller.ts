import { NextFunction, Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/member.service";
import { MemberType } from "../libs/enums/member.enum";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/errors";

const memberService = new MemberService();

const restarauntController: T = {};
//GET HOME PAGE
restarauntController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHame");
    res.render("home");
  } catch (err) {
    console.log("Error goHome:", err);
    res.redirect("/admin");
  }
};

//GET Login PAGE
restarauntController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin");
    res.render("login");
  } catch (err) {
    console.log("Error getLogin:", err);
    res.redirect("/admin");
  }
};

//GET SignUp PAGE
restarauntController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");
    res.render("signup");
  } catch (err) {
    console.log("Error getSignup:", err);
    res.send(err);
  }
};

//GET PROCESS LOGIN PAGE
restarauntController.processLogin = async (
  req: AdminRequest,
  res: Response,
) => {
  try {
    console.log("processLogin");
    const input: LoginInput = req.body;

    const result = await memberService.processLogin(input);
    req.session.member = result;
    req.session.save(function () {
      res.redirect("/admin/product/all");
    });
  } catch (err) {
    console.log("Error processLogin:", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_VENT_WRONG;
    res.send(
      `<script>alert("${message}"); window.location.replace('login')</script>`,
    );
  }
};

//PROCESS SIGNUP PAGE
restarauntController.processSignup = async (
  req: AdminRequest,
  res: Response,
) => {
  try {
    console.log("processSignup");
    const file = req.file;
    if (!file)
      throw new Errors(HttpCode.BAD_REQUEST, Message.SOMETHING_VENT_WRONG);

    const newMember: MemberInput = req.body;
    newMember.memberImage = file?.path;
    newMember.memberType = MemberType.RESTARAUNT;
    const result = await memberService.processSignup(newMember);

    req.session.member = result;
    req.session.save(function () {
      res.redirect("/admin/product/all");
    });
  } catch (err) {
    console.log("Error processSignup:", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_VENT_WRONG;
    res.send(
      `<script>alert("${message}"); window.location.replace('signup')</script>`,
    );
  }
};

//GET checkAuthSession PAGE
restarauntController.checkAuthSession = async (
  req: AdminRequest,
  res: Response,
) => {
  try {
    console.log("processSignup");
    if (req.session?.member)
      res.send(`<script>alert("${req.session.member.memberNick}")</script>`);
    else res.send(`<script>alert("${Message.NOT_AUTHENTICATED}")</script>`);
  } catch (err) {
    console.log("Error processSignup:", err);
    res.send(err);
  }
};

//GET LOGOUT PAGE
restarauntController.logout = async (req: AdminRequest, res: Response) => {
  try {
    console.log("processSignup");
    req.session.destroy(function () {
      res.redirect("/admin");
    });
  } catch (err) {
    console.log("Error processSignup:", err);
    res.redirect("/admin");
  }
};

restarauntController.verifyRestaurant = (
  req: AdminRequest,
  res: Response,
  next: NextFunction,
) => {
  if (req.session?.member?.memberType == MemberType.RESTARAUNT) {
    req.member = req.session.member;
    next();
  } else {
    const message = Message.NOT_AUTHENTICATED;
    res.send(
      `<script>alert("${message}"); window.location.replace('/admin/login');</script>`,
    );
  }
};

restarauntController.getUsers = async (req: Request, res: Response) => {
  try {
    console.log("getUsers");
    const result = await memberService.getUsers();

    res.render("users", { users: result });
  } catch (err) {
    console.log("Error goHome:", err);
    res.redirect("/admin");
  }
};
restarauntController.updateChosenUser = async (req: Request, res: Response) => {
  try {
    console.log("updateChosenUser");
    const result = await memberService.updateChosenUser(req.body);

    res.status(HttpCode.OK).json({ data: result });
  } catch (err) {
    console.log("Error updateChosenUser:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standart.code).json(Errors.standart);
  }
};

export default restarauntController;
