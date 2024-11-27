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
    try{
        const newTask = new Task({task, userId: req.userId});
        await newTask.save();
        res.status(201).json({success: true, message: "Task added successfully!"});
    } catch(error){
        return res.status(500).json({success: false, message:"something went wrong"});
    }
}

export const FetchTasks = async(req,res) => {
    try{
        const tasks = await Task.find({userId: req.userId});
        return res.json({success: true, data: tasks});
    } 
    catch(error){
        return res.status(500).json({success: false, message:"cant find tasks! "});
    }
}


export const deleteTask = async(req,res) => {
    const {taskId} = req.body;
    console.log("task id in controller : " , taskId);

    try{
        const deletedTask = await Task.findByIdAndDelete(taskId);
        if(!deletedTask){return res.status(401).json({success:false, message: "Deleted task does not exist !  "})}
        return res.status(200).json({success : true , message : "Task deleted successfuly! "});
    } catch (error) {
        console.error(error);
        return res.status(500).json({success:false, message: `error : ${error}`});
    }
}

