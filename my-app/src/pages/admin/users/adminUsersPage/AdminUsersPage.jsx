import React from 'react'
import './adminUsersPage.scss'


import AdminDatatable from '../../../../components/admin/adminDatatable/AdminDatatable'
import AdminSidebar from '../../../../components/admin/adminSidebar/AdminSidebar'


import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import {getUsers} from '../../../../features/adminUsers/adminUsersService'



const AdminUsersPAge = ({columns}) => {


  const { user } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    // if (isError) {
    //   toast.error(message)
    // }

    if (!user || !user.auth.isAdmin) {
      navigate('/')
    }

    getUsers(dispatch);
    // dispatch(reset())
  }, [user, navigate, dispatch])

  const { users } = useSelector((state) => state.adminUsers)



  return (
    <div className="home">
    {/* <AdminSidebar/> */}
    {/* <AdminSidebar/> */}
    <div className="homeContaineris">
      {/* <AdminNavbar/> */}
      <h2>hey all users</h2>
      <AdminDatatable columns={columns} data={users}/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>

  </div>
  )
}

export default AdminUsersPAge