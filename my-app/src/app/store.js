import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import instructorCoursesReducer from '../features/instructorCourses/instructorCoursesSlice'
import categoriesReducer from '../features/categories/categoriesSlice'
import adminUsersReducer from '../features/adminUsers/adminUsersSlice'
import cartReducer from '../features/cart/cartSlice.js'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    instructorcourses: instructorCoursesReducer,
    categories: categoriesReducer,
    adminUsers: adminUsersReducer,
    cart: cartReducer,
  },
});
