import mongoose from "mongoose";
const CourseSchema = new mongoose.Schema(
  {
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    // video: { type: String },
    img: {
      type: [String],
    },
    courseVideo: {
      type: [String],
    },
    promotionVideo: {
      type: [String],
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
      max:2000,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    likes: {
      type: Array,
      default: [],
    },
    price: {
      type: Number,
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
 
export default mongoose.model("Course", CourseSchema);


