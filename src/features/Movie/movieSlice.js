import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieService from './movieService'

const initialState = {
    movie: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//Crear una nueva pelicula
export const createMovie = createAsyncThunk('movies/crear', async(movieData, thunkAPI)=>{
    try {       
        return await movieService.createMovie(movieData)
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString()
      return thunkAPI.rejectWithValue(message)
    }
})



export const movieSlice = createSlice ({

    name: 'movie',
    initialState,
    reducers:{
    reset:(state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createMovie.pending, (state) =>{
                state.isLoading = true
            })
            .addCase(createMovie.fulfilled, (state, action) =>{
                state.isLoading = false
                state.isSuccess = true
                //state.movies.push (action.p)
            })
            .addCase(createMovie.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = movieSlice.actions

export default movieSlice.reducer