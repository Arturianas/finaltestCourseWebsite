import React from 'react'
import { Routes, Route} from "react-router-dom";
import { useSelector} from 'react-redux'

import Login from './pages/authPages/login/Login';
import Register from './pages/authPages/register/Register';
import Home from './pages/home/Home';
import CartPage from './pages/common/cartPage/CartPage'
// Admin Pages
import AdminCategoriesPage from './pages/admin/categories/adminCategoriesPage/AdminCategoriesPage';
import AdminNewCategoryPage from './pages/admin/categories/adminNewCategoryPage/AdminNewCategoryPage';
import AdminUsersPage from './pages/admin/users/adminUsersPage/AdminUsersPage';
import AdminSingleUserPage from './pages/admin/users/adminSingleUserPage/AdminSingleUserPage';
// Instructor Pages
import InstructorCoursesPage from './pages/instructor/courses/InstructorCoursesPage/InstructorCoursesPage';
import InstructorSingleCoursePage from './pages/instructor/courses/InstructorSingleCoursePage/InstructorSingleCoursePage';
import InstructorNewCoursePage from './pages/instructor/courses/InstructorNewCoursePage/InstructorNewCoursePage';
//  User Pages
import MyCourses from './pages/user/myCourses/MyCourses'
import { categoriesColumns, userColumns } from './datatablesource';
import AdminSingleCategoryPage from './pages/admin/categories/adminSingleCategoryPage/AdminSingleCategoryPage';
import CoursePage from './pages/visitor/coursePage/CoursePage';
import ConsumeCoursePage from './pages/user/consumeCoursePage/ConsumeCoursePage';
import InstructorSidebar from './components/instructor/instructorSidebar/InstructorSidebar';
import AdminSidebar from './components/admin/adminSidebar/AdminSidebar';



const Main = () => {

  const { user } = useSelector((state) => state.auth)
  return (
    <div>
      {user && user.auth.isInstructor && <InstructorSidebar/>}
      {user && user.auth.isAdmin && <AdminSidebar/>}
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />

        <Route path="/admin/categories" element={<AdminCategoriesPage columns={categoriesColumns}/>} />
        <Route path="/admin/categories/:id" element={<AdminSingleCategoryPage/>} />
        <Route path="/admin/categories/new" element={<AdminNewCategoryPage/>} />
        <Route path="/admin/users" element={<AdminUsersPage columns={userColumns}/>} />
        <Route path="/admin/users/:id" element={<AdminSingleUserPage/>} />

        {/* <Route path="/instructor/courses" element={<InstructorCoursesPage columns={categoriesColumns}/>} */}

        <Route path="/instructor/courses" element={<InstructorCoursesPage/>}/>
        <Route path="/instructor/courses/:id" element={<InstructorSingleCoursePage/>}/>
        <Route path="/instructor/course/new" element={<InstructorNewCoursePage/>}/>

        <Route path="/myCourses" element={<MyCourses/>} />
        <Route path="/myCourses/:id" element={<ConsumeCoursePage/>} />

        <Route path="/cart" element={<CartPage/>} />
        <Route path="/course/:id" element={<CoursePage/>} />

        
        {/* <Route path="/courses" element={<List/>} />
        <Route path="/course/:id" element={<Course/>} />
        <Route path="/manageCourse" element={<ManageCourse/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/courses/:category" element={<CategoryPage/>} />
        <Route path="/admin/users" element={<AdminUsersPage columns={userColumns}/>} />
        <Route path="/admin/categories" element={<AdminCategoriesPgae columns={categoriesColumns}/>} />
        <Route path="/admin/categories/new" element={<AdminNewCategory/>} />
        <Route path="/adminUsersPage/:id" element={<AdminSingleUser/>} />
        <Route path="/instructor/courses" element={<InstructorCoursesPage columns={categoriesColumns}/>} />
        <Route path="/instructor/courses/:id" element={<InstructorOneCoursePage/>} />
        <Route path="/instructor/course/new" element={<InstructorNewCourse/>} />
        <Route path="/myCourses" element={<MyCourses/>} /> */}
      </Routes>
    </div>
  )
}

export default Main