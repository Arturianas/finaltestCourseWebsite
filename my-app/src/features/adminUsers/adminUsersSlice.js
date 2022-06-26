import { createSlice } from "@reduxjs/toolkit";

export const adminUsersSlice = createSlice({
  name: "adminUsers",
  initialState: {
    users: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getUsersStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getUsersSuccess: (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
    },
    getUsersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteUserSuccess: (state, action) => {
      state.isFetching = false;
    //   state.courses.splice(
    //     state.products.findIndex((item) => item._id === action.payload),
    //     1
    //   );
    state.users = state.users.filter((user)=> user._id !== action.payload)
    },
    deleteUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE COURSE
    updateUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateUserSuccess: (state, action) => {
      state.isFetching = false;
      // state.products[
      //   state.products.findIndex((item) => item._id === action.payload.id)
      // ] = action.payload.updatedCourse;
    },
    updateUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD COURSE
    addUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addUserSuccess: (state, action) => {
      state.isFetching = false;
      // state.courses.push(action.payload);
    },
    addUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
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
} = adminUsersSlice.actions;

export default adminUsersSlice.reducer;