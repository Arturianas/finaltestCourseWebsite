import React from 'react'
import CourseList from '../../../components/common/courseList/CourseList'
import FeaturedCourses from '../../../components/common/featuredCourses/FeaturedCourses'
import Navbar from '../../../components/common/navbar/Navbar'
import Header from '../../../components/visitor/header/Header'
import MailList from '../../../components/visitor/mailList/MailList'
import './visitorHomePage.scss'

const VisitorHomePage = () => {
  return (
    <>
    <Navbar/>
    <Header/>
       <div className="homeContainerCenter">
        {/* <Header/> */}
    {/* <Featured/> */}
    <h2>You are Visitor, welcome to Marketplace!</h2>
    <h1 className="homeTitle">Visitor </h1>
    <CourseList/>
    <h1 className="homeTitle">Visitor</h1>
    {/* <FeaturedCourses cat=""/> */}
    <FeaturedCourses cat=""/>
    {/* {!user && <MailList/>} */}
    <MailList/>
  </div>
    </>
   
  )
}

export default VisitorHomePage