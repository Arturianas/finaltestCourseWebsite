import mongoose from "mongoose";
const CourseSchema = new mongoose.Schema(
  {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    img: {
      type: String,
    },
  },
  { timestamps: true }
);
 
export default mongoose.model("Course", CourseSchema);