import React from 'react';
import './Register.css'

const Register = () => {
  return (
    <div className='container'>
      <input type='text' placeholder='username' className='input'/>
      <input type='email' placeholder='example@gmail.com' className='input' />
      <input type='password' placeholder='password' className='input' />
    </div>
  );
}

export default Register;
