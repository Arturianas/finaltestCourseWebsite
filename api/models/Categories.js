import mongoose from "mongoose";
const CategoriesSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
  },
  { timestamps: true }
);
 
export default mongoose.model("Categories", CategoriesSchema);