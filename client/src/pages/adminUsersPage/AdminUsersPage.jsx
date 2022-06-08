import React from 'react'
import AdminNavbar from '../../components/adminNavbar/AdminNavbar'
import AdminSidebar from '../../components/adminSidebar/AdminSidebar'
import Datatable from '../../components/datatable/Datatable'

const AdminUsersPage = ({columns}) => {
  return (
    <div className="home">
    <AdminSidebar/>
    <div className="homeContaineris">
      <AdminNavbar/>
      <h2>hey all users</h2>
      <Datatable columns={columns}/>
      
    </div>

  </div>
  )
}

export default AdminUsersPage