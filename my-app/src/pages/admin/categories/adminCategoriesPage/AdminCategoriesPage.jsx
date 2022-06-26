import React from 'react'
import './adminCategoriesPage.scss'




import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import AdminSidebar from '../../../../components/admin/adminSidebar/AdminSidebar'
import {getCategories} from '../../../../features/categories/categoriesService'
import AdminDatatable from '../../../../components/admin/adminDatatable/AdminDatatable'


const AdminCategoriesPage = ({columns}) => {



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

    getCategories(dispatch);
    // dispatch(reset())
  }, [user, navigate,dispatch])

  const { categories } = useSelector((state) => state.categories)

  // const {user} = useSelector((state) => state.auth)
  // const dispatch = useDispatch()
  // const navigate = useNavigate()

  // const userId = user.details._id



  // const courses = useSelector((state) => state.instructorcourses.courses);

  return (
    <div className="home">
    {/* <AdminSidebar/> */}
    {/* <AdminSidebar/> */}
    <div className="homeContaineris">
      {/* <AdminNavbar/> */}
      <h2>Create Or Delete Categories</h2>
      <AdminDatatable columns={columns} data={categories}/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
    </div>

  </div>
  )
}

export default AdminCategoriesPage