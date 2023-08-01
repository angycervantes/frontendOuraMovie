import axios from "axios";

const API_URL = 'https://plum-grumpy-ostrich.cyclic.app/api/users/'

//CREAR USUARIO

const register = async (userData) => {
    const response = await axios.post(API_URL, userData)
    return response.data

}

const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    
    return response.data

}

// logout
const logout = () => {
    localStorage.removeItem('user')
}

const authService = { 
    register,
    login,
    logout
}

export default authService