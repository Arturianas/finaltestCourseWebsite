import React from 'react'
import './adminHomePage.scss'
import AdminSidebar from '../../../components/admin/adminSidebar/AdminSidebar';

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector} from 'react-redux'





const AdminHomePage = () => {

  const { user } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  // const dispatch = useDispatch()

  useEffect(() => {
    // if (isError) {
    //   toast.error(message)
    // }

    if (!user.auth.isAdmin) {
      navigate('/')
    }

    // getCategories(dispatch);
    // dispatch(reset())
  }, [user, navigate])

  return (
    <div className="home">
    {/* <AdminSidebar/> */}
    {/* <AdminSidebar/> */}
    <div className="homeContaineris">
      {/* <AdminNavbar/> */}
      <h2>Admin Dashboard</h2>
      <h3>You can Read and Delete Users and Categories</h3>
      {/* <Table/> */}
      
      
      
    </div>

  </div>
  )
}

export default AdminHomePage