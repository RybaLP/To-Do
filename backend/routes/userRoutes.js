import express from "express";
const router = express.Router();
import { LoginUser, RegisterUser } from "../controllers/authController.js";

router.post('/login', LoginUser);
router.post('/register', RegisterUser);

export default router;
