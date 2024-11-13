import jwt from 'jsonwebtoken';

export const verifyToken = (req,res,next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.startsWith('Bearer') ? authHeader.split(' ')[1] : authHeader;

    if(!token){
        return res.status(401).json({message:"no token provided! "});
    }
    
    jwt.verify(token, process.env.JWT_SECRET, (err,decoded)=>{
        if(err){
            return res.status(401).json({message: "Unauthorized! "});
        }
        req.userID = decoded.id;
        next();
    });
};