import React from 'react'
import './instructorNewCoursePage.scss'



import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../../../firebase";


import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
// import { createCategory, reset } from '../../features/adminCategory/categorySlice.js'
import { useState, useEffect } from 'react'

// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

import axios from "axios";
import InstructorSidebar from '../../../../components/instructor/instructorSidebar/InstructorSidebar'
import { addCourse } from "../../../../features/instructorCourses/instructorCoursesService";
import UploadIcon from '@mui/icons-material/Upload';
import useFetch from "../../../../hooks/useFetch";




const InstructorNewCoursePage = () => {


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

  // const { isFetching, isSuccess, error } = useSelector(
  //   (state) => state.instructorCourses
  // )

  const  createdCourse  = useSelector((state) => state.instructorcourses.isSuccess)
  // console.log()



  const { data, loading, error } = useFetch(
    `/categories`
  );

  console.log(data)

 const [newCourse, setNewCourse] = useState(null);
 const [img, setImg] = useState(null);
 const [courseVideo, setCourseVideo] = useState(null);
 const [salesVideo, setSalesVideo] = useState(null);
 const [uploaded, setUploaded] = useState(0);

 console.log(newCourse)

  // const navigate = useNavigate()
  //  const dispatch = useDispatch()



 const handleChange = (e) => {
   setNewCourse((prev) => {
     return { ...prev, [e.target.name]: e.target.value };
   });
 };



 const upload = (items) => {
  items.forEach((item) => {
    const fileName = new Date().getTime() + item.file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, item.file);

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
       setNewCourse((prev) => {
        return { ...prev, [item.label]: downloadURL };
      });
      setUploaded((prev) => prev + 1);
      });
    }
  );

  });
};



 const handleUpload = (e) => {
  e.preventDefault();
  upload([
    { file: img, label: "img" },
    { file: courseVideo, label: "courseVideo" },
    { file: salesVideo, label: "promotionVideo" },
  ]);
};




const handleSubmit = (e) => {
  e.preventDefault();
  const courseData = {
    instructor: user.details._id,
    ...newCourse
  }

  addCourse(courseData, dispatch);

  // e.target.reset();
  navigate('/instructor/courses')
};

