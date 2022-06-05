import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    country: {
      type: String,
      required: false,
    },
    img: {
      type: String,
    },
    city: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: false,
    },
    courses: {
      type: [String],
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isInstructor: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
 
export default mongoose.model("User", UserSchema);
