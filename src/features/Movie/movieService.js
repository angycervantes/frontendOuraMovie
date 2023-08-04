import axios from "axios";

const API_URL = 'https://plum-grumpy-ostrich.cyclic.app/api/movies/'

// crear una nueva peli
const createMovie = async(movieData) => {

    const response = await axios.post(API_URL, movieData)

    return response.data
}

const movieService ={
    createMovie
}

export default movieService