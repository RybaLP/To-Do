import React, { useEffect } from 'react'
import { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { loginUserAsync } from '../../redux/userSlice';
import {useNavigate} from 'react-router-dom';
import './Link.css'

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {loading, error, isLoggedIn} = useSelector(state => state.user);


    const handleSubmit = async(e) => {
        e.preventDefault();
        const userData = {username, password};
        await dispatch(loginUserAsync(userData))
    }

    // zmiana routingu do home

    
    
    useEffect(()=>{
      if(isLoggedIn){
        navigate('/home');
      }
    }, [isLoggedIn, navigate])
    


    return (
      <div className='container'>
        <form method='POST' onSubmit={handleSubmit}>
          <input type='input' placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)}></input>
          <input type='input' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
          <button type='submit'>Submit</button>
        </form>
        {loading && <p>Loading...</p>}
        {error && <p style={{color: 'red'}}></p>}
      </div>
    );
  }
  
  export default Login;
  