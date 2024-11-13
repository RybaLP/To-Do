import express from "express";
import {verifyToken} from '../middleware/authMiddleware.js'
const router = express.Router();
import { LoginUser, RegisterUser } from "../controllers/authController.js";

router.post('/login', LoginUser);
router.post('/register', RegisterUser);
router.get('/home', verifyToken, (req,res)=>{
    res.status(201).json({success: true, message: "welcome to home page! "});
})

export default router;
