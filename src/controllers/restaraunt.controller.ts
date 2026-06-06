import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/member.service";
import { MemberType } from "../libs/enums/member.enum";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import Errors, { Message } from "../libs/errors";
import session from "express-session";

const memberService = new MemberService();

const restarauntController: T = {};
restarauntController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHame");
    res.render("home");
  } catch (err) {
    console.log("Error goHome:", err);
    res.redirect("/admin");
  }
};
restarauntController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin");
    res.render("login");
  } catch (err) {
    console.log("Error getLogin:", err);
    res.redirect("/admin");
  }
};
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
      res.send(result);
    });
  } catch (err) {
    console.log("Error processLogin:", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_VENT_WRONG;
    res.send(
      `<script>alert("${message}"); window.location.replace('admin/login')</script>`,
    );
  }
};
restarauntController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");
    res.render("signup");
  } catch (err) {
    console.log("Error getSignup:", err);
    res.send(err);
  }
};
restarauntController.processSignup = async (
  req: AdminRequest,
  res: Response,
) => {
  try {
    console.log("processSignup");
    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTARAUNT;
    const result = await memberService.processSignup(newMember);

    req.session.member = result;
    req.session.save(function () {
      res.send(result);
    });
  } catch (err) {
    console.log("Error processSignup:", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_VENT_WRONG;
    res.send(
      `<script>alert("${message}"); window.location.replace('admin/signup')</script>`,
    );
  }
};
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

export default restarauntController;
