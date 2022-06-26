import Course from "../models/Course.js";



// @desc CREATE Course
//  @route POST /api/v2/course
// @access Public
export const createCourse = async (req, res, next) => {
    try {
      const newCourse = new Course({
        ...req.body,
      });
   
      await newCourse.save();
      res.status(200).send("Course has been created.");
    //   res.status(200).json({
    //     _id: newUser._id,
    //       username: newUser.username,
    //       email: newUser.email,
    //       isAdmin: newUser.isAdmin,
    //       isInstructor: newUser.isInstructor
    //   })
    } catch (err) {
      next(err);
    }
  };




// @desc UPDATE Course
//  @route PUT /api/v2/course/:id
// @access Private 
export const updateCourse = async (req,res,next)=>{
  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedCourse);
  } catch (err) {
    next(err);
  }
}


// @desc DELETE Course
//  @route DELETE /api/v2/course/:id
// @access Private 
export const deleteCourse = async (req,res,next)=>{
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.status(200).json("Course has been deleted.");
  } catch (err) {
    next(err);
  }
}


// @desc GET Course
//  @route GET /api/v2/course/:id
// @access Private 
export const getCourse = async (req,res,next)=>{
  try {
    const course = await Course.findById(req.params.id);
    res.status(200).json(course);
  } catch (err) {
    next(err);
  }
}


// @desc GET All Courses
//  @route GET /api/v2/course/
// @access Private 
export const getAllCourses = async (req,res,next)=>{
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (err) {
    next(err);
  }
}



// find({user: req.user.id})

// @desc GET Course By Id
//  @route GET /api/v2/course/user/:id
// @access Private 
export const getCourseByUser = async (req,res,next)=>{
  try {
    const course = await Course.find({instructor: req.params.id});
    res.status(200).json(course);
  } catch (err) {
    next(err);
  }
}



// @desc GET Course By Category
//  @route GET /api/v2/course/category
// @access Private 
export const getCourseByCategory = async (req,res,next)=>{
  try {
    const course = await Course.find({category: req.params.category});
    res.status(200).json(course);
  } catch (err) {
    next(err);
  }
}





// @desc PUT Like/Dislike Course
//  @route PUT /api/v2/course/like/:id
// @access Private 
export const likeCourse = async (req,res,next)=>{
  try {
    const course = await Course.findById(req.params.id);
    


    // const course = await Post.findById(req.params.id);
    if (!course.likes.includes(req.body.userId)) {
      await course.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("The course has been liked");
    } else {
      await course.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("The course has been disliked");
    }


  } catch (err) {
    next(err);
  }
}

//like / dislike a post

// router.put("/:id/like", async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);
//     if (!post.likes.includes(req.body.userId)) {
//       await post.updateOne({ $push: { likes: req.body.userId } });
//       res.status(200).json("The post has been liked");
//     } else {
//       await post.updateOne({ $pull: { likes: req.body.userId } });
//       res.status(200).json("The post has been disliked");
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });