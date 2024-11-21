import express from "express";
import {FetchTasks, AddTask} from "../controllers/taskController.js"
import { getQuoute } from "../controllers/quoteController.js";

const router = express.Router();

router.post("/createTask", AddTask);
router.get("/tasks", FetchTasks);
router.get('/quote', getQuoute)

export default router;