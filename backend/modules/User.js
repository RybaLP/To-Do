import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema({
    username:{
        type: "String",
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 20
    },
    password:{
        type: "String",
        required: true,
        minLength:5,
    },
    email:{
        type: "String",
        required: true, 
        unique: true,
        minLength: 6,
        maxLength: 30
    },
    tasks: [{type: mongoose.Schema.Types.ObjectId, ref: 'Task'}]
});

userSchema.pre('save', async function(next){
    console.log("haszowanie hasla ");
    if(!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});


const User = mongoose.model('User', userSchema);
export default User;

