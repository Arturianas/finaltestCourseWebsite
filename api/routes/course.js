import express from "express";
import { verifyAdmin, verifyToken, verifyUser, verifyInstructor } from "../utils/verifyToken.js";
import {getCourse, getAllCourses, createCourse, updateCourse, deleteCourse, getCourseByUser, getCourseByCategory} from '../controllers/course.js'
 
const router = express.Router();

// router.get("/", (req, res) => {
//     res.send("course route")
// })

router.post("/", createCourse)
router.get("/:id", getCourse)
router.put("/:id", updateCourse)
router.delete("/:id", deleteCourse)
router.get("/", getAllCourses)
router.post('/createCourse', verifyToken,  createCourse)
router.get("/user/:id", getCourseByUser)
router.get('/category/:category', getCourseByCategory)

// /api/v2/course/:id

// Test Authorization

// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//   res.send("hello user, you are logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//   res.send("hello user, you are logged in and you can delete your account")
// })

// router.get("/checkadmin", verifyAdmin, (req,res,next)=>{
//   res.send("hello admin, you are logged in and you can delete all accounts")
// })
 
export default router;