console.log(salesVideo)
  return (
    // <div className="home">
    //   {/* <InstructorSidebar/> */}
    //   <div className="homeContaineris">
    //     {/* <InstructorNavbar/> */}
    //     <div className="newProduct">
    //   <h1 className="addProductTitle">New Course</h1>
    //   <form className="addProductForm">
    //     <div className="addProductItem">
    //       <label>Promotion Image</label>
    //       <input
    //         type="file"
    //         id="img"
    //         name="img"
    //         onChange={(e) => setImg(e.target.files[0])}
    //       />
    //     </div>
    //     <div className="addProductItem">
    //       <label>Promotion Video</label>
    //       <input
    //         type="file"
    //         name="salesVideo"
    //         onChange={(e) => setSalesVideo(e.target.files[0])}
    //       />
    //     </div>
    //     <div className="addProductItem">
    //       <label>Course Video</label>
    //       <input
    //         type="file"
    //         name="courseVideo"
    //         onChange={(e) => setCourseVideo(e.target.files[0])}
    //       />
    //     </div>
    //    <div className="addProductItem">
    //       <label>New Course Name</label>
    //       <input
    //         name="name"
    //         type="text"
    //         placeholder="Course Name"
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="addProductItem">
    //       <label>Title</label>
    //       <input
    //         type="text"
    //         placeholder="title"
    //         name="title"
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="addProductItem">
    //       <label>Description</label>
    //       <input
    //         name="desc"
    //         type="text"
    //         placeholder="description..."
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="addProductItem">
    //       <label>Price</label>
    //       <input
    //         name="price"
    //         type="number"
    //         placeholder="100"
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="addProductItem">
    //       <label>Level</label>
    //       <select name="level" onChange={handleChange}>
    //         <option value="Beginner">Beginner</option>
    //         <option value="Intermediate">Intermediate</option>
    //         <option value="Advanced">Advanced</option>
    //       </select>
    //     </div>
    //     <div className="addProductItem">
    //       <label>Category</label>
    //       <select name="category" onChange={handleChange}>
    //         <option value="Design">Design</option>
    //         <option value="Software">Software</option>
    //         <option value="Marketing">Marketing</option>
    //       </select>
    //     </div>
        
    //     {/* <div className="addProductItem">
    //       <label>Is Series?</label>
    //       <select name="isSeries" id="isSeries" onChange={handleChange}>
    //         <option value="false">No</option>
    //         <option value="true">Yes</option>
    //       </select>
    //     </div> */}
        
        
    //     {uploaded === 3 ? (
    //       <button className="addProductButton" onClick={handleSubmit}>
    //         Create
    //       </button>
    //     ) : (
    //       <button className="addProductButton" onClick={handleUpload}>
    //         Upload
    //       </button>
    //     )}
        
    //   </form>
    // </div>
    //   </div>
    // </div>

    <div className="home">
      {/* <InstructorSidebar/> */}
      <div className="homeContaineris">
        <div className="newCoursePage">
          <div className="newCoursePageCenter">
          <h1>New Course</h1>
            <form>
            <div className="courseDetailsSection">
              <div className="guidence">
                <div className="container">
                  <h3>Add Details</h3>
                  <p className='courseGuidence'>This information will be displayed publicly so describe your course in details.</p>
                </div>
              </div>
              <div className="courseDetails">
                <div className="container">
                {/* <form> */}
                  <div className="courseForm">
                    <label>Course Name</label>
                    <input
                      className='courseInput'
                      name="name"
                      type="text"
                      placeholder="Give your course a name."
                      onChange={handleChange}
                    />
                  </div>

                  <div className="courseForm">
                    <label>Course Subtitle</label>
                    <input
                        className='courseInput'                   
                        type="text"
                        placeholder="Give your course a subtitle."
                        name="title"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="courseForm">
                    <label>Course Description</label>
                    {/* <input
                        className='courseInput'                   
                        type="text"
                        placeholder="Give your course a subtitle."
                        name="title"
                      // onChange={handleChange}
                    /> */}
                    <textarea 
                    className='courseTextarea'
                    rows="7" 
                    // cols="50"
                    name="desc"
                    // type="text"
                    placeholder="Write course description."
                    onChange={handleChange}
                    ></textarea>
                    <p className='textareaP'>Brief description for your course. 5000 is maximum amount of characters allowed.</p>
                  </div>

                  <div className="priceCatLevContainer">
                  <div className="courseForm">
                    <label>Choose category</label>
                    <select 
                    name="category" 
                    className='courseInput' 
                    onChange={handleChange}
                    >
                      <option >-- Select Category --</option>
                      {data?.map((item) => (
                        <option value={item.category}>{item.category}</option>
                      ))}
                      {/* <option value="Design">Design</option>
                      <option value="Software">Software</option>
                      <option value="Marketing">Marketing</option> */}
                    </select>
                  </div>
                  <div className="courseForm">
                    <label>Choose level</label>
                    <select
                     name="level" 
                     className='courseInput' 
                     onChange={handleChange}
                     >
                      <option >-- Select Level --</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>
                  <div className="courseForm">
                    <label>Price</label>
                    <input
                      name="price"
                      className='courseInput' 
                      type="number"
                      placeholder="100"
                      onChange={handleChange}
                    />
                  </div>
                  </div>
                {/* </form> */}
                </div>
              </div>

              {/* Course Details */}
            </div>

            <hr className='solid'/>




            <div className="courseMediaSection">
              <div className="guidence">
                <div className="container">
                  <h3>Add Media</h3>
                  <p className='courseGuidence'>Add your Course video as well as promotional image and video. Promotional meterial will be visible publicly.</p>
                </div>
              </div>
              <div className="courseMedia">
                <div className="container">
                  <div className="promotionMedia">
                    {/* <div className="promotionImg">

                    </div>
                    <div className="promotionVideo">

                    </div> */}
                     <div className="promotionImg">

                        <div className="showUploadedImg">
                          <p>Promotional Image</p>
                          <img  src={
                              img
                                ? URL.createObjectURL(img)
                                : "https://icon-library.com/images/add-photo-icon/add-photo-icon-19.jpg"
                            } alt="Promotional Img" className="promotionUploadImg"
                          />
                        </div>

                      <div className="uploadImg">
                      <p>Promotional Image will be diplayed in the marketplace.</p>
                        <div className="promotionInputBorder">
                        <label for="promotionImg" className='promotionInput'>
                              <UploadIcon className="icon" />
                              <p>Click and Upload the file.</p>
                            </label>
                          <input
                            className='promotionInput'
                            type="file"
                            id="promotionImg"
                            name="img"
                            style={{ display: "none" }}
                            accept=".jpg, .jpeg, .png"
                            onChange={(e) => setImg(e.target.files[0])}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="promotionVideo">
                      {/* <label>Promotion Video</label> */}
                      <p>PromotionVideo</p>
                      <div className="promotionInputBorder">
                      
                      <label for="promotionVideo" className='promotionInput'>
                       <UploadIcon className="icon" />
                       {!salesVideo? (
                        <p>Click and Upload the promotional video.</p>
                       ) : (
                        <p>{salesVideo.name}</p>
                       )}
                       {/* <p>Upload the promotional video</p>
                       <p>{salesVideo.name}</p> */}
                      </label>
                      <input
                        className='promotionInput'
                        type="file"
                        id="promotionVideo"
                        name="salesVideo"
                        style={{ display: "none" }}
                        onChange={(e) => setSalesVideo(e.target.files[0])}
                      />
                      {/* <img  src={
                        file
                          ? URL.createObjectURL(promotionVideo)
                          : "https://upload.wikimedia.org/wikipedia/commons/e/eb/Example_of_subtitles_%28Charade%2C_1963%29.jpg"
                      } alt="" className="productUploadImg" /> */}
                      </div>
                      
                    </div>

                    <div className="promotionVideo">
                      {/* <label>Promotion Video</label> */}
                      <p>Course Video</p>
                      <div className="promotionInputBorder">
                      
                      <label for="courseVideo" className='promotionInput'>
                       <UploadIcon className="icon" />
                       {!courseVideo? (
                        <p>Click and Upload the course.</p>
                       ) : (
                        <p>{courseVideo.name}</p>
                       )}
                       {/* <p>Upload the promotional video</p>
                       <p>{salesVideo.name}</p> */}
                      </label>
                      <input
                        className='promotionInput'
                        type="file"
                        id="courseVideo"
                        
                        style={{ display: "none" }}
                        
                        
                        name="courseVideo"
                        onChange={(e) => setCourseVideo(e.target.files[0])}
                      />
                      {/* <img  src={
                        file
                          ? URL.createObjectURL(promotionVideo)
                          : "https://upload.wikimedia.org/wikipedia/commons/e/eb/Example_of_subtitles_%28Charade%2C_1963%29.jpg"
                      } alt="" className="productUploadImg" /> */}
                      </div>
                      
                    </div>

                    <div className="uploadCreateBtn">
                      {uploaded > 0 && uploaded < 3 && <p className='smlNotification'>Media is uploading...</p>}
                      {/* {createdCourse === false? (<></>) : (<p className='smlNotification'>Course has been created.</p>)} */}
                      
                      {/* {createdCourse? && <p>Course has been created.</p>} */} 
                        {uploaded === 3 ? (
                            <button className="createButton" onClick={handleSubmit}>
                              Create
                            </button>
                          ) : (
                            <button className="uploadButton" onClick={handleUpload}>
                              Upload
                            </button>
                        )}
                    </div>
                    
                  </div>
                </div>
                
              </div>
              {/* Course Media */}
              
            </div>
            
            </form>
          </div>
        
        </div>
        
      </div>
    </div>
  )
}

export default InstructorNewCoursePage