
import './instructorSingleCoursePage.scss'



import React, { useState, useEffect } from 'react'

import { Link,  useNavigate,  useParams } from "react-router-dom";
import UploadIcon from '@mui/icons-material/Upload';

// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     useParams
//   } from "react-router-dom";
// import "./product.css";
// import Chart from "../../components/chart/Chart";
// import { productData } from "../../dummyData";
// import { Publish } from "@material-ui/icons";
// import { useSelector } from "react-redux";
// import { useEffect, useMemo, useState } from "react";
// import { userRequest } from "../../requestMethods";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../../../firebase";

import { useDispatch, useSelector } from 'react-redux';
import { updateCourse } from "../../../../features/instructorCourses/instructorCoursesService";
import InstructorSidebar from '../../../../components/instructor/instructorSidebar/InstructorSidebar';


const InstructorSingleCoursePage = () => {


  const { user } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    // if (isError) {
    //   toast.error(message)
    // }

    if (!user || !user.auth.isInstructor) {
      navigate('/')
    }

    // getCategories(dispatch);
    // dispatch(reset())
  }, [user, navigate])


//course id
let { id } = useParams();

console.log(id)

const course = useSelector((state)=> state.instructorcourses.courses.find((course)=> course._id === id))
console.log(course)
// const product = useSelector((state) =>
// state.product.products.find((product) => product._id === productId)
// );
const [inputs, setInputs] = useState({}); 
const [file, setFile] = useState(null);

// const navigate = useNavigate()
// const dispatch = useDispatch()

const handleChange = (e) => {
  
  setInputs((prev) => {
    return { ...prev, [e.target.name]: e.target.value };
  });
};

// const handleClick = (e) => {
//   e.preventDefault();
  
//   console.log('hey arturas')
//   updateCourse(id ,inputs, dispatch);
// };




const handleClick = (e) => {
  e.preventDefault();

  if (!file) {
    const updatedCourse = {...inputs};
    updateCourse(id ,updatedCourse, dispatch);
  } else {
    

    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
  
    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
         //  const category = {  img: downloadURL, category: cat };
          // addProduct(product, dispatch);
         //  console.log(category)
         //  dispatch(createCategory(category))
         //  navigate('/admin/categories')
        //  const courseData = {  
        //    instructor: user.details._id,
        //    name: inputs.name,
        //    category: inputs.category,
        //    level: inputs.level,
        //    img: downloadURL,
        //    title: inputs.title,
        //    desc: inputs.desc,
        //    rating: parseInt(inputs.rating),
        //    price: parseInt(inputs.price),  
           
        //  };
         const updatedCourseImg = {...inputs, img: downloadURL};
         updateCourse(id ,updatedCourseImg, dispatch);
        });
      }
    );
  }
  
};

console.log(inputs)



  return (
    <div className="home">
    {/* <InstructorSidebar/> */}
  <div className="homeContaineris">
    {/* <InstructorNavbar/> */}
    <div className="product">
    <div className="productTitleContainer">
      <h1 className="productTitle">Course: {course.name}</h1>
      <Link to="/instructor/course/new">
        <button className="productAddButton">Create</button>
      </Link>
    </div>
    {/* <div className="productTop">
      <div className="productTopLeft">
       
      </div>
      <div className="productTopRight">
        <div className="productInfoTop">
          <img src="" alt="" className="productInfoImg" />
          <span className="productName">{}</span>
        </div>
        <div className="productInfoBottom">
          <div className="productInfoItem">
            <span className="productInfoKey">id:</span>
            <span className="productInfoValue">{}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">sales:</span>
            <span className="productInfoValue">5123</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">in stock:</span>
            <span className="productInfoValue">{}</span>
          </div>
        </div>
      </div>
    </div> */}
    <div className="productBottom">
      <form className="productForm">
        <div className="productFormLeft">
          <label>Course Name</label>
            <input onChange={handleChange} name="name" type="text" placeholder={course.name} />
          <label>Course Description</label>
            <input onChange={handleChange} name="desc" type="text" placeholder={course.desc} />
          <label>Price</label>
            <input onChange={handleChange} name="price" type="text" placeholder={course.price} />
          {/* <label>In Stock</label>
          <select name="inStock" id="idStock">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select> */}
        </div>
        <div className="productFormRight">
          <div className="productUpload">
            <img  src={
              file
                ? URL.createObjectURL(file)
                : course.img
            } alt="" className="productUploadImg" />
            <label for="file">
            <UploadIcon className="icon" />
            </label>
            <input onChange={(e) => setFile(e.target.files[0])} type="file" id="file" style={{ display: "none" }} />
          </div>
          <button onClick={handleClick} className="productButton">Update</button>
        </div>
      </form>
    </div>
  </div>
    
  </div>

</div>
  )
}

export default InstructorSingleCoursePage