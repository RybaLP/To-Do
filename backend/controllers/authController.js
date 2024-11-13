import User from "../modules/User.js";
import { createToken } from '../middleware/token.js' 
import bcrypt from 'bcrypt'

const RegisterUser = async(req,res) => {
    const {username, email, password} = req.body;
    try{
       
        if(!username || !email || !password){
            return res.status(401).json({success:false, message: "Provide all fields! "});
        }
       
        const existingUser = await User.findOne({$or: [{username}, {email}]});
        if(existingUser){
            return res.status(400).json({success: false, message: "user with this email or username already exists"});
        }

        const user = new User({username, email, password});
        await user.save();
        console.log("Zapisane hasło:", user.password);
        
        // const token = createToken(user);
        // res.status(201).json({success: true, data: {user, token}});

        res.status(201).json({success: true, message: 'registered successfuly '});

    } catch(err){
        console.error(err);
        res.status(500).json({success:false, message: "something went wrong! "});
    }
}

const LoginUser = async(req,res) => {
    const {username, password} = req.body;
    const existingUser = await User.findOne({username});
    if(!existingUser){
        return res.status(401).json({success: false, message: "cant find this username in db"});
    }   
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if(!isPasswordValid){
        return res.status(401).json({success: false, message: "invalid password"});
    }
    const token = createToken(existingUser);
    res.status(201).json({success: true, data: token});
}

export {RegisterUser, LoginUser}; 