import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import courseService from './courseService.js';



const initialState = {
    courses: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//Create New Goal
export const createCourse = createAsyncThunk('courses/create', async (courseData, thunkAPI) => {
 console.log('it is course slice before try/catch')
    try{
        // const token = thunkAPI.getState().auth.user.token;
        return await courseService.createCourse(courseData)
    }catch(error) {
        const message = 
        (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }


})



// //Get User Goals
// export const getGoals = createAsyncThunk(
//     'goals/getAll',
//     async (_, thunkAPI) => {
//         try{
//             const token = thunkAPI.getState().auth.user.token;
//         return await goalService.getGoals(token)
//         } catch (error){
//             const message = 
//         (error.response && error.response.data && error.response.data.message)
//         || error.message || error.toString()

//         return thunkAPI.rejectWithValue(message)
//         }
//     }
// )




// //Delete User Goal
// export const deleteGoal = createAsyncThunk(
//     'goals/delete',
//     async (id, thunkAPI) => {
//         try{
//             const token = thunkAPI.getState().auth.user.token
//         return await goalService.deleteGoal(id, token)
//         } catch (error){
//             const message = 
//         (error.response && error.response.data && error.response.data.message)
//         || error.message || error.toString()

//         return thunkAPI.rejectWithValue(message)
//         }
//     }
// )



export const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder)=>{
        builder
            .addCase(createCourse.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createCourse.fulfilled, (state,action) => {
                state.isLoading = false
                state.isSuccess = true
                state.goals.push(action.payload) 
            })
            .addCase(createCourse.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            // .addCase(getGoals.pending, (state) => {
            //     state.isLoading = true
            // })
            // .addCase(getGoals.fulfilled, (state,action) => {
            //     state.isLoading = false
            //     state.isSuccess = true
            //     state.goals = action.payload
            // })
            // .addCase(getGoals.rejected, (state, action) => {
            //     state.isLoading = false
            //     state.isError = true
            //     state.message = action.payload
            // })
            // .addCase(deleteGoal.pending, (state) => {
            //     state.isLoading = true
            // })
            // .addCase(deleteGoal.fulfilled, (state,action) => {
            //     state.isLoading = false
            //     state.isSuccess = true
            //     state.goals = state.goals.filter((goal) => goal._id !== action.payload.id)
            // })
            // .addCase(deleteGoal.rejected, (state, action) => {
            //     state.isLoading = false
            //     state.isError = true
            //     state.message = action.payload
            // })
           
        
    }
});

export const {reset} = courseSlice.actions;
export default courseSlice.reducer;