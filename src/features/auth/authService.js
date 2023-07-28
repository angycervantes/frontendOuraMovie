import axios from "axios";

const API_URL = 'https://gray-gleaming-bat.cyclic.app/api/users/'

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

const authService = { 
    register,
    login
}

export default authService