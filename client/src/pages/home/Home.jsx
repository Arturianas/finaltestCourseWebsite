import CourseList from '../../components/courseList/CourseList'
import Featured from '../../components/featured/Featured'
import FeaturedCourses from '../../components/featuredCourses/FeaturedCourses'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import './home.css'
import { useSelector, useDispatch } from 'react-redux'

const Home = () => {
  const { user } = useSelector((state) => state.auth)
  return (
    <div>
      {/* <Navbar/> */}
      <Header/>
      <div className="homeContainer">
        {/* <Featured/> */}
        <h2>{user && user.username}</h2>
        <h1 className="homeTitle">Browse by Category</h1>
        <CourseList/>
        <h1 className="homeTitle">Courses students love</h1>
        <FeaturedCourses/>
        {/* {!user && <MailList/>} */}
        <MailList/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home