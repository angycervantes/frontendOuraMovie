import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import MovieForm from "../components/MovieForm"

const Dashboard = () => {

  const navigate = useNavigate()
  const { user } = useSelector((state)=> state.auth)

  useEffect(()=>{
    if(!user) {
      navigate ('/login')
    }
  }, [user, navigate])


  return (
    <>
    <section>
    <h2> Bienvenidi {user && user.email} </h2>
    <p>Todas las movies</p>
    </section>

    <MovieForm />
    </>
  )
}

export default Dashboard