import { useState, useEffect } from "react"
import { FaSignInAlt } from 'react-icons/fa'

export const Login = () => {
    const [formData, setFormData ]= useState({
        email:'',
        password:''
    })

    const  { email, password } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))

    }

    const onSubmit = (e) =>{
        e.preventDefault()
    }

  return (
    <>
    <section className='heading'>
        <h4> <FaSignInAlt />Inicia sesión </h4>
        <p> Inicia sesión en Oura Movies</p>
    </section>
    <section className='form'>
        <form onSubmit={onSubmit}>
            <div className='form-group'>
            <input type='email'
            className='form-control'
            id='email' 
            name='email'
            value={email}
            placeholder='Porfavor teclea tu correo'
            onChange={onChange}
            />
            </div>
            <div className='form-group'>
            <input type='password'
            className='form-control'
            id='password' 
            name='password'
            value={password}
            placeholder='Porfavor teclea tu contraseña'
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

export default Login