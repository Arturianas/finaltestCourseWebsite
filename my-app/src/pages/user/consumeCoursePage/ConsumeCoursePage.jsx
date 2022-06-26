import React from 'react'
import './consumeCoursePage.scss'
import { Link } from 'react-router-dom'
import useFetch from "../../../hooks/useFetch";
import {
  useParams
} from "react-router-dom";
// import InstructorCourses from '../../components/instructorCourses/InstructorCourses.jsx';
import { useDispatch } from 'react-redux';
import Navbar from '../../../components/common/navbar/Navbar';
import { addProduct } from "../../../features/cart/cartSlice";
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector} from 'react-redux'
import ConsumeCourse from '../../../components/user/consumeCourse/ConsumeCourse';


    

const ConsumeCoursePage = () => {

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



    let { id } = useParams();

    const { data, loading, error } = useFetch(
      `/course/${id}`
    );
    
    // const dispatch = useDispatch();
  
    // const handleClick = () => {
    //   dispatch(
    //     addProduct({ ...data })
    //   );
    // };

console.log(data)


  return (
    <>
      <Navbar/>
      <div className="consumeCoursePageContainer">
        {data? (
          <ConsumeCourse course={data} key={data._id}/>
        ) : (
          <p>No access</p>
        )}
      </div>   
    </>
    
  )
}

export default ConsumeCoursePage