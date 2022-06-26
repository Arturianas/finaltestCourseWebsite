import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getCategoriesStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getCategoriesSuccess: (state, action) => {
      state.isFetching = false;
      state.categories = action.payload;
    },
    getCategoriesFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteCategoryStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteCategorySuccess: (state, action) => {
      state.isFetching = false;
    //   state.courses.splice(
    //     state.products.findIndex((item) => item._id === action.payload),
    //     1
    //   );
    state.categories = state.categories.filter((category)=> category._id !== action.payload)
    },
    deleteCategoryFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE COURSE
    updateCategoryStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateCategorySuccess: (state, action) => {
      state.isFetching = false;
      // state.products[
      //   state.products.findIndex((item) => item._id === action.payload.id)
      // ] = action.payload.updatedCourse;
    },
    updateCategoryFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD COURSE
    addCategoryStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addCategorySuccess: (state, action) => {
      state.isFetching = false;
      // state.courses.push(action.payload);
    },
    addCategoryFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
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
} = categoriesSlice.actions;

export default categoriesSlice.reducer;