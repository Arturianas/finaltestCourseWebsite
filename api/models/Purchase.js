import mongoose from "mongoose";
const PurchaseSchema = new mongoose.Schema(
  {
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    courses: {
      type: [String],
    },
  },
  { timestamps: true }
);
 
export default mongoose.model("Purchase", PurchaseSchema);