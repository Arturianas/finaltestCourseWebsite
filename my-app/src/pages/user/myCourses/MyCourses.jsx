import React from 'react'
import './myCourses.scss'
import useFetch from "../../../hooks/useFetch.js";
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";


import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import MyCourseList from '../../../components/user/myCourseList/MyCourseList.jsx';
import Navbar from '../../../components/common/navbar/Navbar'


const MyCourses = () => {




    const { user } = useSelector((state) => state.auth)

    const navigate = useNavigate()
    // const dispatch = useDispatch()
  
    useEffect(() => {
      // if (isError) {
      //   toast.error(message)
      // }
  
      if (!user) {
        navigate('/')
      }
  
      // getCategories(dispatch);
      // dispatch(reset())
    }, [user, navigate])

    const { data, loading, error } = useFetch(
        `/users/purchase/${user.details._id}`
      );


  return (
    <>
    <Navbar/>
    {/* Your Courses: */}
    <div className="myCoursesContainer">
      <div className="myCoursesInfoTop">
        <h2>Here you can find all your courses</h2>
      </div>
    <ul className='myCourseslist'>
        {data?.map((item)=>(
            
              <MyCourseList course={item} key={item._id}/>
            
          // <>
          //     <h2>{item.name}</h2>
          // </>
      ))}
      </ul>
  </div>
      
        
    </>
  )
}

export default MyCourses