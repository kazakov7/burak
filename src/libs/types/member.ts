import MemberService from "../../models/member.service";
import { MemberType } from "../enums/member.enum";
import { ObjectId } from "mongoose";

export interface Member {
  _id: ObjectId;
  memberType: MemberType;
  memberStatus: MemberService;
  memberNick: string;
  memberPhone: string;
  memberPassword?: string;
  memberAddres?: string;
  memberDesc?: string;
  memberPoints: Number;
  createdAt: Date;
  updateAt: Date;
}

export interface memberInput {
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
