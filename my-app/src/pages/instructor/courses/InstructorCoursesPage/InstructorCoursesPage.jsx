import React from 'react'
import InstructorDatatable from '../../../../components/instructor/instructorDatatable/InstructorDatatable'
import InstructorSidebar from '../../../../components/instructor/instructorSidebar/InstructorSidebar'
import './instructorCoursesPage.scss'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector} from 'react-redux'


const InstructorCoursesPage = () => {

  const { user } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  // const dispatch = useDispatch()

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

  return (
    <div className="home">
    {/* <InstructorSidebar/> */}
    <div className="homeContaineris">
      {/* <InstructorNavbar/> */}
      <h1>Hello, Arturas</h1>
      <h2>Manage Your Courses</h2>
      {/* <Datatable columns={columns}/> */}
      {/* <InstructorDatatable/> */}
      
      {/* <InstructorDatatable/> */}
      <InstructorDatatable/>
      
      <br/>
      <br/>
      <br/>
     
      
    </div>

  </div>
  )
}

export default InstructorCoursesPage