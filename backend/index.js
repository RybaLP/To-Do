import express from 'express'
import cors from 'cors';
import { ConnectDB } from './db/index.js';
import router from './routes/userRoutes.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type, Authorization",
}

app.use(cors(corsOptions));

app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    ConnectDB();
    console.log('server is running on port http://localhost:5000');
})

