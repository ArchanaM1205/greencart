import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import 'dotenv/config';
import userrouter from './routes/userroute.js';

const app=express();
const port=process.env.PORT || 4000;

await connectDB()


//Allow multiple origin
const allowesOrigins=['http://localhost:5173']

//Middleware Config

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:allowesOrigins,Credentials:true}));


app.get('/',(req,res)=> res.send("API is Working"));
app.use('/api/user',userrouter)


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})