import React, { useEffect } from 'react'
import './Main.css'
import { getHome } from '../../../api/authService';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/userSlice';
import { useDispatch , useSelector} from 'react-redux';
import { fetchTasksAsync } from '../../redux/taskSlice';

const MainPage = () => {

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const tasks = useSelector((state)=>state.tasks.tasks);
  const loading = useSelector((state) => state.tasks.loading);
  const fetchError = useSelector((state) => state.tasks.error);

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

useEffect(()=>{
  const token = localStorage.getItem("token");
  if(!token){
    navigate('/');
    return;
  }
  dispatch(fetchTasksAsync());
}, [dispatch, navigate])


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
        
          <button>
            <Link to="/create"> Add task +</Link>
          </button>


      </div>
      <div className='tasks'>
        {loading && <p>Loading tasks...</p>}
        {fetchError && <p style={{ color: 'red' }}>Error: {fetchError}</p>}
        <ul className='list'>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <li key={task.index}>{task.task}</li> // Upewnij się, że 'task.id' to unikalny identyfikator
            ))
          ) : (
            <li>No tasks found.</li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default MainPage