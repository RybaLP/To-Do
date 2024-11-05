import jwt from 'jsonwebtoken';

export const createToken = (user) => {
    return jwt.sign(
        {id: user._id, username: user.username},
        process.env.JWT_SECRET,
        {expiresIn: '1h'}
    );
};
