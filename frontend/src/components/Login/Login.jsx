import React from 'react'
import './Link.css'

const Login = () => {
    return (
      <div className='container'>
          <input type='input' placeholder='Username'></input>
          <input type='input' placeholder='Password'></input>
          <button>Submit</button>
      </div>
    );
  }
  
  export default Login;
  