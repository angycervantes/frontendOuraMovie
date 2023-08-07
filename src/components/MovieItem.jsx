import movieService from "../features/Movie/movieService"

const MovieItem = ({movie}) => {
  return (
    <div className='tarea'>
      <div>
        {new Date (movie.createdAt).toLocaleString('es-MX')}
      </div>
      <h3> {movie.title}</h3>
      <p className="content">{movie.overview}</p>
      <h6>{new Date (movie.release_date).toLocaleString('es-MX')}</h6>
    </div>
  )
}

export default MovieItem
