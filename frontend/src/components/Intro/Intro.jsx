import React from 'react'
import {Link} from 'react-router-dom';
import './Intro.css'

const Intro = () => {
    return (
         <div className='intro-container'>
            <div className='intro-header'>
                <h3>To Do</h3>
            </div>
            <div className='intro-footer'>
                    <Link to={'./login'}>
                        <button>Login</button>
                    </Link>

                    <Link to={'/register'}>
                        <button>Register</button>
                    </Link>
            </div>
      </div>
    );
  }
  
  export default Intro;
  