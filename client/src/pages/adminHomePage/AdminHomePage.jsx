import React from 'react'
import AdminCategoriesControl from '../../components/adminCategoriesControl/AdminCategoriesControl.jsx';
import useFetch from "../../hooks/useFetch.js";
import './adminHomePage.scss'

import AdminSidebar from '../../components/adminSidebar/AdminSidebar.jsx';
import AdminNavbar from '../../components/adminNavbar/AdminNavbar.jsx';
import { Routes, Route, Link } from "react-router-dom";

import Table from '../../components/table/Table.jsx';


const AdminHomePage = () => {

  // const { data, loading, error } = useFetch(
  //   "/users/all"
  // );

  // console.log(data)

  return (
    <div className="home">
    <AdminSidebar/>
    <div className="homeContaineris">
      <AdminNavbar/>
      <h2>Admin Dashboard</h2>
      <h3>You can Read and Delete Users and Categories</h3>
      {/* <Table/> */}
      
      
      
    </div>

  </div>
  )
}

export default AdminHomePage