import React, { useEffect } from 'react'
import './Main.css'
import { getHome } from '../../../api/authService';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/userSlice';
import { useDispatch } from 'react-redux';

const MainPage = () => {

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(()=>{
    const fetchHomeData = async() =>{
      const token = localStorage.getItem("token");
      if(!token){
        navigate('/');
        return;
      }

      try{
        const data = await getHome();
        console.log("data: ", data);
        console.log("token po zalogowaniu: ", localStorage.token);

        // console.log(data.token);
        setMessage(data.message);
      } catch(error){
        setError(error);
      }
    };
    fetchHomeData();
  }, [navigate])

  const tasks = [{
    name: 'take a dog',
    index: 1,
  },
  {
    name: 'brush your teath',
    index: 2,
  }
]

const handleLogOut = () => {
  localStorage.removeItem("token"); // Usuń token z localStorage
  dispatch(logout());
  console.log("logged out successfully");
  navigate('/'); // Przeniesienie do strony głównej po usunięciu tokena
}

  return (
    <div className='container'>
      <button onClick={handleLogOut}>Log Out</button>
      <div className='header'>
          <h3>To Do</h3>
          <input type='text'></input>
        <br />
          <button>Add task +</button>
      </div>
      <div className='tasks'>
        <ul className='list'>
           {tasks.map((task)=>{return <li key={task.index}>{task.name}</li>})}
        </ul>
      </div>
    </div>
  )
}

export default MainPage