import React, { useEffect } from 'react'
import './Main.css'
import { getHome } from '../../../api/authService';
import { useState } from 'react';

const MainPage = () => {

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(()=>{
    const fetchHomeData = async() =>{
      try{
        const data = await getHome();
        console.log("data: ", data);

        // console.log(data.token);
        setMessage(data.message);
      } catch(error){
        setError(error);
      }
    };
    fetchHomeData();
  }, [])

  const tasks = [{
    name: 'take a dog',
    index: 1,
  },
  {
    name: 'brush your teath',
    index: 2,
  }
]

  return (
    <div className='container'>
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