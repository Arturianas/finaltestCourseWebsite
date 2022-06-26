import axios from 'axios'

import {
    getCoursesFailure,
    getCoursesStart,
    getCoursesSuccess,
    deleteCourseFailure,
    deleteCourseStart,
    deleteCourseSuccess,
    addCourseFailure,
    addCourseSuccess,
    updateCourseFailure,
    updateCourseStart,
    updateCourseSuccess,
    // addProductFailure,
    addCourseStart,
    // addProductSuccess,
  } from "./instructorCoursesSlice.js";


  export const getInstructorCourses = async (id, dispatch) => {
    dispatch(getCoursesStart());
    try {
      const res = await axios.get(`/course/user/${id}`);
      dispatch(getCoursesSuccess(res.data));
    } catch (err) {
      dispatch(getCoursesFailure());
    }
  };
  
  export const deleteCourse = async (id, dispatch) => {
    dispatch(deleteCourseStart());
    try {
       const res = await axios.delete(`/course/${id}`)
      dispatch(deleteCourseSuccess(id));
    } catch (err) {
      dispatch(deleteCourseFailure());
    }
  };


  export const addCourse = async (courseData, dispatch) => {
    dispatch(addCourseStart());
    try {

      const res = await axios.post(`/course/createCourse`, courseData)

      // dispatch(addCourseSuccess(res.data))
      dispatch(addCourseSuccess())
    } catch (err) {
      dispatch(addCourseFailure())
    }
  }


  export const updateCourse = async (courseId, updatedCourseData, dispatch) => {
    dispatch(updateCourseStart());
    try {

      const res = await axios.put(`/course/${courseId}`, updatedCourseData)

      dispatch(updateCourseSuccess(res.data))
    } catch (err) {
      dispatch(updateCourseFailure())
    }
  }

