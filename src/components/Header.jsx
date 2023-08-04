import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset} from '../features/auth/authSlice'
import logo from '../assets/cine.png'

const Header = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector ((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/login')
    }

  return (
    <header className='header'>
        <div className='logo'>
           <img src={logo} width='20' />
            <Link to='/'>Oura Movies </Link>
        </div>
        <ul>
            {user ? 
            (
                <>
                    <button className='btn' onClick={onLogout}>
                        <FaSignOutAlt /> Logout
                    </button>
                </>
                ) 
            : 
            (
                <>
                    <li>
                     <Link to='/login'> <FaSignInAlt /> Login </Link>
                    </li>
                    <li>
                     <Link to='/register'> <FaUser /> Registrar </Link>
                     </li>
                </>
            )}
        </ul>

    </header>
  )
}

export default Header