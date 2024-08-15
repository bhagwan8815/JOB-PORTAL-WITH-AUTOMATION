import express from  "express";
import { config } from "dotenv";
import cors from "cors";
import {connection} from "./database/connection.js"
import { errormiddleware } from "./middlewares/error.js";


const app = express();
config({path: "./config/config.env"})

// frontend and backend connection 
app.use(cors({
    origin: ["process.env.FRONTEND_URL"],
    methods:["GET" , "POST", "PUT", "DELETE"],
    Credential: true,
}))

// app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extends: true}));

connection();
app.use(errormiddleware);

export default app;