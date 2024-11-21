import Task from "../modules/Task.js";

export const AddTask = async(req,res) =>{
    const {task} = req.body;
    
    if(!task){
        return res.status(400).json({success:false, message:"provide task field"});
    }

    if(task.length < 5 || task.length > 15) {
        return res.status(400).json({
            success: false,
            message: "Task must be betwen 5 and 15"
        })
    }

    const newTask = new Task({task});
    await newTask.save();
    res.status(201).json({success: true, message: "Task added successfully!"});
}

export const FetchTasks = async(req,res) => {
    try{
        const tasks = await Task.find({});
        return res.json({success: true, data: tasks});
    } 
    catch(error){
        return res.status(500).json({success: false, message:"cant find tasks! "});
    }
}
