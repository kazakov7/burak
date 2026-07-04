import mongoose from "mongoose";
export const AUTH_TIMER = "6";
export const MORGAN_FORMAT = `:method :url :response-time [:status] \n`;

export const shapeIntoMongooseObjectId = (target: any) => {
  return typeof target == "string"
    ? new mongoose.Types.ObjectId(target)
    : target;
};
