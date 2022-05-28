import mongoose from "mongoose";
const CategoriesSchema = new mongoose.Schema(
  {
    categories: {
        type: Array,
        required: true,
        ref: 'User',
    },
    
  },
  { timestamps: true }
);
 
export default mongoose.model("Categories", CategoriesSchema);