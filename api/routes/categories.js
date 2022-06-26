import express from "express";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
import {getCategories, createCategory, deleteCategory, updateCategory} from '../controllers/categories.js'
 
const router = express.Router();

router.get("/", getCategories)
router.post("/",verifyAdmin, createCategory)
router.delete("/:id",verifyAdmin, deleteCategory)
router.put("/:id",verifyAdmin, updateCategory)



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