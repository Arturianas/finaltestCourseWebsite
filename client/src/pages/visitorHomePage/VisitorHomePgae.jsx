import React from 'react'
import { Link } from 'react-router-dom'
import CourseList from '../../components/courseList/CourseList'
import FeaturedCourses from '../../components/featuredCourses/FeaturedCourses'
import MailList from '../../components/mailList/MailList'



const VisitorHomePgae = () => {
  return (
    <div className="homeContainer">
        {/* <Featured/> */}
        <h2>You are Visitor, welcome to Marketplace!</h2>
        <h1 className="homeTitle">Visitor </h1>
        <CourseList/>
        <h1 className="homeTitle">Visitor</h1>
        <FeaturedCourses cat=""/>
        {/* {!user && <MailList/>} */}
        <MailList/>
      </div>
  )
}

export default VisitorHomePgae