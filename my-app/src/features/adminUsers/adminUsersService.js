import axios from 'axios'

import {
    getUsersStart,
    getUsersSuccess,
    getUsersFailure,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFailure,
    updateUserStart,
    updateUserSuccess,
    updateUserFailure,
    addUserStart,
    addUserSuccess,
    addUserFailure,
  } from "./adminUsersSlice";


  export const getUsers = async (dispatch) => {
    dispatch(getUsersStart());
    try {
      const res = await axios.get(`/users`);
      dispatch(getUsersSuccess(res.data));
    } catch (err) {
      dispatch(getUsersFailure());
    }
  };
  
  export const deleteUser = async (id, dispatch) => {
    dispatch(deleteUserStart());
    try {
       const res = await axios.delete(`/users/${id}`)
      dispatch(deleteUserSuccess(id));
    } catch (err) {
      dispatch(deleteUserFailure());
    }
  };


//   export const addCategory = async (courseData, dispatch) => {
//     dispatch(addCategoryStart());
//     try {

//       const res = await axios.post(`/categories`, courseData)

//       dispatch(addCategorySuccess())
//     } catch (err) {
//       dispatch(addCategoryFailure())
//     }
//   }


//   export const updateCourse = async (courseId, updatedCourseData, dispatch) => {
//     dispatch(updateCourseStart());
//     try {

//       const res = await axios.put(`/course/${courseId}`, updatedCourseData)

//       dispatch(updateCourseSuccess(res.data))
//     } catch (err) {
//       dispatch(updateCourseFailure())
//     }
//   }

