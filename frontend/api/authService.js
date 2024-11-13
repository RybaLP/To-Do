import axios from 'axios';

const API_URL = "http://localhost:5000";

export const registerUser = async(userData) => {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
}

export const loginUser = async(userData) => {
    const response = await axios.post(`${API_URL}/login`, userData);
    console.log('odpowiedz z serwera: ', response)
    if(response.data && response.data.data){
        const token = response.data.data;
        localStorage.setItem("token", token);
        console.log('token zpisany w local storage: ', token) /// test 
    }
    console.log('odpowiedz z get user', response.data);
    console.log('localstorage token : ' ,localStorage.token);

    return localStorage.token;
}

export const getHome = async(req,res) => {
    const token = localStorage.getItem("token");
    if(!token){
        throw new Error("brak tokena, uzytkownik nie jest zalogowany! ");
    }

    console.log('token w gethome: ' , token);

    const response = await axios.get(`${API_URL}/home`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    console.log('odpowiedz z /home ', response);  
    
    return {jwt: token, response: response.data}
}

