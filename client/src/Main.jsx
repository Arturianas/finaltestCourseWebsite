import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import FeaturedCourses from './components/featuredCourses/FeaturedCourses';
import Navbar from './components/navbar/Navbar';
import AdminSingleUser from './pages/adminSingleUser/AdminSingleUser';
import AdminUsersPage from './pages/adminUsersPage/AdminUsersPage';
import CartPage from './pages/cartPage/CartPage';
import CategoryPage from './pages/categoryPage/CategoryPage';
import Course from './pages/course/Course';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Login from './pages/login/Login';
import ManageCourse from './pages/manageCourse/ManageCourse';
import Register from './pages/register/Register';
import { useSelector, useDispatch } from 'react-redux'
import AdminCategoriesPgae from './pages/adminCategoriesPage/AdminCategoriesPgae';
import { categoriesColumns, userColumns } from './datatablesource';
import AdminNewCategory from './pages/adminNewCategory/AdminNewCategory';

const Main = () => {

  const { user } = useSelector((state) => state.auth)
  return (
    <div>
      {!user && <Navbar/> }
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/courses" element={<List/>} />
        <Route path="/course/:id" element={<Course/>} />
        <Route path="/manageCourse" element={<ManageCourse/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/courses/:category" element={<CategoryPage/>} />
        <Route path="/admin/users" element={<AdminUsersPage columns={userColumns}/>} />
        <Route path="/admin/categories" element={<AdminCategoriesPgae columns={categoriesColumns}/>} />
        <Route path="/admin/categories/new" element={<AdminNewCategory/>} />
        <Route path="/adminUsersPage/:id" element={<AdminSingleUser/>} />
      </Routes>
    </div>
  )
}

export default Main