import CourseList from '../../components/courseList/CourseList'
import Featured from '../../components/featured/Featured'
import FeaturedCourses from '../../components/featuredCourses/FeaturedCourses'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import './home.css'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import ManageCourse from '../manageCourse/ManageCourse'
import InstructorHomePage from '../instructorHomePage/InstructorHomePage'
import UserHomePgae from '../userHomePage/UserHomePgae'
import AdminHomePage from '../adminHomePage/AdminHomePage'
import VisitorHomePgae from '../visitorHomePage/VisitorHomePgae'



const Home = () => {
  const { user } = useSelector((state) => state.auth)

  // console.log(user.details.email)

  return (
    <div>
      
      {/* <Navbar/> */}
      <Header/>
      
      {user? (
        <>
          {user.auth.isAdmin && <AdminHomePage/>}
          {user.auth.isInstructor && <InstructorHomePage/>}
          {!user.auth.isAdmin && !user.auth.isInstructor && <UserHomePgae/>}  
        </>
      ) : (
        <VisitorHomePgae/>
      )}
      
      <Footer/>
    </div>
  )
}

export default Home