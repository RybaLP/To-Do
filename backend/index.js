import express from 'express'
import { ConnectDB } from './db/index.js';
import router from './routes/userRoutes.js';
import dotenv from 'dotenv';
dotenv.config();



const app = express();

app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    ConnectDB();
    console.log('server is running on port http://localhost:5000');
})

