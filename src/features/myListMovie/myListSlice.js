import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import myListService from './myListService'


const initialState = {
    myListMovie: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//Agregar una nueva pelicula a lista de usuarios
export const addMovie = createAsyncThunk('movies/add', async(movieId, thunkAPI)=>{
    try {  
        const token = thunkAPI.getState().auth.user.token     
        return await movieService.addMovie(movieId, token)
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString()
      return thunkAPI.rejectWithValue(message)
    }
})

export const authSlice = createSlice({
    name: 'myList',
    initialState,
    reducers:{
        reset:(state) => initialState
    },
    extraReducers: ( builder ) => {
        builder
        .addCase(addMovie.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(addMovie.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.myListMovie.push(action.payload)
        })
        .addCase(addMovie.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        
    }})