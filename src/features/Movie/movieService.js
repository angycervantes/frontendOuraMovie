import axios from "axios";

const API_URL = 'https://plum-grumpy-ostrich.cyclic.app/api/movies/'

// crear una nueva peli
const createMovie = async(movieData) => {

    const response = await axios.post(API_URL, movieData)

    return response.data.movie
}

// obtener una nueva peli
const getMovies = async() => {

    const response = await axios.get(API_URL)

    return response.data.movies
}

const movieService ={
    createMovie,
    getMovies
}

export default movieService