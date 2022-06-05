import React from 'react'
import './manageCourse.css'
import { useState, useEffect } from 'react'
// import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
// import { login, reset } from '../../features/auth/authSlice'
import { createCourse, reset } from '../../features/course/courseSlice.js'
// import Spinner from '../components/Spinner'


const ManageCourse = () => {
    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
      )


    const [formData, setFormData] = useState({
        // email: '',
        instructor: user.details._id,
        courseName: '',
        category: '',
        level: '',
        img: '',
        title: '',
        desc: '',
        price: 0,
      })
    
      const { instructor, courseName, category, level, img, title, desc, price } = formData
    
      const navigate = useNavigate()
      const dispatch = useDispatch()
    
    //   const { user, isLoading, isError, isSuccess, message } = useSelector(
    //     (state) => state.auth
    //   )

    //   console.log(user)
    //   console.log(formData)
    
      useEffect(() => {
        if (isError) {
          toast.error(message)
        }
    
        if (!user.auth.isInstructor) {
          navigate('/')
        }
    
        dispatch(reset())
      }, [user, isError, isSuccess, message, navigate, dispatch])
    
      const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }
    
      const onSubmit = (e) => {
        e.preventDefault()
    
        const courseData = {
            instructor,
            name: courseName,
            category,
            level,
            img,
            title,
            desc,
            price: parseInt(price),
        }
    
        console.log(courseData)
        dispatch(createCourse(courseData))
      }
    
      // if (isLoading) {
      //   return <Spinner />
      // }
    
      return (
        <>
          <section className='heading'>
            <h1>
              {/* <FaSignInAlt /> Login */}
            </h1>
            <p>Create Course</p>
          </section>
    
          <section className='form'>
            <form onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='name'
                  name='courseName'
                  value={courseName}
                  placeholder='Enter Your Course name'
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='category'
                  name='category'
                  value={category}
                  placeholder='Enter Category'
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='level'
                  name='level'
                  value={level}
                  placeholder='Enter Level'
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='img'
                  name='img'
                  value={img}
                  placeholder='Add Image'
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='title'
                  name='title'
                  value={title}
                  placeholder='Enter Title'
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='desc'
                  name='desc'
                  value={desc}
                  placeholder='Enter Description'
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type="number"
                  min={10}
                  max={10000000}
                  className='form-control'
                  id='price'
                  name='price'
                  value={price}
                  placeholder='Enter Price'
                  onChange={onChange}
                />
              </div>
    
              <div className='form-group'>
                <button type='submit' className='btn btn-block'>
                  Create Course
                </button>
              </div>
            </form>
          </section>
        </>
      )
}

export default ManageCourse