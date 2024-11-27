import express from "express";
import {FetchTasks, AddTask, deleteTask} from "../controllers/taskController.js"
import { getQuoute } from "../controllers/quoteController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/createTask",verifyToken, AddTask);
router.get("/tasks",verifyToken, FetchTasks);
router.get('/quote', getQuoute)
router.delete('/tasks/delete',verifyToken, deleteTask);

export default router;