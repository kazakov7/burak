import mongoose, { Schema } from "mongoose";
import { MemberStatus, MemberType } from "../libs/enums/member.enum";
import MemberService from "../models/member.service";

const MemberSchema = new Schema(
  {
    memberType: {
      type: String,
      enum: MemberType,
      default: MemberType.USER,
    },
    memberStatus: {
      type: String,
      enum: MemberStatus,
      default: MemberStatus.ACTIVE,
    },
    memberNick: {
      type: String,
      index: { unique: true, sparse: true },
      required: true,
    },
    memberPhone: {
      type: String,
      index: { unique: true, sparse: true },
      required: true,
    },
    memberPassword: {
      type: String,
      select: false,
      required: true,
    },
    memberAddres: {
      type: String,
    },
    memberDesc: {
      type: String,
    },
    memberPoints: {
      type: Number,
      default: 0,
    },
    memberImage: {
      type: String,
    },
  },
  { timestamps: true }, //creatAt, updateAt
);

export default mongoose.model("Member", MemberSchema);
