import React from 'react'
import { Link } from 'react-router-dom'
import CourseList from '../../components/courseList/CourseList'
import FeaturedCourses from '../../components/featuredCourses/FeaturedCourses'
import MailList from '../../components/mailList/MailList'
import { useSelector} from 'react-redux'
import InstructorCourses from '../../components/instructorCourses/InstructorCourses'

const InstructorHomePage = () => {

    const { user } = useSelector((state) => state.auth)

  return (
    <div className="homeContainer">

        {/* <Featured/> */}
        <Link to="/manageCourse" style={{ color: "inherit", textDecoration: "none" }}>
                  <button className="navButton">Create Course</button>
                </Link>
        <h2>Hello {user.details.username},</h2>
        <h2>My Created Courses</h2>
        <InstructorCourses ids={user.details._id}/>
        
        {/* {!user && <MailList/>} */}
        <MailList/>
        
      </div>
  )
}

export default InstructorHomePage