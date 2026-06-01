import MemberService from "../../models/member.service";
import { MemberType } from "../enums/member.enum";
import { ObjectId } from "mongoose";

export interface Member {
  _id: ObjectId;
  memberType: MemberType;
  MemberStatus: MemberService;
  MemberNick: string;
  MemberPhone: string;
  MemberPassword?: string;
  MemberAddres?: string;
  MemberDesc?: string;
  MemberPoints: Number;
  createdAt: Date;
  updateAt: Date;
}

export interface memberInput {
  memberType?: MemberType;
  MemberStatus?: MemberService;
  MemberNick: string;
  MemberPhone: string;
  MemberPassword: string;
  MemberAddres?: string;
  MemberDesc?: string;
  MemberPoints?: Number;
}
