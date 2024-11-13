import React, { useState } from 'react';
import './Register.css'
import { useDispatch } from 'react-redux';
import { registerUserAsync } from '../../redux/userSlice';

const Register = () => {
    const dispatch = useDispatch();

    const [username,setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async(e) => { 
      e.preventDefault();
      const userData = {username, email, password}
      try{
        await dispatch(registerUserAsync(userData));
        console.log("registered successfuly! ");
      }catch(error)
      {
        console.log(error);
      }
    }


  return (
    <form onSubmit={handleRegister}>
      <div className='container'>
        <input type='text' onChange={(e)=>setUsername(e.target.value)} placeholder='username' className='input'/>
        <input type='email' onChange={(e)=>setEmail(e.target.value)}placeholder='example@gmail.com' className='input' />
        <input type='password' onChange={(e)=>setPassword(e.target.value)}placeholder='password' className='input' />
        <button type='submit'></button>
      </div>
    </form>
  );
}

export default Register;
