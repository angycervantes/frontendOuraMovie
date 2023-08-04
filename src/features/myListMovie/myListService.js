import axios from "axios";

const API_URL = 'https://plum-grumpy-ostrich.cyclic.app/api/users/'

// Add movie a mi lista
const addMovie = async(movieId, token) => {
    const config = {
        headers : {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, movieId, config)

    return response.data 
}

const movieService = {
    addMovie
}

export default movieService