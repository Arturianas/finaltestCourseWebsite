import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Course from './pages/course/Course';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Login from './pages/login/Login';
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
        <Route path="/courses/:id" element={<Course/>} />
      </Routes>
    </div>
  )
}

export default Main