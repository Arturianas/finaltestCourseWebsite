import React from 'react'
import { Link } from 'react-router-dom'
import CourseList from '../../components/courseList/CourseList'
import FeaturedCourses from '../../components/featuredCourses/FeaturedCourses'
import MailList from '../../components/mailList/MailList'
import { useSelector} from 'react-redux'

const UserHomePgae = () => {

    const { user } = useSelector((state) => state.auth)

  return (
    <div className="homeContainer">
        {/* <Featured/> */}
        <h2>{user.details.username}</h2>
        <h1 className="homeTitle">User </h1>
        <CourseList/>
        <h1 className="homeTitle">User</h1>
        <FeaturedCourses cat=""/>
        {/* {!user && <MailList/>} */}
        <MailList/>
      </div>
  )
}

export default UserHomePgae