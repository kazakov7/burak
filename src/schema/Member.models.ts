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
    MemberStatus: {
      type: String,
      enum: MemberStatus,
      default: MemberStatus.ACTIVE,
    },
    MemberNick: {
      type: String,
      index: { unique: true, sparse: true },
      required: true,
    },
    MemberPhone: {
      type: String,
      index: { unique: true, sparse: true },
      required: true,
    },
    MemberPassword: {
      type: String,
      select: false,
      required: true,
    },
    MemberAddres: {
      type: String,
    },
    MemberDesc: {
      type: String,
    },
    MemberPoints: {
      type: Number,
      default: 0,
    },
    MemberImage: {
      type: String,
    },
  },
  { timestamps: true }, //creatAt, updateAt
);

export default mongoose.model("Member", MemberSchema);
