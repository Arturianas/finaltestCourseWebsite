import React from 'react'
import './adminSingleUserPage.scss'

import { useDispatch, useSelector } from 'react-redux';
import { updateCourse } from "../../../../features/instructorCourses/instructorCoursesService";
import AdminSidebar from '../../../../components/admin/adminSidebar/AdminSidebar';

import { useState, useEffect } from 'react'

import { Link,  useNavigate,  useParams } from "react-router-dom";
import UploadIcon from '@mui/icons-material/Upload';

const AdminSingleUserPage = () => {

  const { user } = useSelector((state) => state.auth)
  
  // const dispatch = useDispatch()
  const navigate = useNavigate()
// const dispatch = useDispatch()

  useEffect(() => {
    // if (isError) {
    //   toast.error(message)
    // }

    if (!user || !user.auth.isAdmin) {
      navigate('/')
    }

    // getCategories(dispatch);
    // dispatch(reset())
  }, [user, navigate])

//course id
let { id } = useParams();

console.log(id)

const singleUser = useSelector((state)=> state.adminUsers.users.find((user)=> user._id === id))
console.log(user)
// const product = useSelector((state) =>
// state.product.products.find((product) => product._id === productId)
// );
const [inputs, setInputs] = useState({}); 
const [file, setFile] = useState(null);






  return (
    <div className="home">
    {/* <AdminSidebar/> */}
  <div className="homeContaineris">
    {/* <InstructorNavbar/> */}
    <div className="product">
    <div className="productTitleContainer">
      <h1 className="productTitle">User</h1>
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
            <input  name="name" type="text" placeholder={singleUser.username} />
          <label>Course Description</label>
            <input  name="desc" type="text" placeholder={singleUser.email} />
          <label>Price</label>
            {/* <input  name="price" type="text" placeholder={course.price} /> */}
          {/* <label>In Stock</label>
          <select name="inStock" id="idStock">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select> */}
        </div>
        <div className="productFormRight">
          <div className="productUpload">
            {/* <img  src={
              file
                ? URL.createObjectURL(file)
                : course.img
            } alt="" className="productUploadImg" /> */}
            <label for="file">
            <UploadIcon className="icon" />
            </label>
            <input onChange={(e) => setFile(e.target.files[0])} type="file" id="file" style={{ display: "none" }} />
          </div>
          <button onClick={() => console.log('hi')} className="productButton">Update</button>
        </div>
      </form>
    </div>
  </div>
    
  </div>

</div>
  )
}

export default AdminSingleUserPage