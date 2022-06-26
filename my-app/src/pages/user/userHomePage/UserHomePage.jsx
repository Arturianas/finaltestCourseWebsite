import React from 'react'
import Navbar from '../../../components/common/navbar/Navbar'
import Header from '../../../components/visitor/header/Header'
import CourseList from '../../../components/common/courseList/CourseList'
import './userHomePage.scss'
import FeaturedCourses from '../../../components/common/featuredCourses/FeaturedCourses'

const UserHomePage = () => {
  return (
    <>
    <Navbar/>
    <Header/>
       <div className="homeContainerCenter">
        
    {/* <Featured/> */}
    <h2>You are User, welcome to Marketplace!</h2>
    <h1 className="homeTitle">Visitor </h1>
    <CourseList/>
    <h1 className="homeTitle">Visitor</h1>
    {/* <FeaturedCourses cat=""/> */}
    <FeaturedCourses cat=""/>
    {/* {!user && <MailList/>} */}
    {/* <MailList/> */}
  </div>
    </>
  )
}

export default UserHomePage