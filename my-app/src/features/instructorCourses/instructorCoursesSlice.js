import { createSlice } from "@reduxjs/toolkit";

export const instructorCourseSlice = createSlice({
  name: "instructorCourses",
  initialState: {
    courses: [],
    isFetching: false,
    isSuccess: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getCoursesStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getCoursesSuccess: (state, action) => {
      state.isFetching = false;
      // state.isSuccess = true;
      state.courses = action.payload;
    },
    getCoursesFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteCourseStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteCourseSuccess: (state, action) => {
      state.isFetching = false;
      // state.isSuccess = true;
    //   state.courses.splice(
    //     state.products.findIndex((item) => item._id === action.payload),
    //     1
    //   );
    state.courses = state.courses.filter((course)=> course._id !== action.payload)
    },
    deleteCourseFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE COURSE
    updateCourseStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateCourseSuccess: (state, action) => {
      state.isFetching = false;
      // state.isSuccess = true;
      // state.products[
      //   state.products.findIndex((item) => item._id === action.payload.id)
      // ] = action.payload.updatedCourse;
    },
    updateCourseFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD COURSE
    addCourseStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addCourseSuccess: (state, action) => {
      state.isFetching = false;
      state.isSuccess = true;
      // state.courses.push(action.payload);
    },
    addCourseFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getCoursesStart,
  getCoursesSuccess,
  getCoursesFailure,
  deleteCourseStart,
  deleteCourseSuccess,
  deleteCourseFailure,
  updateCourseStart,
  updateCourseSuccess,
  updateCourseFailure,
  addCourseStart,
  addCourseSuccess,
  addCourseFailure,
} = instructorCourseSlice.actions;

export default instructorCourseSlice.reducer;