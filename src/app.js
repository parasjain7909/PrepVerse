import express from 'express'
import connectdb from './config/database.js';
import router from './routes/authapiroute.js';
import cookieParser from 'cookie-parser';
const app=express()
connectdb()
app.use(express.json())
app.use(cookieParser())
app.use("/auth/api",router)
export default app;