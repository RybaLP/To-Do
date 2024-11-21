import axios from 'axios';
const API_URL = "http://localhost:5000";

export const fetchTasks = async () => {
    try{
        const response = await axios.get(`${API_URL}/tasks`);
        return response.data.data;
    } catch(error){
        throw error;
    }

    // if(!response.ok){
    //     throw new Error("Failed to fetch tasks! ");
    // }
    // const data = await response.json();
    // return data.data;
}

export const addTask = async (taskData) => {
    try {
        const response = await axios.post(API_URL + "/createTask", {
            task: taskData
        });
        console.log("Task added successfully!", response.data);
        return response.data;  
    } catch (error) {
        console.error("Failed to add task:", error);
        throw new Error("Failed to add task");  
    }
}