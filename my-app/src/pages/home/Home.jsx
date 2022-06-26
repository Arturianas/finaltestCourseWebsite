import './home.scss'
import { useSelector} from 'react-redux'

import AdminHomePage from '../../pages/admin/adminHomePage/AdminHomePage';
import InstructorHomePage from '../../pages/instructor/instructorHomePage/InstructorHomePage';
import UserHomePage from '../../pages/user/userHomePage/UserHomePage';
import VisitorHomePage from '../../pages/visitor/visitorHomePage/VisitorHomePage';
import InstructorSidebar from '../../components/instructor/instructorSidebar/InstructorSidebar';



const Home = () => {
  const { user } = useSelector((state) => state.auth)

  // Based on the user role this page displays Admin, Instructor, User or Visitor Home page

  return (
    <>
    {/* <InstructorSidebar/> */}
      {user? (
        <>
          {user.auth.isAdmin && <AdminHomePage/>}
          {user.auth.isInstructor && <InstructorHomePage/>}
          {!user.auth.isAdmin && !user.auth.isInstructor && <UserHomePage/>}  
        </>
      ) : (
        <VisitorHomePage/>
      )}
    </>
  )
}

export default Home