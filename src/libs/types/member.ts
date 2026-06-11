import { Session } from "express-session";
import MemberService from "../../models/member.service";
import { MemberStatus, MemberType } from "../enums/member.enum";
import { Request } from "express";
import { ObjectId } from "mongoose";

export interface Member {
  _id: ObjectId;
  memberType: MemberType;
  memberStatus: MemberStatus;
  memberNick: string;
  memberPhone: string;
  memberPassword?: string;
  memberAddres?: string;
  memberDesc?: string;
  memberPoints: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface MemberInput {
  memberImage: string;
  memberType?: MemberType;
  memberStatus?: MemberService;
  memberNick: string;
  memberPhone: string;
  memberPassword: string;
  memberAddres?: string;
  memberDesc?: string;
  memberPoints?: Number;
}

export interface LoginInput {
  memberNick: string;
  memberPassword: string;
}

export interface AdminRequest extends Request {
  member: Member;
  session: Session & { member: Member };
  file: Express.Multer.File;
  files: Express.Multer.File[];
}
