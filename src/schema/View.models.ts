import mongoose, { Schema } from "mongoose";
import { ViewGroup } from "../libs/types/view.group";

const viewSchema = new Schema(
  {
    viewGroup: {
      type: Schema.Types.ObjectId,
      enum: ViewGroup,
      required: true,
    },
    memberId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Member",
    },
    veiwRefId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }, //createdAt, updatedAt
);

export default mongoose.model("View", viewSchema);
