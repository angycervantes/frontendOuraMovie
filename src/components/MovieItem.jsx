import movieService from "../features/Movie/movieService"

const MovieItem = ({movie}) => {

  const urlposters = "https://image.tmdb.org/t/p/w500"

  return (
    <>
    <div className="border primary">
    <img src={movie?.poster_path? urlposters + movie.poster_path : 'https://imagenes.elpais.com/resizer/_4O7a_UyXWMmv0NiZyxUMo9aSQ4=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/N7NN4OQLUBIJVBHV7S4MFRXKOA.jpg'}
      style={{ maxHeight: '250px' }}
      alt={movie.title} />
    
    <div className="">
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="mb-4 text-truncate">{movie.overview}</p>
        <p className="card-text text-start"><small className="text-body-secondary">{new Date (movie.release_date).toLocaleString('es-MX')}</small></p>
        <button class="btn btn-primary" type="submit">ADD +</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default MovieItem
