import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import MovieForm from "../components/MovieForm"
import Spinner from "../components/Spinner"
import { getMovies, reset } from "../features/Movie/movieSlice"
import MovieItem from "../components/MovieItem"
import MyListMovie from "../components/MyListMovie"

const Dashboard = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state)=> state.auth)
  const { movies, isLoading, isError, message } = useSelector((state)=> state.movie)

  useEffect(()=>{

    if(isError){
      console.log(message)
    }

    if(!user) {
      navigate ('/login')
    }

    dispatch(getMovies())

    return () => {
      dispatch(reset())
    }

  }, [user, navigate, isError, message, dispatch])

    if (isLoading){
    return <Spinner />
    }

    console.log (movies)
    
  return (
    <>
    <section className='heading'>
    <h4> Bienvenidi {user && user.email} </h4>
    <p>Dashboard movies</p>
    </section>

    <MovieForm />
    <MyListMovie />

    <section className="">
      <div className="card-group">
        {movies.length > 0 ? (
          <div className="card" style={{ maxWidth: '300px' }} >
            {movies.map((movie)=>(
            <MovieItem key={movie._id} movie={movie} /> 
            ))}
          </div>
          ):(<h3> No hay películas que mostrar</h3>
          )}

      </div>

    </section>
    </>
  )
}

export default Dashboard