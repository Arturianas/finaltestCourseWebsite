import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/auth/authSlice'
import courseReducer from '../features/course/courseSlice.js'
import cartReducer from '../features/cart/cartSlice.js'
import categoryReducer from '../features/adminCategory/categorySlice.js'

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    auth: authReducer,
    course: courseReducer,
    cart: cartReducer,
    category: categoryReducer,
  },
});
