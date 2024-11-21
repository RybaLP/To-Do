import React, { useEffect } from 'react'
import { useState } from 'react';
import { addTaskAsync } from '../../redux/taskSlice';
import { useDispatch } from 'react-redux';
import { fetchQuote } from '../../../api/quoteService';



const CreateTask = () => {
    const [task, setTask] = useState('');
    const [quote, setQuoute] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            console.log(task);
            await dispatch(addTaskAsync(task));
            setTask('');
            
        } catch(error){
            console.error(error);
        }
    }
    useEffect(()=>{
        const fetchQuouteData = async () => {
            try{
                const response = await fetchQuote();
                setQuoute(response[0]?.quote || "no qoute found! ");
            } catch(error){
                console.error(error);
                setQuoute("No Quoute Found");
            }
        }
       fetchQuouteData();
    }, [])

  return (

    <div>
        <h2>Create Task</h2>
        <form onSubmit={handleSubmit}>
            <input type='text' value={task} placeholder='enter task' onChange={(e)=> setTask(e.target.value)}></input>
            <button type='submit'>Add+</button>
        </form>
        <h2>{quote}</h2>
    </div>

  )
}

export default CreateTask