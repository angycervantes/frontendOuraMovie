import { useState, useEffect } from "react"
import { FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux/'
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

export const Register = () => {
    const [formData, setFormData ]= useState({
        email:'',
        password:'',
        password2:''
    })

    const  { email, password, password2 } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))

    }

    useEffect(()=>{
        if(isError){
            toast.error(message)
        }

        if (isSuccess) {
            navigate('/login')
        }

        dispatch(reset())

    },[user, isError, isSuccess, message, navigate, dispatch])

    const onSubmit = (e) =>{
        e.preventDefault()

        if( password !== password2){
            toast.error('las contraseñas no coinciden')
        }else{
            const userData = {
                email,
                password
            }
            dispatch(register(userData))
        }

    }


    if (isLoading){
        return <Spinner />
    }

  return (
    <>
    <section className='heading'>
        
     <h5>  <FaUser size={20} /> Registrar un usuario </h5>
        <p> Oura Movies</p>
    </section>
    <section className='form'>
        <form onSubmit={onSubmit}>
            <div className='form-group'>
            <input type='email'
            className='form-control'
            id='email' 
            name='email'
            value={email}
            placeholder='Ingresa tu correo'
            onChange={onChange}
            />
            </div>
            <div className='form-group'>
            <input type='password'
            className='form-control'
            id='password' 
            name='password'
            value={password}
            placeholder='Ingresa tu contraseña'
            onChange={onChange}
            />
            </div>
            <div className='form-group'>
            <input type='password'
            className='form-control'
            id='password2' 
            name='password2'
            value={password2}
            placeholder='Confirma tu contraseña'
            onChange={onChange}
            />
            </div>
            <div className='form-group'>
                <button type="submit" className='btn btn-block'> Crear </button>
            </div>
        </form>
    </section>
    </>
  )
}

export default Register