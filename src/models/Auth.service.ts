import { json } from "express";
import { AUTH_TIMER } from "../libs/config";
import { Member } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/errors";
const jwt = require("jsonwebtoken");
class AuthService {
  constructor() {}

  public async createToken(payload: Member) {
    return new Promise((resolve, reject) => {
      const duration = `${AUTH_TIMER}h`;
      jwt.sign(
        payload,
        process.env.TOKEN_SECRET as string,
        {
          expiresIn: duration,
        },
        (err: any, token: any) => {
          if (err)
            reject(
              new Errors(HttpCode.UNAUTHORIZED, Message.TOKEN_CERATION_FAILED),
            );
          else resolve(token as string);
        },
      );
    });
  }

  public async checkAuth(token: string): Promise<Member> {
    const result: Member = (await jwt.verify(
      token,
      process.env.TOKEN_SECRET as string,
    )) as Member;
    console.log(`"----auth membernick: ${result.memberNick}----`);
    return result;
  }
}
export default AuthService;
