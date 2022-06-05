import Category from '../models/Categories.js'


// @desc CREATE Category
//  @route POST /api/v2/categories
// @access Public
export const createCategory = async (req, res, next) => {
    try {
      const newCategory = new Category({
        ...req.body,
      });
   
      await newCategory.save();
      res.status(200).send("Category has been created.");
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


// @desc GET All Categories
//  @route GET /api/v2/categories
// @access Public
  export const getCategories = async (req,res,next)=>{
    try {
      const categories = await Category.find();
      res.status(200).json(categories);
    } catch (err) {
      next(err);
    }
  }


  // @desc DELETE Course
//  @route DELETE /api/v2/course/:id
// @access Private 
export const deleteCategory = async (req,res,next)=>{
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.status(200).json("Category has been deleted.");
  } catch (err) {
    next(err);
  }
}