import User from "../models/User.js"; 
import Course from "../models/Course.js"



// @desc Update user data
//  @route PUT /api/v2/users/:id
// @access Private 
export const updateUser = async (req,res,next)=>{
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
}
export const deleteUser = async (req,res,next)=>{
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    next(err);
  }
}
export const getUser = async (req,res,next)=>{
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
}


export const getUsers = async (req,res,next)=>{
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
}


// @desc GET purchased courses list
//  @route GET /api/v2/course/purchase/:id
// @access Private
export const getUserPurchasedCourses = async (req,res,next)=>{
  try {
    const user = await User.findById(req.params.id);
    const list = user.courses
    const courses = await Course.find({_id: {$in: list}})
    res.status(200).json(courses);
  } catch (err) {
    next(err);
  }
}



// @desc Update user data
//  @route PUT /api/v2/users/:id
// @access Private 
export const addUserPurchasedCourses = async (req,res,next)=>{
  try {
    const user = await User.findById(req.params.id);

    const updatedUser = await user.update({$push: {courses: req.body}});
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
}



// @desc CREATE purchased courses list
//  @route POST /api/v2/course/purchase
// @access Private
// export const addUserPurchasedCourses = async (req, res, next) => {
//   try {
//     const newPurchase = new Course({
//       ...req.body,
//     });
 
//     await newCourse.save();
//     res.status(200).send("Course has been created.");
//   //   res.status(200).json({
//   //     _id: newUser._id,
//   //       username: newUser.username,
//   //       email: newUser.email,
//   //       isAdmin: newUser.isAdmin,
//   //       isInstructor: newUser.isInstructor
//   //   })
//   } catch (err) {
//     next(err);
//   }
// };