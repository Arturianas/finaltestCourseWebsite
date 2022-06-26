import axios from 'axios'

import {
    getCategoriesStart,
  getCategoriesSuccess,
  getCategoriesFailure,
  deleteCategoryStart,
  deleteCategorySuccess,
  deleteCategoryFailure,
  updateCategoryStart,
  updateCategorySuccess,
  updateCategoryFailure,
  addCategoryStart,
  addCategorySuccess,
  addCategoryFailure,
  } from "./categoriesSlice.js";


  export const getCategories = async (dispatch) => {
    dispatch(getCategoriesStart());
    try {
      const res = await axios.get(`/categories`);
      dispatch(getCategoriesSuccess(res.data));
    } catch (err) {
      dispatch(getCategoriesFailure());
    }
  };
  
  export const deleteCategory = async (id, dispatch) => {
    dispatch(deleteCategoryStart());
    try {
       const res = await axios.delete(`/categories/${id}`)
      dispatch(deleteCategorySuccess(id));
    } catch (err) {
      dispatch(deleteCategoryFailure());
    }
  };


  export const addCategory = async (courseData, dispatch) => {
    dispatch(addCategoryStart());
    try {

      const res = await axios.post(`/categories`, courseData)

      dispatch(addCategorySuccess())
    } catch (err) {
      dispatch(addCategoryFailure())
    }
  }


  export const updateCategory = async (categoryId, updatedCategoryData, dispatch) => {
    dispatch(updateCategoryStart());
    try {

      const res = await axios.put(`/categories/${categoryId}`, updatedCategoryData)

      dispatch(updateCategorySuccess())
    } catch (err) {
      dispatch(updateCategoryFailure())
    }
  }

