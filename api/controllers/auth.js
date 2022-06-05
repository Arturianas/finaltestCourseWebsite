import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();

    const token = jwt.sign(
      { id: newUser._id, isAdmin: newUser.isAdmin, isInstructor: newUser.isInstructor },
      process.env.JWT
    );

    const { password, isAdmin, isInstructor, ...otherDetails } = newUser._doc;

    res.cookie("access_token", token, {
      httpOnly: true,
    })
    .status(200).json({ details: { ...otherDetails }, auth: {isAdmin, isInstructor} });
  } catch (err) {
    next(err);
  }
};
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin, isInstructor: user.isInstructor },
      process.env.JWT
    );

    const { password, isAdmin, isInstructor, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails }, auth: {isAdmin, isInstructor} });
  } catch (err) {
    next(err);
  }
};



// @desc    Logout controller to clear cookie and token
// @route   GET /api/auth/logout
// @access  Private
export const logout = async (req, res) => {
  // Set token to none and expire after 5 seconds
  res.cookie('token', 'none', {
      expires: new Date(Date.now() + 5 * 1000),
      httpOnly: true,
  })
  res
      .status(200)
      .json({ success: true, message: 'User logged out successfully' })
}