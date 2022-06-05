import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import FeaturedCourses from './components/featuredCourses/FeaturedCourses';
import Navbar from './components/navbar/Navbar';
import CartPage from './pages/cartPage/CartPage';
import CategoryPage from './pages/categoryPage/CategoryPage';
import Course from './pages/course/Course';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Login from './pages/login/Login';
import ManageCourse from './pages/manageCourse/ManageCourse';
import Register from './pages/register/Register';

const Main = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/courses" element={<List/>} />
        <Route path="/course/:id" element={<Course/>} />
        <Route path="/manageCourse" element={<ManageCourse/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/courses/:category" element={<CategoryPage/>} />
      </Routes>
    </div>
  )
}

export default Main